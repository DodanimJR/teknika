"""Plan de la campaña "Cursos de IA" (octubre 2026): textos por red y calendario.
Genera campana-2026-10.json (para Buffer) y campana-2026-10.md (para el doc de copies)."""
import json
from pathlib import Path

BASE = "https://teknika.co.cr/social/2026-10/"
WEB = "https://teknika.co.cr/aprender-ia/"
WEB_EMP = "https://teknika.co.cr/capacitacion-ia-empresas/"
AGENDA = "https://calendly.com/dodanimjunior24/llamada-de-diagnostico-de-ia-15-min"
HT = "#TeknikaCR #InteligenciaArtificial #CursoDeIA #CostaRica"

def post(pid, fecha, titulo, imgs, alt, cuerpo, cierre_ig, cierre_fb, tiktok, tags, link=WEB, agendar=True):
    """cuerpo: texto común. cierre_ig: llamado para IG (link en bio). cierre_fb: llamado con enlace."""
    return {
        "id": pid, "fecha": fecha, "titulo": titulo, "tipo": "post", "agendar": agendar,
        "imagenes": [BASE + i + ".jpg" for i in imgs], "alt": alt,
        "instagram": f"{cuerpo}\n\n{cierre_ig}\n\n{HT} {tags}".strip(),
        "facebook": f"{cuerpo}\n\n{cierre_fb.format(link=link)}",
        "tiktok": f"{tiktok} {HT} {tags}".strip(),
    }

def story(sid, fecha, titulo, img, alt, agendar=True):
    return {"id": sid, "fecha": fecha, "titulo": titulo, "tipo": "story", "agendar": agendar,
            "imagenes": [BASE + img + ".jpg"], "alt": alt}

IG_CTA = "Agendá una llamada de 15 minutos y te decimos por dónde empezar. Link en bio 👆"
FB_CTA = "Agendá una llamada de 15 minutos y te decimos por dónde empezar 👉 {link}"

