/**
 * Seção Especialidades – Serviços oferecidos pelo Dr. Samuel Holder
 *
 * Grid de cards com as principais especialidades tratadas.
 * Cada card possui ícone, título, descrição e hover animado.
 */

import { motion } from 'motion/react';
import { Activity, Droplets, Flame, Dna, Bone, BarChart3 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import type { ReactNode } from 'react';

// ══════════════════════════════
// TIPOS E DADOS
// ══════════════════════════════

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
  color: string;
  borderColor: string;
  iconBg: string;
  iconColor: string;
}

const SERVICES: Service[] = [
  {
    icon: <Droplets className="w-6 h-6" />,
    title: 'Diabetes Mellitus',
    description:
      'Diagnóstico, acompanhamento e tratamento do diabetes tipo 1, tipo 2 e gestacional. Controle glicêmico personalizado para uma vida mais saudável.',
    tags: ['Tipo 1', 'Tipo 2', 'Gestacional', 'Pré-diabetes'],
    color: '#eff6ff',
    borderColor: '#bfdbfe',
    iconBg: '#dbeafe',
    iconColor: '#1558a3',
  },
  {
    icon: <Flame className="w-6 h-6" />,
    title: 'Emagrecimento Médico',
    description:
      'Programa de emagrecimento sustentável com acompanhamento médico completo, exames laboratoriais e abordagem multidisciplinar.',
    tags: ['Obesidade', 'Sobrepeso', 'Medicamentos', 'Acompanhamento'],
    color: '#fff7ed',
    borderColor: '#fed7aa',
    iconBg: '#ffedd5',
    iconColor: '#ea580c',
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Tireoide',
    description:
      'Avaliação completa da glândula tireoide. Tratamento de hipotireoidismo, hipertireoidismo e nódulos tireoidianos.',
    tags: ['Hipotireoidismo', 'Hipertireoidismo', 'Nódulos',],
    color: '#f0fdf4',
    borderColor: '#bbf7d0',
    iconBg: '#dcfce7',
    iconColor: '#059669',
  },
  {
    icon: <Dna className="w-6 h-6" />,
    title: 'Distúrbios Hormonais',
    description:
      'Reequilíbrio hormonal para homens e mulheres. Tratamento de deficiências hormonais, menopausa, andropausa e SOP.',
    tags: ['Menopausa', 'SOP', 'Andropausa', 'Cortisol'],
    color: '#fdf4ff',
    borderColor: '#e9d5ff',
    iconBg: '#f3e8ff',
    iconColor: '#9333ea',
  },
  {
    icon: <Bone className="w-6 h-6" />,
    title: 'Osteoporose',
    description:
      'Avaliação da densidade óssea e tratamento preventivo e terapêutico da osteoporose e osteopenia com as mais modernas técnicas.',
    tags: ['Densitometria', 'Prevenção', 'Tratamento', 'Vitamina D'],
    color: '#fefce8',
    borderColor: '#fde68a',
    iconBg: '#fef9c3',
    iconColor: '#ca8a04',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Síndrome Metabólica',
    description:
      'Controle integrado de obesidade, hipertensão, dislipidemia e resistência insulínica para reduzir riscos cardiovasculares.',
    tags: ['Colesterol', 'Triglicerídeos', 'Resistência Insulínica'],
    color: '#fff1f2',
    borderColor: '#fecdd3',
    iconBg: '#ffe4e6',
    iconColor: '#e11d48',
  },
];

// Animação do container (efeito cascata nos filhos)
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ══════════════════════════════
// COMPONENTE
// ══════════════════════════════

export function Services() {
  return (
    <section id="especialidades" className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── CABEÇALHO DA SEÇÃO ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#1558a3]" />
            <span
              className="text-sm font-semibold text-[#1558a3] uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Especialidades
            </span>
            <div className="h-px w-12 bg-[#1558a3]" />
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#1e2966] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Áreas de Atuação
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Tratamentos baseados em evidências científicas para condições endócrinas
            e metabólicas, com abordagem personalizada para cada paciente.
          </p>
        </motion.div>

        {/* ── IMAGEM DESTAQUE + GRID CARDS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Imagem de destaque */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 rounded-3xl overflow-hidden shadow-xl relative min-h-[280px]"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1648775507324-b48dd3791fa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGNsaW5pYyUyMGludGVyaW9yJTIwY2xlYW4lMjB3aGl0ZXxlbnwxfHx8fDE3Nzg1NDQzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Consultório do Dr. Samuel Holder"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(21,88,163,0.85) 0%, rgba(21,88,163,0.2) 60%, transparent 100%)' }}
            />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p
                className="text-xl font-bold mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Atendimento Completo
              </p>
              <p
                className="text-sm text-blue-200"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Diagnóstico, tratamento e acompanhamento contínuo para a sua saúde.
              </p>
            </div>
          </motion.div>

          {/* Grid de cards (2 colunas no lado direito no desktop) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {SERVICES.slice(0, 4).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </motion.div>
        </div>

        {/* ── LINHA INFERIOR: CARDS RESTANTES ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2"
        >
          {SERVICES.slice(4).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

// ── Sub-componente: Card de Especialidade ──

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group rounded-2xl p-6 border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default"
      style={{ backgroundColor: service.color, borderColor: service.borderColor }}
    >
      {/* Ícone */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: service.iconBg, color: service.iconColor }}
      >
        {service.icon}
      </div>

      {/* Título */}
      <h3
        className="text-base font-semibold text-gray-900 mb-2"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {service.title}
      </h3>

      {/* Descrição */}
      <p
        className="text-sm text-gray-600 leading-relaxed mb-4"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {service.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-white/60 text-gray-600 border border-gray-200/60"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}