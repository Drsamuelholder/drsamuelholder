/**
 * Componente de cabeçalho fixo (sticky) do site
 *
 * Responsável pela navegação principal do site.
 * - Muda o fundo ao rolar (glassmorphism → sólido)
 * - Menu hambúrguer funcional para mobile
 * - Link direto para WhatsApp como CTA principal
 * - Smooth scroll para as seções da página
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Stethoscope } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../ui/utils';

// ══════════════════════════════
// DADOS DE NAVEGAÇÃO
// ══════════════════════════════

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

// Número de WhatsApp para o CTA
const WHATSAPP_NUMBER = '5511947191129';
const WHATSAPP_MSG = encodeURIComponent(
  'Olá, Dr. Samuel! Gostaria de agendar uma consulta.'
);

// ══════════════════════════════
// COMPONENTE
// ══════════════════════════════

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Detecta o scroll para alterar o estilo do header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu mobile ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fecha o menu mobile e navega suavemente para a seção
  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── LOGOTIPO ── */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
            className="flex items-center gap-2 group"
            aria-label="Dr. Samuel Holder - Início"
          >
            <div className="w-9 h-9 rounded-xl bg-[#1558a3] flex items-center justify-center shadow-md group-hover:bg-[#1e3a8a] transition-colors">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span
                className={cn("block font-bold tracking-wide transition-colors text-[15px] text-[16px] text-[20px] text-[24px]", isScrolled ? 'text-[#1e2966]' : 'text-white')}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Dr. Samuel Holder
              </span>
              <span
                className={cn(
                  'block text-xs transition-colors',
                  isScrolled ? 'text-[#1558a3]' : 'text-blue-200'
                )}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Endocrinologia e Metabologia• CRM SP 178335
              </span>
            </div>
          </a>

          {/* ── NAVEGAÇÃO DESKTOP ── */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  isScrolled
                    ? 'text-gray-700 hover:text-[#1558a3] hover:bg-blue-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── CTA WHATSAPP + HAMBURGER ── */}
          <div className="flex items-center gap-3">
            {/* Botão WhatsApp - visível a partir de tablet */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex"
            >
              <Button
                className="bg-[#059669] hover:bg-[#047857] text-white shadow-md gap-2 transition-all duration-200 active:scale-95"
                size="sm"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden md:inline">Agendar Consulta</span>
                <span className="md:hidden">WhatsApp</span>
              </Button>
            </a>

            {/* Botão hambúrguer - apenas mobile */}
            <button
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors',
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              )}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── MENU MOBILE ── */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 bg-white/98 backdrop-blur-md border-t border-gray-100',
          isMobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
        aria-hidden={!isMobileOpen}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Menu mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="px-4 py-3 rounded-xl text-gray-700 font-medium hover:text-[#1558a3] hover:bg-blue-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          {/* CTA WhatsApp no menu mobile */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2"
          >
            <Button className="w-full bg-[#059669] hover:bg-[#047857] text-white gap-2">
              <Phone className="w-4 h-4" />
              Agendar pelo WhatsApp
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}
