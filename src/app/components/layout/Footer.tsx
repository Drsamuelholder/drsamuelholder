import { Stethoscope, Phone, Mail, Instagram, Linkedin, MapPin, ExternalLink } from 'lucide-react';
import {
  WHATSAPP_URL,
  WHATSAPP_PHONE_DISPLAY,
  DOCTORALIA_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  EMAIL,
} from '../../constants';

// ══════════════════════════════
// DADOS
// ══════════════════════════════

interface FooterLink {
  label: string;
  href: string;
}

const QUICK_LINKS: FooterLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre o Dr. Samuel', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Perguntas Frequentes', href: '#faq' },
  { label: 'Agendar Consulta', href: '#contato' },
];

const SPECIALTIES: FooterLink[] = [
  { label: 'Diabetes Mellitus', href: '#especialidades' },
  { label: 'Emagrecimento Médico', href: '#especialidades' },
  { label: 'Tireoide', href: '#especialidades' },
  { label: 'Distúrbios Hormonais', href: '#especialidades' },
  { label: 'Osteoporose', href: '#especialidades' },
  { label: 'Síndrome Metabólica', href: '#especialidades' },
];

// ══════════════════════════════
// COMPONENTE
// ══════════════════════════════

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="text-white"
      style={{ background: 'linear-gradient(180deg, #1e2966 0%, #0f1845 100%)' }}
    >
      {/* ── FAIXA CTA SUPERIOR ── */}
      <div className="border-b border-white/10" style={{ background: 'rgba(21,88,163,0.4)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Pronto para cuidar da sua saúde?
              </p>
              <p className="text-blue-200 text-sm mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                Agende sua consulta agora mesmo — resposta em minutos.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95 whitespace-nowrap shadow-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Phone className="w-4 h-4" />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── CORPO DO FOOTER ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Coluna 1: Logo + descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#1558a3] flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block text-sm font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Dr. Samuel Holder
                </span>
                <span className="block text-xs text-blue-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Endocrinologista
                </span>
              </div>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
              Especialista em endocrinologia e metabolismo. Cuidado médico humanizado
              para diabetes, emagrecimento e equilíbrio hormonal.
            </p>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1558a3] flex items-center justify-center transition-colors"
                aria-label="Instagram do Dr. Samuel Holder"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1558a3] flex items-center justify-center transition-colors"
                aria-label="LinkedIn do Dr. Samuel Holder"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={DOCTORALIA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1558a3] flex items-center justify-center transition-colors"
                aria-label="Doctoralia do Dr. Samuel Holder"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links rápidos */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Navegação Rápida
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Especialidades */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Especialidades
            </h3>
            <ul className="space-y-2">
              {SPECIALTIES.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-blue-300 mt-0.5 shrink-0" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {WHATSAPP_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-300 mt-0.5 shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm text-blue-200 hover:text-white transition-colors break-all"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-300 mt-0.5 shrink-0" />
                <span className="text-sm text-blue-200" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Avenida Paulista, 2064, 21° andar<br />
                  Bela Vista — São Paulo, SP
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-300 mt-0.5 shrink-0" />
                <span className="text-sm text-blue-200" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Porto Velho — RO
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── RODAPÉ INFERIOR ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-300">
            <p style={{ fontFamily: "'Inter', sans-serif" }}>
              © {new Date().getFullYear()} Dr. Samuel Holder – Endocrinologista. Todos os direitos reservados.
            </p>
            {/* Crédito API111 */}
            <a
              href="https://www.api111.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group px-3 py-1.5 rounded-full border border-white/10 hover:border-[#1558a3] hover:bg-white/5 transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="text-blue-400 group-hover:text-white transition-colors text-xs">
                Desenvolvido por
              </span>
              {/* Logo API111 */}
              <span className="flex items-center gap-1.5">
                <svg width="18" height="18" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70 group-hover:opacity-100 transition-opacity">
                  <circle cx="18" cy="5" r="4" fill="currentColor" className="text-white"/>
                  <rect x="10" y="14" width="7" height="17" rx="2" fill="currentColor" className="text-white"/>
                  <rect x="20" y="10" width="7" height="21" rx="2" fill="currentColor" className="text-white"/>
                  <rect x="30" y="16" width="6" height="15" rx="2" fill="currentColor" className="text-white"/>
                </svg>
                <span className="font-bold text-white tracking-wide text-xs group-hover:text-[#60a5fa] transition-colors">
                  API111
                </span>
              </span>
            </a>
          </div>
          <p className="mt-3 text-xs text-blue-400/60 text-center max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            As informações deste site têm caráter informativo e não substituem a consulta médica.
            Sempre consulte um profissional de saúde habilitado para diagnóstico e tratamento.
          </p>
        </div>
      </div>
    </footer>
  );
}
