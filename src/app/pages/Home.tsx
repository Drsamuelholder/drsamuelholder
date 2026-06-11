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
import { WHATSAPP_URL } from '../constants';

// ══════════════════════════════
// COMPONENTE
// ══════════════════════════════

export function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <Header />

      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* ── BOTÃO FLUTUANTE: WhatsApp ── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[#059669]/30 hover:shadow-2xl active:scale-95 group"
        aria-label="Agendar consulta pelo WhatsApp"
      >
        <span
          className="hidden sm:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out text-sm font-medium whitespace-nowrap pl-0 group-hover:pl-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Agendar Consulta
        </span>
        <div className="w-14 h-14 flex items-center justify-center">
          <Phone className="w-6 h-6" />
        </div>
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
