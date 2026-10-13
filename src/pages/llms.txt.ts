/**
 * /llms.txt — contexto para modelos de IA.
 * Se genera al compilar; los precios de IA salen de src/data/precios-ia.ts.
 */
import type { APIRoute } from 'astro';
import { planesIA, colones, PARTICIPANTES_INCLUIDOS, PRECIO_PERSONA_ADICIONAL } from '../data/precios-ia';

const linea = (p: (typeof planesIA)[number]) =>
  `- ${p.nombre} — ${p.formato}: ${colones(p.precio)} CRC${p.sufijo ? ' ' + p.sufijo : ''}. ${p.resumen}`;

export const GET: APIRoute = () => {
  const personas = planesIA.filter((p) => p.audiencia === 'personas').map(linea).join('\n');
  const orgs = planesIA.filter((p) => p.audiencia === 'organizaciones').map(linea).join('\n');
  const [s1] = planesIA;
  const taller = planesIA.find((p) => p.id === 'taller-3h')!;

  const body = `# Teknika CR

> Teknika CR es una empresa costarricense de asesoría, coaching y capacitación en
> inteligencia artificial. Ayuda a profesionales, PYMEs y organizaciones a usar
> herramientas como Claude, ChatGPT, Gemini y Copilot en su trabajo diario, con
> casos reales y sin jerga técnica. También ofrece desarrollo web para PYMEs y
> soporte técnico informático.

## Información general

- Nombre: Teknika CR
- Ubicación: Alajuela, Costa Rica. Servicio virtual en todo el país; presencial en el Gran Área Metropolitana
- WhatsApp: +506 7195-1856
- Email: info@teknika.co.cr
- Sitio web: https://teknika.co.cr
- Horario: lunes a viernes, 9:00 a 17:00 (UTC-6)
- Idiomas: español e inglés
- Fundador: Patrick Dodanim Castillo Flores, Ingeniero en Sistemas

## Asesoría y coaching en IA (para personas)

${personas}

## Capacitación en IA (para organizaciones)

${orgs}
- Grupos de más de ${PARTICIPANTES_INCLUIDOS} personas: ${colones(PRECIO_PERSONA_ADICIONAL)} + IVA por participante adicional.
- Herramientas: Claude, ChatGPT, Gemini, Copilot, generación de imágenes y automatización básica.
- Más información: https://teknika.co.cr/capacitacion-ia

## Desarrollo web para PYMEs

- Presencia Digital (landing page): desde ₡120,000 CRC
- Sitio Profesional (3-5 páginas + blog): desde ₡250,000 CRC
- Web + SEO para IA: desde ₡350,000 CRC
- Tienda Básica (catálogo + pagos SINPE/transferencia): desde ₡400,000 CRC
- Mantenimiento web: desde ₡20,000 CRC/mes
- Incluye hosting gratuito en Cloudflare Pages, SEO básico y optimización para buscadores de IA
- Más información: https://teknika.co.cr/desarrollo-web

## Soporte técnico

- Diagnóstico básico (software): ₡8,000 CRC; avanzado (hardware): ₡15,000 CRC
- Formateo + Windows: ₡15,000 CRC; paquete completo (formateo, backup, Office, antivirus, limpieza): ₡30,000 CRC
- Limpieza interna + pasta térmica: ₡12,000 CRC
- Cambio de HDD a SSD: ₡10,000 CRC + SSD
- Asesoría de compra por WhatsApp: gratis
- Soporte para PYMEs: Plan Básico desde ₡20,000/mes (hasta 3 equipos), Plan Profesional desde ₡45,000/mes (hasta 10 equipos)
- Más información: https://teknika.co.cr/servicios

## Preguntas frecuentes

### ¿Cuánto cuesta aprender a usar inteligencia artificial en Costa Rica?
En Teknika CR, una ${s1.nombre} virtual de 1 hora cuesta ${colones(s1.precio)} CRC.

### ¿Cuánto cuesta capacitar a un equipo en IA?
El ${taller.nombre} de 3 horas cuesta ${colones(taller.precio)} + IVA para hasta ${PARTICIPANTES_INCLUIDOS} personas, presencial o virtual, personalizado a la organización.

### ¿Necesito saber de tecnología?
No. Las sesiones empiezan desde cero y usan los documentos y procesos reales del cliente.

## Redes sociales

- Instagram: https://www.instagram.com/teknikacr/
- Facebook: https://www.facebook.com/profile.php?id=61591716943373
- TikTok: https://www.tiktok.com/@teknikacr
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
