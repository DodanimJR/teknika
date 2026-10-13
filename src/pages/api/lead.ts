/**
 * POST /api/lead — se ejecuta en el Worker de Cloudflare (no se prerenderiza).
 * Cloudflare agrega el adaptador @astrojs/cloudflare al desplegar.
 */
import type { APIRoute } from 'astro';
import { procesarLead, metodoNoPermitido } from '../../lib/hubspot-lead';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const env = ((locals as any)?.runtime?.env ?? {}) as { HUBSPOT_TOKEN?: string };
  return procesarLead(request, env);
};

export const ALL: APIRoute = () => metodoNoPermitido();
