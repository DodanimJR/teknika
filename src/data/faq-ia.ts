/**
 * Preguntas frecuentes de IA. Se muestran en la página y se publican como
 * schema.org FAQPage con el componente <Faq /> (el texto visible y el del
 * schema siempre coinciden).
 */
import { planesIA, colones, PARTICIPANTES_INCLUIDOS, PRECIO_PERSONA_ADICIONAL } from './precios-ia';

export type FaqItem = { q: string; a: string };

const plan = (id: string) => planesIA.find((p) => p.id === id)!;
const s1 = plan('sesion-1-1');
const c6 = plan('coaching-6');
const t3 = plan('taller-3h');
const p6 = plan('programa-6h');

export const faqGeneral: FaqItem[] = [
  {
    q: '¿Cuánto cuesta una asesoría de inteligencia artificial en Costa Rica?',
    a: `En Teknika CR, una ${s1.nombre} virtual de 1 hora cuesta ${colones(s1.precio)} y el ${c6.nombre} de 6 sesiones cuesta ${colones(c6.precio)}. Para equipos, el ${t3.nombre} de 3 horas cuesta ${colones(t3.precio)}. Todos los precios incluyen IVA.`,
  },
  {
    q: '¿Necesito saber de tecnología para aprender a usar IA?',
    a: 'No. Empezamos desde cero, sin jerga técnica, y practicamos con tus propios documentos, correos y procesos.',
  },
  {
    q: '¿Qué herramientas de IA enseñan?',
    a: 'Claude, ChatGPT, Gemini y Copilot. Te ayudamos a elegir según lo que ya usás: Google Workspace, Microsoft 365 o ninguno.',
  },
  {
    q: '¿Las sesiones son presenciales o virtuales?',
    a: 'La sesión 1:1 y el coaching son virtuales para todo Costa Rica. Los talleres para organizaciones pueden ser presenciales en el Gran Área Metropolitana (San José, Heredia, Alajuela y Cartago) o virtuales.',
  },
  {
    q: '¿La IA me va a quitar el trabajo?',
    a: 'La IA reemplaza tareas, no personas. Quien sabe usarla trabaja más rápido y mejor; por eso conviene aprender ahora.',
  },
];

export const faqPersonas: FaqItem[] = [
  {
    q: '¿Dónde puedo aprender a usar inteligencia artificial en Costa Rica?',
    a: `En Teknika CR damos clases y coaching de IA personalizados, virtuales para todo el país. Podés empezar con una ${s1.nombre} de ${colones(s1.precio)} o tomar el ${c6.nombre} de 6 sesiones por ${colones(c6.precio)}, IVA incluido.`,
  },
  {
    q: '¿Qué diferencia hay entre un curso de IA y el coaching?',
    a: 'Un curso enseña lo mismo a todos. En el coaching cada sesión se arma con tu trabajo real: tus correos, documentos, clientes o materias. Aprendés más rápido porque practicás con lo que ya hacés.',
  },
  {
    q: '¿Cuánto tiempo toma aprender a usar ChatGPT o Claude en el trabajo?',
    a: 'Desde la primera sesión ya podés aplicar lo básico. El coaching de 6 sesiones tiene como meta que la IA quede integrada en tus tareas diarias: redactar, resumir, analizar y organizar.',
  },
  {
    q: '¿Cuánto dura el coaching de 6 sesiones?',
    a: 'Las sesiones son de 1 hora y las tomás a tu ritmo, por ejemplo una por semana. Tenés 6 meses desde la primera sesión para completarlas, con soporte por chat entre sesiones.',
  },
  {
    q: '¿Sirve para estudiantes, docentes o profesionales independientes?',
    a: 'Sí. Lo adaptamos a abogados, contadores, docentes, diseñadores, consultores, estudiantes universitarios y dueños de negocio.',
  },
];

export const faqEmpresas: FaqItem[] = [
  {
    q: '¿Cuánto cuesta una capacitación de IA para empresas en Costa Rica?',
    a: `El ${t3.nombre} de 3 horas cuesta ${colones(t3.precio)} y el ${p6.nombre} de 6 horas cuesta ${colones(p6.precio)}, para grupos de hasta ${PARTICIPANTES_INCLUIDOS} personas. Cada persona adicional cuesta ${colones(PRECIO_PERSONA_ADICIONAL)}. Todos los precios incluyen IVA.`,
  },
  {
    q: '¿La capacitación se adapta a mi organización?',
    a: 'Sí. Antes del taller hacemos una llamada para conocer sus procesos, documentos y herramientas, y armamos los ejercicios con casos reales de la organización.',
  },
  {
    q: '¿Incluye una política de uso de IA?',
    a: 'El Programa Completo incluye un borrador de política de uso de IA: qué herramientas usar, qué datos no compartir y cómo revisar los resultados.',
  },
  {
    q: '¿Dan capacitaciones presenciales?',
    a: 'Sí, en el Gran Área Metropolitana (San José, Heredia, Alajuela y Cartago). Fuera del GAM o para equipos distribuidos, la capacitación es virtual.',
  },
  {
    q: '¿Para qué tipo de organizaciones es?',
    a: 'PYMEs, colegios profesionales, cámaras, asociaciones, ONG e instituciones que quieren que su personal use IA de forma práctica y segura.',
  },
];