plan = [
    post("p1", "2026-10-15", "Lanzamiento: clases y coaching de IA",
         ["p1-lanzamiento-1", "p1-lanzamiento-2", "p1-lanzamiento-3", "p1-lanzamiento-4"],
         "Clases y coaching de IA en Costa Rica, desde ₡15,000",
         "Ya podés aprender a usar inteligencia artificial con Teknika CR 🇨🇷\n\n"
         "Clases y coaching de IA personalizados a tu trabajo:\n"
         "→ Escribir correos, propuestas e informes más rápido\n"
         "→ Resumir documentos largos y analizar datos\n"
         "→ Pedirle bien a ChatGPT, Claude, Gemini o Copilot\n"
         "→ Usarla con seguridad\n\n"
         "Es virtual, desde cualquier parte del país, y no necesitás saber de tecnología.\n\n"
         "Sesión 1:1: ₡15,000 · Coaching de 6 sesiones: ₡75,000. IVA incluido.",
         IG_CTA, FB_CTA,
         "Clases y coaching de IA en Costa Rica 🇨🇷 Aprendé a usar ChatGPT, Claude y Gemini en tu trabajo, desde cero. Desde ₡15,000. Link en el perfil.",
         "#ChatGPT"),
    post("p2", "2026-10-16", "¿Sesión, coaching o taller?",
         ["p2-cual-elegir-1", "p2-cual-elegir-2", "p2-cual-elegir-3", "p2-cual-elegir-4"],
         "Comparación entre sesión 1:1, coaching y taller de IA",
         "¿Cuál es la mejor forma de aprender IA? Depende de lo que buscás:\n\n"
         "🔹 Sesión 1:1 (₡15,000): para probar o resolver algo puntual en 1 hora.\n"
         "🔹 Coaching en IA (₡75,000): 6 sesiones para que la IA quede integrada en tu día a día.\n"
         "🔹 Taller de IA (₡150,000): 3 horas para equipos de hasta 15 personas.\n\n"
         "Todos los precios incluyen IVA. ¿No sabés cuál te conviene? Te ayudamos a elegir.",
         "Agendá una llamada de 15 minutos. Link en bio 👆", "Agendá una llamada de 15 minutos 👉 {link}",
         "¿Sesión, coaching o taller de IA? Así elegís el que te conviene 👆",
         "#AprenderIA"),
    post("p3", "2026-10-19", "Mito: hay que saber de tecnología",
         ["p3-mito"], "Si sabés mandar un WhatsApp, podés aprender IA",
         "\"Yo no sé nada de tecnología, eso de la IA no es para mí.\"\n\n"
         "Lo escuchamos seguido, y no es cierto. Si sabés escribir un mensaje de WhatsApp, "
         "ya tenés lo necesario para usar la IA: se le habla en español, como a una persona.\n\n"
         "En nuestras clases empezamos desde cero y practicamos con tu trabajo real: tus correos, "
         "tus documentos, tus clientes.",
         IG_CTA, FB_CTA,
         "Si sabés mandar un WhatsApp, podés aprender IA. Empezamos desde cero 🙌",
         "#AprenderIA"),
    post("p4", "2026-10-20", "Talleres de IA para equipos",
         ["p4-equipos-1", "p4-equipos-2", "p4-equipos-3"],
         "Talleres de IA para empresas y organizaciones en Costa Rica",
         "Tu equipo ya usa IA. La pregunta es si la usa bien.\n\n"
         "En la mayoría de organizaciones cada persona prueba ChatGPT por su cuenta, sin una guía común "
         "y sin reglas sobre qué información compartir.\n\n"
         "Nuestros talleres ordenan eso:\n"
         "✓ Diagnóstico previo de sus procesos y herramientas\n"
         "✓ Ejercicios con casos reales de la organización\n"
         "✓ Uso responsable: qué no compartir y cómo verificar\n"
         "✓ Material y certificado para cada persona\n\n"
         "Taller de 3 h: ₡150,000 · Programa Completo de 6 h: ₡300,000. Hasta 15 personas, IVA incluido. "
         "Presencial en el GAM o virtual.",
         "Agendá una llamada y te enviamos una propuesta en 24 horas. Link en bio 👆",
         "Agendá una llamada y te enviamos una propuesta en 24 horas 👉 {link}",
         "Talleres de IA para equipos en Costa Rica: casos reales, uso responsable y certificado.",
         "#CapacitaciónIA #PYMEsCR", link=WEB_EMP),
    post("p5", "2026-10-21", "IA para contadores: 3 prompts",
         ["p5-contadores-1", "p5-contadores-2", "p5-contadores-3", "p5-contadores-4", "p5-contadores-5"],
         "Tres prompts de IA para contadores",
         "3 prompts de IA para contadores, listos para copiar 📊\n\n"
         "1️⃣ Explicarle un concepto a un cliente en lenguaje simple\n"
         "2️⃣ Ordenar los gastos del mes por categoría\n"
         "3️⃣ Redactar un recordatorio de cobro amable pero firme\n\n"
         "Guardá este post para usarlo mañana. Y antes de pegar datos, quitá nombres, cédulas y números de cuenta.\n\n"
         "¿Querés plantillas hechas para tu trabajo? En el coaching las armamos con tus casos reales.",
         "Link en bio 👆", "Más información 👉 {link}",
         "3 prompts de IA para contadores. Guardalo 📌",
         "#Contadores #Prompts"),
    post("p6", "2026-10-22", "5 datos que no se le pegan a la IA",
         ["p6-datos-1", "p6-datos-2", "p6-datos-3"],
         "Cinco tipos de datos que no se deben compartir con la IA",
         "5 datos que nunca deberías pegarle a la IA 🔒\n\n"
         "1. Cédulas y datos personales\n"
         "2. Contraseñas y códigos\n"
         "3. Datos médicos\n"
         "4. Datos financieros de clientes\n"
         "5. Documentos confidenciales sin autorización\n\n"
         "Compartilo con tu equipo. Y si querés reglas claras para toda la organización, "
         "en el Programa Completo incluimos un borrador de política de uso de IA.",
         "Link en bio 👆", "Más información 👉 {link}",
         "5 datos que nunca deberías pegarle a la IA 🔒 Compartilo con tu equipo.",
         "#UsoResponsable", link=WEB_EMP),
    post("p7", "2026-10-23", "¿Quién te enseña?",
         ["p7-fundador"], "Patrick Castillo, fundador de Teknika CR",
         "¡Hola! Soy Patrick Castillo, ingeniero en sistemas y fundador de Teknika CR 👋\n\n"
         "Teknika empezó dando soporte técnico, y ahí aprendí algo: la mayoría de la gente no necesita "
         "más tecnología, necesita entender la que ya tiene. Hoy esa tecnología es la inteligencia artificial.\n\n"
         "Uso IA todos los días en mi trabajo, y ahora te enseño a usarla en el tuyo: con tus casos y sin jerga técnica.",
         "Si querés empezar, agendá una llamada de 15 minutos. Link en bio 👆",
         "Si querés empezar, agendá una llamada de 15 minutos 👉 {link}",
         "Soy Patrick, fundador de Teknika CR, y te enseño a usar IA en tu trabajo 👋",
         ""),
    # Quedan como ideas en Buffer (se agendan cuando se liberen espacios)
    post("p8", "2026-10-26", "La IA es tu borrador",
         ["p8-borrador"], "La IA es tu borrador, vos sos el editor",
         "La regla de oro para usar IA en el trabajo: la IA es tu borrador. Vos sos el editor. ✍️\n\n"
         "Usala para avanzar más rápido, pero revisá siempre datos, nombres y cifras antes de enviar.",
         IG_CTA, FB_CTA, "La IA es tu borrador. Vos sos el editor ✍️", "", agendar=False),
    post("p9", "2026-10-28", "IA para abogados: 3 prompts",
         ["p9-abogados-1", "p9-abogados-2", "p9-abogados-3", "p9-abogados-4", "p9-abogados-5"],
         "Tres prompts de IA para abogados",
         "3 prompts de IA para abogados ⚖️\n\n"
         "1️⃣ Resumir un contrato en una tabla\n"
         "2️⃣ Redactar el borrador de una carta formal\n"
         "3️⃣ Preparar una negociación pensando como la contraparte\n\n"
         "La IA no reemplaza el criterio ni la revisión legal: te ahorra el primer borrador.",
         "¿Querés esto para tu despacho? Link en bio 👆", "¿Querés esto para tu despacho? 👉 {link}",
         "3 prompts de IA para abogados ⚖️ Guardalo.", "#Abogados #Prompts", link=WEB_EMP, agendar=False),
    post("p10", "2026-10-30", "Halloween: 5 sustos con la IA",
         ["p10-sustos-1", "p10-sustos-2", "p10-sustos-3"],
         "Los 5 sustos más comunes al empezar con IA",
         "Los 5 sustos más comunes al empezar con IA 🎃 (y cómo evitarlos)\n\n"
         "👻 \"Me inventó un dato\" → pedile la fuente y verificala\n"
         "👻 \"Pegué algo confidencial\" → anonimizá antes de pegar\n"
         "👻 \"Me respondió algo genérico\" → dale rol, contexto y formato\n"
         "👻 \"Suena a robot\" → pasale un ejemplo de cómo escribís\n"
         "👻 \"No sé cuál usar\" → empezá con la que ya tenés\n\n"
         "Sesión 1:1 desde ₡15,000, IVA incluido.",
         IG_CTA, FB_CTA, "Los 5 sustos más comunes al empezar con IA 🎃", "#Halloween", agendar=False),
    story("s1", "2026-10-15", "Story: nuevo", "s1-nuevo", "Nuevo: clases y coaching de IA"),
    story("s2", "2026-10-19", "Story: tip de preguntas", "s2-tip", "Tip: pedile a la IA que te haga preguntas primero"),
    story("s3", "2026-10-21", "Story: ¿qué delegarías?", "s3-pregunta", "¿Qué tarea te gustaría delegarle a la IA?"),
    story("s4", "2026-10-27", "Story: agendá", "s4-agenda", "¿No sabés por dónde empezar? Agendá una llamada", agendar=False),
]

