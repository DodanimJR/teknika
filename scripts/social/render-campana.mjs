// Genera las imágenes de la campaña "Cursos de IA" (octubre 2026).
// Uso: node scripts/social/render-campana.mjs  → public/social/2026-10/*.jpg
// Requiere Playwright con Chromium (en la nube: /opt/pw-browsers/chromium).
import { readFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const PW = process.env.PLAYWRIGHT_MODULE || 'playwright';
const { chromium } = await import(PW);

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '../..');
const IMG = join(ROOT, 'public/img/');
const OUT = join(ROOT, 'public/social/2026-10/');
mkdirSync(OUT, { recursive: true });

const b64 = (f, mime) => `data:${mime};base64,${readFileSync(IMG + f).toString('base64')}`;
const WORD = b64('logo-horizontal-white.svg', 'image/svg+xml');
const ICON = b64('logo-icon.svg', 'image/svg+xml');
const FOTO = b64('patrick.jpg', 'image/jpeg');

const CSS = `
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:100%;height:100%}
body{font-family:'Inter',sans-serif;color:#fff;-webkit-font-smoothing:antialiased;position:relative;overflow:hidden;
 background:radial-gradient(120% 80% at 90% 0%, #224870 0%, #163548 45%, #122C34 100%)}
.grid{position:absolute;inset:0;opacity:.07;pointer-events:none;
 background-image:linear-gradient(#44CFCB 1px,transparent 1px),linear-gradient(90deg,#44CFCB 1px,transparent 1px);
 background-size:64px 64px;mask-image:radial-gradient(70% 60% at 85% 10%,#000,transparent)}
.c{color:#44CFCB}.m{color:#BCCCDC}
.wrap{position:absolute;inset:96px 88px 88px;display:flex;flex-direction:column}
.top{display:flex;justify-content:space-between;align-items:center}
.pill{display:inline-block;border:2px solid #44CFCB;color:#44CFCB;border-radius:999px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;font-size:24px;padding:10px 24px}
h1{font-size:96px;font-weight:800;letter-spacing:-.025em;line-height:1.02}
h2{font-size:68px;font-weight:800;letter-spacing:-.02em;line-height:1.06}
.foot{margin-top:auto;display:flex;justify-content:space-between;align-items:center;font-size:26px;font-weight:600}
.card{border:2px solid rgba(68,207,203,.35);background:rgba(68,207,203,.07);border-radius:24px}
.mono{font-family:'DejaVu Sans Mono',monospace}
`;

const doc = (w, h, body) => ({
  w, h,
  html: `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body><div class="grid"></div>${body}</body></html>`,
});

const foot = (n, t, extra = '') =>
  `<div class="foot"><img src="${WORD}" style="height:46px"><span class="m">${extra || (t ? `${n}/${t}` : 'teknika.co.cr')}</span></div>`;

