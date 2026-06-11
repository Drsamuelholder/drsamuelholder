import { motion } from 'motion/react';
import { ArrowDown, Award, Calendar, MapPin, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import type { ReactNode } from 'react';
import drSamuelhome from '@/imports/Perfilhome.PNG';
import { WHATSAPP_URL } from '../../constants';

// ══════════════════════════════
// DADOS
// ══════════════════════════════

interface Stat {
  icon: ReactNode;
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { icon: <Award className="w-5 h-5" />, value: '+10 anos', label: 'de experiência' },
  { icon: <Calendar className="w-5 h-5" />, value: '+1.000', label: 'pacientes atendidos' },
  { icon: <MapPin className="w-5 h-5" />, value: '3', label: 'locais de atendimento' },
  { icon: <Star className="w-5 h-5" />, value: '5.0★', label: 'no Doctoralia' },
];

// ══════════════════════════════
// COMPONENTE
// ══════════════════════════════

export function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Fundo gradiente */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #1e2966 0%, #1558a3 50%, #1d4ed8 100%)' }}
      />

      {/* Padrão de pontos decorativo */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Formas decorativas */}
      <div className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full bg-blue-400/10 z-0" />
      <div className="absolute -left-24 -bottom-24 w-[400px] h-[400px] rounded-full bg-blue-800/30 z-0" />

      {/* ── CONTEÚDO PRINCIPAL ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── LADO ESQUERDO: TEXTO ── */}
          <div className="text-white">
            {/* Badge de especialidade */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
              <span className="text-sm font-medium text-blue-100" style={{ fontFamily: "'Inter', sans-serif" }}>
                Endocrinologista · Especialista em Emagrecimento & Diabetes
              </span>
            </motion.div>

            {/* Título */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Saúde Hormonal
              <br />
              <span className="text-[#60a5fa]">que Transforma</span>
              <br />
              Vidas
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Acompanhamento médico personalizado e sustentável para emagrecimento,
              controle do diabetes e equilíbrio hormonal.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#059669] hover:bg-[#047857] text-white text-base px-8 py-4 h-auto rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 active:scale-95 min-h-[52px]">
                  📱 Agendar Consulta pelo WhatsApp
                </Button>
              </a>
              <button
                onClick={scrollToAbout}
                className="flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-xl font-medium text-base hover:bg-white/10 transition-all duration-300 min-h-[52px]"
              >
                Conhecer o Dr. Samuel
                <ArrowDown className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Locais de atendimento */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {['São Paulo', 'Porto Velho', 'TeleMedicina'].map((local) => (
                <span
                  key={local}
                  className="text-xs text-blue-200 bg-white/10 px-3 py-1 rounded-full border border-white/10"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  📍 {local}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── LADO DIREITO: FOTO ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex justify-center items-end relative"
          >
            {/* Cartão flutuante: avaliação */}
            <div className="absolute top-8 -left-4 bg-white rounded-2xl shadow-2xl p-4 z-20">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs font-semibold text-gray-800" style={{ fontFamily: "'Inter', sans-serif" }}>
                5.0 no Doctoralia
              </p>
              <p className="text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                +32 avaliações
              </p>
            </div>

            {/* Cartão flutuante: pacientes */}
            <div className="absolute bottom-12 -right-4 bg-white rounded-2xl shadow-2xl p-4 z-20">
              <p className="text-2xl font-bold text-[#1558a3]" style={{ fontFamily: "'Playfair Display', serif" }}>
                +1.000
              </p>
              <p className="text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                pacientes atendidos
              </p>
            </div>

            {/* Foto do médico */}
            <div className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <ImageWithFallback
                src={drSamuelhome}
                alt="Dr. Samuel Holder - Endocrinologista"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1558a3]/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
