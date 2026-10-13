/**
 * PRECIOS DE IA — FUENTE ÚNICA
 * ------------------------------------------------------------
 * Todos los precios de asesoría, coaching y capacitación en IA
 * salen de este archivo: las tarjetas del sitio, la portada,
 * el schema.org de Base.astro y /llms.txt.
 * Para cambiar un precio, cambialo SOLO aquí.
 *
 * POLÍTICA (desde 13-oct-2026): TODOS los precios incluyen IVA (13%).
 * Aplica al sitio, propuestas, cotizaciones y mensajes. No usar "+ IVA".
 */

export type PlanIA = {
  id: string;
  audiencia: 'personas' | 'organizaciones';
  badge: string;
  nombre: string;
  /** Duración y modalidad, en una línea */
  formato: string;
  precio: number;
  incluye: string[];
  nota?: string;
  destacado?: boolean;
  cta: string;
  /** Descripción corta para schema.org y llms.txt */
  resumen: string;
};

export const IVA_INCLUIDO = true;
export const IVA_TASA = 0.13;
export const IVA_NOTA = 'Todos los precios están en colones e incluyen IVA (13%).';

/** Desglose para facturas y propuestas: base e IVA a partir del precio con IVA incluido */
export const desgloseIVA = (precioConIVA: number) => {
  const base = Math.round(precioConIVA / (1 + IVA_TASA));
  return { base, iva: precioConIVA - base, total: precioConIVA };
};

export const PARTICIPANTES_INCLUIDOS = 15;
export const PRECIO_PERSONA_ADICIONAL = 10000;

export const planesIA: PlanIA[] = [
  {
    id: 'sesion-1-1',
    audiencia: 'personas',
    badge: 'Individual',
    nombre: 'Sesión 1:1',
    formato: 'Virtual · 1 hora',
    precio: 15000,
    incluye: [
      '1 hora de asesoría virtual en vivo',
      'Personalizada a tu trabajo o negocio',
      'Practicás con tus propios casos',
      'Grabación de la sesión incluida',
    ],
    nota: 'Ideal para empezar o resolver algo puntual',
    cta: 'Agendar sesión',
    resumen: 'Asesoría virtual de 1 hora, personalizada a tu trabajo, para aprender a usar Claude, ChatGPT, Gemini y otras herramientas de IA.',
  },
  {
    id: 'coaching-6',
    audiencia: 'personas',
    badge: 'Mejor valor',
    nombre: 'Coaching en IA',
    formato: 'Virtual · 6 sesiones de 1 hora',
    precio: 75000,
    incluye: [
      '6 sesiones de coaching virtual',
      'Plan de aprendizaje según tus metas',
      'Soporte por chat entre sesiones',
      'Guías y plantillas de prompts',
      'Válido por 6 meses desde la primera sesión',
    ],
    nota: 'Ahorrás ₡15,000 frente a 6 sesiones sueltas',
    destacado: true,
    cta: 'Empezar coaching',
    resumen: 'Programa de coaching de 6 sesiones virtuales con plan personalizado y soporte por chat entre sesiones.',
  },
  {
    id: 'taller-3h',
    audiencia: 'organizaciones',
    badge: 'Equipos',
    nombre: 'Taller de IA',
    formato: 'Presencial o virtual · 3 horas',
    precio: 150000,
    incluye: [
      `Hasta ${PARTICIPANTES_INCLUIDOS} participantes`,
      'Contenido y ejercicios con casos de tu organización',
      'Guía de prompts y material digital',
      'Certificado de participación',
    ],
    cta: 'Solicitar cotización',
    resumen: `Taller práctico de 3 horas para equipos de hasta ${PARTICIPANTES_INCLUIDOS} personas, personalizado a la organización, con material y certificado.`,
  },
  {
    id: 'programa-6h',
    audiencia: 'organizaciones',
    badge: 'Recomendado',
    nombre: 'Programa Completo',
    formato: 'Presencial o virtual · 6 horas (2 sesiones)',
    precio: 300000,
    incluye: [
      `Hasta ${PARTICIPANTES_INCLUIDOS} participantes`,
      'Todo lo del Taller, más:',
      'Prompts y plantillas para sus procesos',
      'Borrador de política de uso de IA',
      '1 semana de soporte después del programa',
    ],
    destacado: true,
    cta: 'Solicitar cotización',
    resumen: `Programa de 6 horas en 2 sesiones para equipos de hasta ${PARTICIPANTES_INCLUIDOS} personas: incluye plantillas para sus procesos, borrador de política de uso de IA y 1 semana de soporte.`,
  },
];

export const colones = (n: number) => '₡' + n.toLocaleString('en-US');

export const precioDesde = (audiencia: PlanIA['audiencia']) =>
  Math.min(...planesIA.filter((p) => p.audiencia === audiencia).map((p) => p.precio));

/** Texto que se manda a WhatsApp al tocar una tarjeta */
export const etiquetaServicio = (p: PlanIA) =>
  `${p.nombre} (${p.formato}) - ${colones(p.precio)} IVA incluido`;