// ---------- Plantillas 1080x1350 ----------
const S = {
  cover: ({ badge, title, sub, n, t, swipe = true }) => doc(1080, 1350, `
<div class="wrap">
  <div class="top"><span class="pill">${badge}</span><img src="${ICON}" style="width:72px"></div>
  <h1 style="margin-top:auto">${title}</h1>
  ${sub ? `<p class="m" style="font-size:38px;line-height:1.35;margin-top:36px;font-weight:500">${sub}</p>` : ''}
  ${swipe ? `<p class="c" style="font-size:30px;font-weight:700;margin-top:48px">Deslizá →</p>` : ''}
  <div style="height:72px"></div>
  ${foot(n, t)}
</div>`),

  list: ({ title, items, n, t, note }) => doc(1080, 1350, `
<div class="wrap">
  <div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding-bottom:40px">
  <h2>${title}</h2>
  <div style="margin-top:56px;display:flex;flex-direction:column;gap:24px">
    ${items.map(([a, b], i) => `<div class="card" style="padding:28px 34px;display:flex;gap:26px;align-items:flex-start">
      <span class="c" style="font-size:40px;font-weight:800;min-width:44px">${i + 1}</span>
      <div><div style="font-size:40px;font-weight:700;line-height:1.2">${a}</div>${b ? `<div class="m" style="font-size:30px;line-height:1.35;margin-top:8px">${b}</div>` : ''}</div></div>`).join('')}
  </div>
  ${note ? `<p class="m" style="font-size:32px;margin-top:40px;line-height:1.4">${note}</p>` : ''}
  </div>
  ${foot(n, t)}
</div>`),

  option: ({ badge, title, desc, price, meta, items, n, t }) => doc(1080, 1350, `
<div class="wrap">
  <div class="top"><span class="pill">${badge}</span></div>
  <h2 style="margin-top:56px;font-size:84px">${title}</h2>
  <p class="m" style="font-size:36px;line-height:1.35;margin-top:24px">${desc}</p>
  <ul style="list-style:none;margin-top:48px;display:flex;flex-direction:column;gap:22px">
    ${items.map((x) => `<li style="font-size:34px;display:flex;gap:18px"><span class="c" style="font-weight:800">✓</span><span>${x}</span></li>`).join('')}
  </ul>
  <div style="margin-top:auto;margin-bottom:56px">
    <div class="c" style="font-size:100px;font-weight:800;letter-spacing:-.02em;line-height:1">${price}</div>
    <div class="m" style="font-size:28px;margin-top:12px">${meta}</div>
  </div>
  ${foot(n, t)}
</div>`),

  prompt: ({ tag, title, prompt, tip, n, t }) => doc(1080, 1350, `
<div class="wrap">
  <div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding-bottom:40px">
  <span class="c" style="font-size:30px;font-weight:700;letter-spacing:.05em;text-transform:uppercase">${tag}</span>
  <h2 style="margin-top:20px">${title}</h2>
  <div class="card" style="margin-top:48px;padding:40px;background:rgba(18,44,52,.75)">
    <div class="c" style="font-size:24px;font-weight:700;letter-spacing:.06em;margin-bottom:18px">PROMPT</div>
    <div style="font-size:42px;line-height:1.45">${prompt}</div>
  </div>
  ${tip ? `<p class="m" style="font-size:32px;line-height:1.4;margin-top:40px">💡 ${tip}</p>` : ''}
  </div>
  ${foot(n, t)}
</div>`),

  cta: ({ title, sub, n, t }) => doc(1080, 1350, `
<div class="wrap" style="align-items:center;text-align:center;justify-content:center">
  <img src="${ICON}" style="width:120px;margin-top:auto">
  <h2 style="margin-top:56px;font-size:80px">${title}</h2>
  <p class="m" style="font-size:36px;line-height:1.4;margin-top:32px;max-width:820px">${sub}</p>
  <div style="margin-top:56px;background:#44CFCB;color:#122C34;border-radius:18px;padding:26px 52px;font-size:38px;font-weight:800">Agendá una llamada · link en bio</div>
  <p class="m" style="font-size:28px;margin-top:28px">o escribinos por WhatsApp: 7195-1856</p>
  <div style="margin-top:auto;width:100%">${foot(n, t)}</div>
</div>`),

  quote: ({ badge, title, sub }) => doc(1080, 1350, `
<div class="wrap">
  <div class="top"><span class="pill">${badge}</span><img src="${ICON}" style="width:72px"></div>
  <h1 style="margin-top:auto;font-size:104px">${title}</h1>
  <p class="m" style="font-size:38px;line-height:1.4;margin-top:40px">${sub}</p>
  <div style="height:96px"></div>
  ${foot(0, 0)}
</div>`),

  founder: () => doc(1080, 1350, `
<div class="wrap" style="align-items:center;text-align:center">
  <span class="pill">¿Quién te enseña?</span>
  <img src="${FOTO}" style="margin-top:64px;width:440px;height:440px;border-radius:50%;object-fit:cover;border:10px solid #44CFCB">
  <h2 style="margin-top:52px;font-size:76px">Patrick Castillo</h2>
  <p class="c" style="font-size:32px;font-weight:700;margin-top:14px">Fundador de Teknika CR · Ingeniero en Sistemas</p>
  <p class="m" style="font-size:34px;line-height:1.45;margin-top:36px;max-width:840px">Uso IA todos los días en mi trabajo. Ahora te enseño a usarla en el tuyo, con tus casos y sin jerga técnica.</p>
  <div style="margin-top:auto;width:100%">${foot(0, 0)}</div>
</div>`),
};

