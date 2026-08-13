import { useEffect, useState } from 'react';
import { Loader2, CalendarClock } from 'lucide-react';
import { WHATSAPP_URL, AGENDA_WIDGET_SCRIPT_URL, AGENDA_PROFESSIONAL_ID } from '../../constants';

const PLACEHOLDER_MARKER = 'SUBSTITUIR_PELO_UUID_REAL_DO_PROFISSIONAL';

let scriptPromise: Promise<void> | null = null;

// Injeta o <script src="widget.js"> uma única vez, mesmo que AgendaWidget monte/desmonte várias
// vezes (StrictMode, navegação) — sem isto o script (e o customElements.define que ele faz)
// rodaria de novo a cada montagem.
function loadWidgetScript(): Promise<void> {
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-api111-widget]');
    if (existing) {
      if (customElements.get('api111-agenda')) resolve();
      else existing.addEventListener('load', () => resolve(), { once: true });
      return;
    }
    const script = document.createElement('script');
    script.src = AGENDA_WIDGET_SCRIPT_URL;
    script.async = true;
    script.dataset.api111Widget = 'true';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Falha ao carregar o widget de agendamento.'));
    document.body.appendChild(script);
  });
  return scriptPromise;
}

// Card com a agenda nativa do CRM (Web Component, Shadow DOM — sem iframe). Mantém altura mínima
// reservada enquanto carrega pra não pular o layout da seção ao redor. size="split" (calendário e
// horários lado a lado) foi o preset escolhido pra caber na coluna estreita ao lado de
// "Informações de Contato" — ver docs/AGENDA-WIDGET.md.
export function AgendaWidget() {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    if (AGENDA_PROFESSIONAL_ID === PLACEHOLDER_MARKER) return; // nem tenta — ver aviso abaixo
    let cancelled = false;
    loadWidgetScript()
      .then(() => { if (!cancelled) setStatus('ready'); })
      .catch(() => { if (!cancelled) setStatus('error'); });
    return () => { cancelled = true; };
  }, []);

  return (
    <div
      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
      style={{ minHeight: 420 }}
    >
      {AGENDA_PROFESSIONAL_ID === PLACEHOLDER_MARKER ? (
        <ConfigPendingNotice />
      ) : status === 'loading' ? (
        <div className="flex flex-col items-center justify-center gap-3 py-24 text-gray-400">
          <Loader2 className="w-6 h-6 animate-spin" />
          <p className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Carregando agenda…</p>
        </div>
      ) : status === 'error' ? (
        <FallbackNotice message="Não foi possível carregar a agenda online agora." />
      ) : (
        <api111-agenda professional={AGENDA_PROFESSIONAL_ID} theme="light" size="split" />
      )}
    </div>
  );
}

function ConfigPendingNotice() {
  return (
    <FallbackNotice
      message="Agenda online em configuração."
      dev="AGENDA_PROFESSIONAL_ID ainda é um placeholder em constants.ts — substitua pelo UUID real do profissional no CRM antes de publicar."
    />
  );
}

function FallbackNotice({ message, dev }: { message: string; dev?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20 text-center px-6">
      <CalendarClock className="w-8 h-8 text-gray-300" />
      <p className="text-sm text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
        {message} Agende pelo WhatsApp ao lado.
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-[#1558a3] hover:underline"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Agendar pelo WhatsApp →
      </a>
      {dev && import.meta.env.DEV && (
        <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mt-2">
          {dev}
        </p>
      )}
    </div>
  );
}