HORAS = {"instagram": "12:00", "facebook": "11:00", "tiktok": "19:00", "story": "18:00"}

here = Path(__file__).parent
(here / "campana-2026-10.json").write_text(json.dumps({"horas": HORAS, "plan": plan}, ensure_ascii=False, indent=2))

md = ["## 12. CAMPAÑA DE FOTOS: CURSOS DE IA (15–30 OCT 2026)\n",
      "Solo imágenes (carruseles y stories). Las imágenes están en `teknika-cr/public/social/2026-10/` "
      "y publicadas en `https://teknika.co.cr/social/2026-10/`. Se regeneran con `scripts/social/render-campana.mjs`.\n",
      f"**Horarios:** Facebook {HORAS['facebook']} · Instagram {HORAS['instagram']} · TikTok {HORAS['tiktok']} · Stories {HORAS['story']} (hora de Costa Rica).\n",
      "**Estado en Buffer:** las marcadas \"Agendado\" están programadas; las marcadas \"Idea\" quedaron como ideas en Buffer "
      "porque el plan gratuito permite 10 publicaciones programadas por canal. Se agendan cuando se publiquen las primeras.\n"]
for p in plan:
    estado = "Agendado" if p["agendar"] else "Idea"
    md.append(f"### {p['fecha']} · {p['titulo']} ({'Story IG/FB' if p['tipo']=='story' else 'Post IG/FB/TikTok'}) · {estado}\n")
    md.append("Imágenes: " + ", ".join(u.rsplit('/', 1)[1] for u in p["imagenes"]) + "\n")
    if p["tipo"] == "post":
        md.append("**Instagram:**\n```\n" + p["instagram"] + "\n```\n")
        md.append("**Facebook:** igual que Instagram, pero cierra con el enlace directo.\n")
        md.append("**TikTok:**\n```\n" + p["tiktok"] + "\n```\n")
(here / "campana-2026-10.md").write_text("\n".join(md))
print(len(plan), "piezas")
