/**
 * PRECIOS DE DESARROLLO WEB — FUENTE ÚNICA
 * Usados en /desarrollo-web, /servicios, /ofertas y /llms.txt.
 */
import { colones } from './precios-ia';

export type PaqueteWeb = {
  id: string;
  badge: string;
  nombre: string;
  precio: number;
  entrega: string;
  incluye: string[];
  destacado?: boolean;
};

export const paquetesWeb: PaqueteWeb[] = [
  {
    id: 'presencia',
    badge: 'Esencial',
    nombre: 'Presencia Digital',
    precio: 120000,
    entrega: '1 semana',
    incluye: [
      '1 página profesional (landing page)',
      'Formulario de contacto y botón de WhatsApp',
      'Dominio .com (1 año) y email profesional',
      'Hosting gratuito en Cloudflare',
      'SEO básico y optimizado para IA',
      'Responsive (celular y computadora)',
    ],
  },
  {
    id: 'profesional',
    badge: 'Recomendado',
    nombre: 'Sitio Profesional',
    precio: 250000,
    entrega: '2 semanas',
    incluye: [
      '3-5 páginas (Inicio, Servicios, Nosotros, Contacto, Blog)',
      'Todo lo de Presencia Digital, más:',
      'Blog integrado',
      'Google Business Profile configurado',
      'SEO + Schema.org + sitemap',
      'Optimización para IA (llms.txt)',
      'Capacitación para actualizar contenido',
    ],
    destacado: true,
  },
  {
    id: 'seo-ia',
    badge: 'Premium',
    nombre: 'Web + SEO para IA',
    precio: 350000,
    entrega: '2-3 semanas',
    incluye: [
      'Todo lo del Sitio Profesional, más:',
      'Optimización avanzada para buscadores de IA',
      'FAQ con Schema estructurado',
      '3 artículos de blog optimizados',
      'Páginas individuales por servicio',
      'Dominio .co.cr (1 año)',
      'Mantenimiento mensual (3 meses incluidos)',
    ],
  },
  {
    id: 'tienda',
    badge: 'E-commerce',
    nombre: 'Tienda Básica',
    precio: 400000,
    entrega: '3-4 semanas',
    incluye: [
      'Todo lo del Sitio Profesional, más:',
      'Catálogo de productos',
      'Carrito de compras',
      'Pagos por SINPE o transferencia',
    ],
  },
];

export const MANTENIMIENTO_WEB_DESDE = 20000;
export const DOMINIO_DESDE = 20000;

export const etiquetaWeb = (p: PaqueteWeb) => `${p.nombre} - Desde ${colones(p.precio)}`;
