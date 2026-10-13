/**
 * Worker de Cloudflare para teknika.co.cr
 * - /api/lead → registra el lead en HubSpot (src/lib/hubspot-lead.ts)
 * - todo lo demás → archivos estáticos generados por Astro en ./dist
 */
import { procesarLead, metodoNoPermitido, type Env as LeadEnv } from '../src/lib/hubspot-lead';

interface Env extends LeadEnv {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/lead' || url.pathname === '/api/lead/') {
      return request.method === 'POST' ? procesarLead(request, env) : metodoNoPermitido();
    }
    return env.ASSETS.fetch(request);
  },
};
