// Dados de contato centralizados — alterar aqui reflete em todo o site

export const WHATSAPP_NUMBER = '5511947191129';
export const WHATSAPP_PHONE_DISPLAY = '(11) 94719-1129';
export const WHATSAPP_MSG = encodeURIComponent(
  'Olá, Dr. Samuel! Gostaria de agendar uma consulta.'
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export const DOCTORALIA_URL =
  'https://www.doctoralia.com.br/samuel-ramos-holder/endocrinologista/sao-paulo';

export const INSTAGRAM_URL = 'https://instagram.com/drsamuelholder';
export const LINKEDIN_URL = 'https://linkedin.com/in/drsamuelholder';
export const EMAIL = 'contato@drsamuelholder.com.br';

// ── Widget de agendamento nativo (CRM API111) ──────────────────────────────
// Domínio do CRM (sem "www.") — confirmado em apps/crm-samuel-holder/.env.local
// (NEXT_PUBLIC_SITE_URL=https://app.drsamuelholder.com.br), 2026-08-13.
// VITE_AGENDA_WIDGET_SCRIPT_URL (num .env.local próprio, nunca commitado) permite apontar pro
// CRM rodando localmente ao testar — sem isso o valor de produção abaixo é sempre usado.
export const AGENDA_WIDGET_SCRIPT_URL =
  import.meta.env.VITE_AGENDA_WIDGET_SCRIPT_URL || 'https://app.drsamuelholder.com.br/widget.js';

// UUID de "Dr Samuel Ramos Holder" na tabela `professionals` do CRM (Supabase do próprio
// crm-samuel-holder — projeto isolado, não é o do api111). Confirmado por consulta direta
// (select id, name from professionals) em 2026-08-13.
export const AGENDA_PROFESSIONAL_ID = '46d89d7e-1626-4b32-9197-372f5283364f';
