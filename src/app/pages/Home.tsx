/**
 * Página Home – Página principal do site do Dr. Samuel Holder
 *
 * Monta todas as seções da landing page em ordem:
 * Header → Hero → Stats → About → Services → Testimonials → FAQ → Contact → Footer
 *
 * Inclui botão flutuante de WhatsApp e botão de voltar ao topo.
 */

import { useState, useEffect } from 'react';
import { Phone, ChevronUp } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Stats } from '../components/sections/Stats';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { Contact } from '../components/sections/Contact';

// Número para o botão flutuante de WhatsApp
const WHATSAPP_NUMBER = '5511947191129';
const WHATSAPP_MSG = encodeURIComponent(
  'Olá, Dr. Samuel! Gostaria de agendar uma consulta.'
);

// ══════════════════════════════
// COMPONENTE
// ══════════════════════════════

export function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Exibe o botão "Voltar ao topo" após rolar 400px
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ── CABEÇALHO FIXO ── */}
      <Header />

      {/* ── CONTEÚDO PRINCIPAL ── */}
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* ── RODAPÉ ── */}
      <Footer />

      {/* ── BOTÃO FLUTUANTE: WhatsApp ── */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[#059669]/30 hover:shadow-2xl active:scale-95 group"
        aria-label="Agendar consulta pelo WhatsApp"
      >
        {/* Tooltip: aparece ao hover no desktop */}
        <span
          className="hidden sm:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out text-sm font-medium whitespace-nowrap pl-0 group-hover:pl-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Agendar Consulta
        </span>
        <div className="w-14 h-14 flex items-center justify-center">
          <Phone className="w-6 h-6" />
        </div>
        {/* Pulso animado */}
        <span className="absolute inset-0 rounded-full bg-[#059669] animate-ping opacity-20" />
      </a>

      {/* ── BOTÃO: Voltar ao topo ── */}
      <button
        onClick={scrollToTop}
        aria-label="Voltar ao topo da página"
        className={`fixed bottom-24 right-6 z-50 w-10 h-10 rounded-full bg-[#1558a3] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#1e3a8a] hover:-translate-y-0.5 active:scale-95 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </>
  );
}