// ---------- Stories 1080x1920 (zona segura: 250px arriba y abajo) ----------
const ST = ({ badge, title, sub, box }) => doc(1080, 1920, `
<div style="position:absolute;inset:260px 90px 300px;display:flex;flex-direction:column;align-items:center;text-align:center">
  <img src="${WORD}" style="height:64px">
  <span class="pill" style="margin-top:auto">${badge}</span>
  <h1 style="margin-top:44px;font-size:100px">${title}</h1>
  ${sub ? `<p class="m" style="font-size:42px;line-height:1.4;margin-top:40px">${sub}</p>` : ''}
  <div style="margin-top:auto;background:#44CFCB;color:#122C34;border-radius:20px;padding:30px 56px;font-size:42px;font-weight:800">${box}</div>
</div>`);

// ---------- Campaña ----------
const set = {
  // P1 — Lanzamiento
  'p1-lanzamiento-1': S.cover({ badge: 'Nuevo', title: 'Clases y coaching de <span class="c">IA</span> en Costa Rica', sub: 'Aprendé a usar ChatGPT, Claude, Gemini y Copilot en tu trabajo real. Desde cero.', n: 1, t: 4 }),
  'p1-lanzamiento-2': S.list({ title: 'Qué vas a aprender', n: 2, t: 4, items: [
    ['Escribir mejor y más rápido', 'Correos, propuestas e informes'],
    ['Resumir y analizar', 'Documentos largos y hojas de cálculo'],
    ['Pedirle bien a la IA', 'Prompts y plantillas para tus tareas'],
    ['Elegir la herramienta', 'Según lo que ya usás'],
    ['Usarla con seguridad', 'Qué datos no compartir y cómo verificar'],
  ] }),
  'p1-lanzamiento-3': S.list({ title: 'Cómo funciona', n: 3, t: 4, items: [
    ['Agendás una llamada de 15 min', 'Nos contás a qué te dedicás y qué querés lograr'],
    ['Armamos tu plan', 'Con tus correos, documentos y clientes reales'],
    ['Practicás en vivo', 'Por videollamada, desde cualquier parte del país'],
  ], note: 'No necesitás saber de tecnología.' }),
  'p1-lanzamiento-4': S.cta({ title: 'Desde <span class="c">₡15,000</span>', sub: 'Sesión 1:1 ₡15,000 · Coaching de 6 sesiones ₡75,000. IVA incluido.', n: 4, t: 4 }),

  // P2 — ¿Cuál me conviene?
  'p2-cual-elegir-1': S.cover({ badge: 'Guía rápida', title: '¿Sesión, coaching o <span class="c">taller</span>?', sub: 'Cómo elegir la forma de aprender IA que te conviene.', n: 1, t: 4 }),
  'p2-cual-elegir-2': S.option({ badge: 'Para empezar', title: 'Sesión 1:1', desc: 'Para probar o resolver algo puntual.', items: ['1 hora virtual en vivo', 'Con tus propios casos', 'Grabación incluida'], price: '₡15,000', meta: 'IVA incluido', n: 2, t: 4 }),
  'p2-cual-elegir-3': S.option({ badge: 'Mejor valor', title: 'Coaching en IA', desc: 'Para que la IA quede integrada en tu día a día.', items: ['6 sesiones de 1 hora', 'Plan según tus metas', 'Soporte por chat entre sesiones'], price: '₡75,000', meta: 'IVA incluido · ahorrás ₡15,000', n: 3, t: 4 }),
  'p2-cual-elegir-4': S.option({ badge: 'Para equipos', title: 'Taller de IA', desc: 'Para que todo tu equipo use la IA bien y de forma segura.', items: ['3 horas, presencial o virtual', 'Hasta 15 personas', 'Casos de tu organización'], price: '₡150,000', meta: 'IVA incluido · Programa Completo 6 h: ₡300,000', n: 4, t: 4 }),

  // P3 — Mito
  'p3-mito': S.quote({ badge: 'Mito', title: 'Si sabés mandar un <span class="c">WhatsApp</span>, podés aprender IA.', sub: 'No hace falta saber de tecnología. Empezamos desde cero y con tu trabajo real.' }),

  // P4 — Equipos
  'p4-equipos-1': S.cover({ badge: 'Empresas', title: 'Tu equipo ya usa IA. <span class="c">¿La usa bien?</span>', sub: 'Talleres prácticos para PYMEs, colegios profesionales, cámaras y ONG.', n: 1, t: 3 }),
  'p4-equipos-2': S.list({ title: 'Qué incluye', n: 2, t: 3, items: [
    ['Diagnóstico previo', 'Conocemos sus procesos y herramientas'],
    ['Casos reales', 'Actas, informes, consultas y datos de la organización'],
    ['Uso responsable', 'Qué no compartir y cómo verificar'],
    ['Material y certificado', 'Guía de prompts para cada persona'],
  ] }),
  'p4-equipos-3': S.option({ badge: 'Precios', title: 'Taller de IA', desc: '3 horas, presencial en el GAM o virtual. Hasta 15 personas.', items: ['Programa Completo (6 h): ₡300,000', 'Incluye borrador de política de uso de IA', 'Persona adicional: ₡10,000'], price: '₡150,000', meta: 'IVA incluido', n: 3, t: 3 }),

  // P5 — Contadores
  'p5-contadores-1': S.cover({ badge: 'IA por profesión', title: 'IA para <span class="c">contadores</span>: 3 prompts listos', sub: 'Copialos, cambiá lo que está entre corchetes y probalos hoy.', n: 1, t: 5 }),
  'p5-contadores-2': S.prompt({ tag: 'Prompt 1', title: 'Explicarle algo a un cliente', n: 2, t: 5,
    prompt: 'Actuá como contador en Costa Rica. Explicale a un cliente sin formación contable qué significa <span class="c">[concepto]</span> y cómo le afecta. Usá un ejemplo simple y máximo 6 líneas.',
    tip: 'Revisá siempre la normativa vigente: la IA puede equivocarse.' }),
  'p5-contadores-3': S.prompt({ tag: 'Prompt 2', title: 'Ordenar gastos', n: 3, t: 5,
    prompt: 'Te paso los gastos del mes. Agrupalos por categoría, mostrame el total de cada una en una tabla y señalá cualquier monto que parezca fuera de lo normal.<br><span class="c">[pegá los datos]</span>',
    tip: 'Quitá nombres, cédulas y números de cuenta antes de pegar.' }),
  'p5-contadores-4': S.prompt({ tag: 'Prompt 3', title: 'Recordatorio de cobro', n: 4, t: 5,
    prompt: 'Redactá un correo amable pero firme para recordarle a un cliente que tiene una factura vencida hace <span class="c">[días]</span> días. Tratalo de usted, tono profesional y cerrá con las opciones de pago.' }),
  'p5-contadores-5': S.cta({ title: '¿Querés prompts para <span class="c">tu</span> trabajo?', sub: 'En el coaching armamos tus plantillas con tus casos reales.', n: 5, t: 5 }),

  // P6 — Datos que no se pegan
  'p6-datos-1': S.cover({ badge: 'Uso responsable', title: '5 datos que nunca le deberías pegar a la <span class="c">IA</span>', sub: 'Guardá este post y compartilo con tu equipo.', n: 1, t: 3 }),
  'p6-datos-2': S.list({ title: 'No los pegués', n: 2, t: 3, items: [
    ['Cédulas y datos personales', 'Tuyos o de tus clientes'],
    ['Contraseñas y códigos', 'Nunca, en ninguna herramienta'],
    ['Datos médicos', 'Diagnósticos, expedientes, recetas'],
    ['Datos financieros de clientes', 'Cuentas, tarjetas, saldos'],
    ['Documentos confidenciales', 'Contratos o estrategias sin autorización'],
  ] }),
  'p6-datos-3': S.cta({ title: 'Reglas claras para <span class="c">tu equipo</span>', sub: 'En el Programa Completo incluimos un borrador de política de uso de IA.', n: 3, t: 3 }),

  // P7 — Fundador
  'p7-fundador': S.founder(),

  // Para después (ideas en Buffer)
  'p8-borrador': S.quote({ badge: 'Regla de oro', title: 'La IA es tu borrador. <span class="c">Vos sos el editor.</span>', sub: 'Usala para avanzar más rápido, pero revisá siempre datos, nombres y cifras.' }),
  'p9-abogados-1': S.cover({ badge: 'IA por profesión', title: 'IA para <span class="c">abogados</span>: 3 prompts listos', sub: 'Para ahorrar tiempo sin dejar de revisar.', n: 1, t: 5 }),
  'p9-abogados-2': S.prompt({ tag: 'Prompt 1', title: 'Resumir un contrato', n: 2, t: 5,
    prompt: 'Resumí este contrato en una tabla: partes, obligaciones de cada una, plazos, penalidades y causas de terminación. Señalá las cláusulas ambiguas.<br><span class="c">[pegá el texto]</span>',
    tip: 'Usá una cuenta autorizada por tu despacho y quitá datos sensibles.' }),
  'p9-abogados-3': S.prompt({ tag: 'Prompt 2', title: 'Borrador de carta', n: 3, t: 5,
    prompt: 'Redactá un borrador de carta formal para <span class="c">[propósito]</span>, dirigida a <span class="c">[destinatario]</span>. Tono respetuoso y claro, máximo una página.' }),
  'p9-abogados-4': S.prompt({ tag: 'Prompt 3', title: 'Preparar una negociación', n: 4, t: 5,
    prompt: 'Actuá como la contraparte en esta negociación. ¿Qué objeciones plantearías a esta propuesta y cómo las justificarías?<br><span class="c">[describí la propuesta]</span>',
    tip: 'La IA no reemplaza el criterio ni la revisión legal.' }),
  'p9-abogados-5': S.cta({ title: '¿Querés esto para <span class="c">tu despacho</span>?', sub: 'Talleres para equipos legales, con sus propios casos.', n: 5, t: 5 }),
  'p10-sustos-1': S.cover({ badge: 'Edición Halloween 🎃', title: 'Los 5 <span class="c">sustos</span> más comunes al empezar con IA', sub: 'Y cómo evitarlos.', n: 1, t: 3 }),
  'p10-sustos-2': S.list({ title: 'Susto → solución', n: 2, t: 3, items: [
    ['"Me inventó un dato"', 'Pedile la fuente y verificala'],
    ['"Pegué algo confidencial"', 'Anonimizá antes de pegar'],
    ['"Me respondió algo genérico"', 'Dale rol, contexto y formato'],
    ['"Suena a robot"', 'Pasale un ejemplo de cómo escribís'],
    ['"No sé cuál usar"', 'Empezá con la que ya tenés'],
  ] }),
  'p10-sustos-3': S.cta({ title: 'Sin sustos: <span class="c">aprendé con guía</span>', sub: 'Sesión 1:1 desde ₡15,000, IVA incluido.', n: 3, t: 3 }),

  // Stories
  's1-nuevo': ST({ badge: 'Nuevo', title: 'Clases y coaching de <span class="c">IA</span>', sub: 'Aprendé a usarla en tu trabajo, desde cero.<br>Sesiones desde ₡15,000.', box: 'Link en bio 👆' }),
  's2-tip': ST({ badge: 'Tip de IA', title: 'Pedile que te haga <span class="c">preguntas</span> primero', sub: 'Agregá al final de tu prompt:<br>"Antes de responder, haceme las preguntas que necesités."', box: 'Probalo hoy' }),
  's3-pregunta': ST({ badge: 'Contanos', title: '¿Qué tarea te gustaría <span class="c">delegarle</span> a la IA?', sub: 'Respondé por mensaje directo.<br>Las respuestas se vuelven próximos tips.', box: 'Escribinos 💬' }),
  's4-agenda': ST({ badge: '15 minutos', title: '¿No sabés por dónde <span class="c">empezar</span>?', sub: 'Agendá una llamada de diagnóstico y te decimos qué opción te conviene.', box: 'Link en bio 👆' }),
};

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const only = process.argv[2];
for (const [name, { w, h, html }] of Object.entries(set)) {
  if (only && !name.startsWith(only)) continue;
  const p = await browser.newPage({ viewport: { width: w, height: h } });
  await p.setContent(html, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: OUT + name + '.jpg', type: 'jpeg', quality: 90 });
  await p.close();
}
await browser.close();
console.log('listo:', OUT);
