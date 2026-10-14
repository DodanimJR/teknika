/** Helpers de schema.org para páginas de servicio */
import { planesIA, type PlanIA } from './precios-ia';

const SITE = 'https://teknika.co.cr';

export const servicioIA = (opts: {
  nombre: string;
  descripcion: string;
  path: string;
  tipo: string;
  audiencia?: PlanIA['audiencia'];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: opts.nombre,
  serviceType: opts.tipo,
  description: opts.descripcion,
  url: SITE + opts.path,
  inLanguage: 'es-CR',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Teknika CR',
    url: SITE,
    telephone: '+506-7195-1856',
    address: { '@type': 'PostalAddress', addressLocality: 'Alajuela', addressCountry: 'CR' },
  },
  areaServed: { '@type': 'Country', name: 'Costa Rica' },
  availableChannel: { '@type': 'ServiceChannel', serviceUrl: SITE + opts.path },
  offers: planesIA
    .filter((p) => !opts.audiencia || p.audiencia === opts.audiencia)
    .map((p) => ({
      '@type': 'Offer',
      name: p.nombre,
      description: p.resumen,
      price: String(p.precio),
      priceCurrency: 'CRC',
      valueAddedTaxIncluded: true,
      availability: 'https://schema.org/InStock',
    })),
});
