/**
 * POST /api/lead — crea o actualiza un contacto en HubSpot (Cloudflare Pages Function).
 *
 * Variable de entorno requerida en Cloudflare Pages (Settings → Environment variables):
 *   HUBSPOT_TOKEN = token de una "app privada" de HubSpot con permisos
 *                   crm.objects.contacts.read y crm.objects.contacts.write
 *
 * Si el token no está configurado, responde 202 y el sitio sigue funcionando normal
 * (el visitante igual llega a WhatsApp o al formulario).
 */

interface Env {
  HUBSPOT_TOKEN?: string;
}

type Lead = {
  nombre?: string;
  telefono?: string;
  email?: string;
  servicio?: string;
  mensaje?: string;
  origen?: string;
  pagina?: string;
  website?: string; // honeypot: los humanos lo dejan vacío
};

const HS = 'https://api.hubapi.com';
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

const limpiar = (v: unknown, max = 500) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

const normalizarTelefono = (t: string) => {
  const digitos = t.replace(/[^\d+]/g, '');
  if (!digitos) return '';
  if (digitos.startsWith('+')) return digitos;
  if (digitos.length === 8) return '+506' + digitos; // número tico sin código de país
  if (digitos.startsWith('506') && digitos.length === 11) return '+' + digitos;
  return digitos;
};

async function hs(env: Env, path: string, method: string, body?: unknown) {
  const res = await fetch(HS + path, {
    method,
    headers: { Authorization: `Bearer ${env.HUBSPOT_TOKEN}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data: data as any };
}

async function buscarContacto(env: Env, email: string, telefono: string) {
  const filtros = [];
  if (email) filtros.push({ filters: [{ propertyName: 'email', operator: 'EQ', value: email }] });
  if (telefono) {
    filtros.push({ filters: [{ propertyName: 'phone', operator: 'EQ', value: telefono }] });
    filtros.push({ filters: [{ propertyName: 'mobilephone', operator: 'EQ', value: telefono }] });
  }
  if (!filtros.length) return null;
  const r = await hs(env, '/crm/v3/objects/contacts/search', 'POST', {
    filterGroups: filtros,
    properties: ['email', 'phone', 'firstname'],
    limit: 1,
  });
  return r.ok && r.data.results?.length ? (r.data.results[0].id as string) : null;
}

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  let lead: Lead;
  try {
    const tipo = request.headers.get('content-type') || '';
    lead = tipo.includes('application/json')
      ? await request.json()
      : (Object.fromEntries((await request.formData()).entries()) as Lead);
  } catch {
    return json({ ok: false, error: 'formato' }, 400);
  }

  if (limpiar(lead.website)) return json({ ok: true }); // bot: se ignora en silencio

  const nombre = limpiar(lead.nombre, 120);
  const email = limpiar(lead.email, 200).toLowerCase();
  const telefono = normalizarTelefono(limpiar(lead.telefono, 40));
  const servicio = limpiar(lead.servicio, 200);
  const mensaje = limpiar(lead.mensaje, 2000);
  const origen = limpiar(lead.origen, 60) || 'Sitio web';
  const pagina = limpiar(lead.pagina, 300);

  if (!nombre || (!email && !telefono)) return json({ ok: false, error: 'faltan_datos' }, 422);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ ok: false, error: 'email' }, 422);

  if (!env.HUBSPOT_TOKEN) return json({ ok: true, crm: 'sin_configurar' }, 202);

  const [firstname, ...resto] = nombre.split(/\s+/);
  const props: Record<string, string> = {
    firstname,
    lifecyclestage: 'lead',
    hs_lead_status: 'NEW',
  };
  if (resto.length) props.lastname = resto.join(' ');
  if (email) props.email = email;
  if (telefono) props.phone = telefono;

  let id = await buscarContacto(env, email, telefono);
  if (id) {
    // No se baja la etapa de un contacto que ya avanzó: solo se actualizan datos de contacto
    const { lifecyclestage, hs_lead_status, ...datos } = props;
    await hs(env, `/crm/v3/objects/contacts/${id}`, 'PATCH', { properties: datos });
  } else {
    const r = await hs(env, '/crm/v3/objects/contacts', 'POST', { properties: props });
    if (!r.ok) return json({ ok: false, error: 'crm', status: r.status }, 502);
    id = r.data.id;
  }

  const nota = [
    `<strong>Nuevo lead desde ${origen}</strong>`,
    servicio && `Servicio de interés: ${servicio}`,
    mensaje && `Mensaje: ${mensaje}`,
    pagina && `Página: ${pagina}`,
  ]
    .filter(Boolean)
    .map((l) => `<p>${String(l).replace(/</g, '&lt;').replace(/&lt;(\/?strong)>/g, '<$1>')}</p>`)
    .join('');

  await hs(env, '/crm/v3/objects/notes', 'POST', {
    properties: { hs_timestamp: new Date().toISOString(), hs_note_body: nota },
    associations: [
      { to: { id }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }] },
    ],
  });

  return json({ ok: true });
};

export const onRequest = () => json({ ok: false, error: 'metodo' }, 405);
