import { motion } from 'motion/react';
import { Award, Users, Building2, Globe } from 'lucide-react';
import type { ReactNode } from 'react';

// ══════════════════════════════
// DADOS
// ══════════════════════════════

interface StatItem {
  icon: ReactNode;
  value: string;
  label: string;
  description: string;
}

const STATS: StatItem[] = [
  {
    icon: <Award className="w-7 h-7" />,
    value: '+7',
    label: 'Anos de Experiência',
    description: 'Atendendo pacientes com dedicação e excelência',
  },
  {
    icon: <Users className="w-7 h-7" />,
    value: '+1.000',
    label: 'Pacientes Atendidos',
    description: 'Vidas transformadas através do cuidado médico',
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    value: '3',
    label: 'Hospitais de Referência',
    description: 'São Camilo, 9 de Julho e Hospital Tatuapé',
  },
  {
    icon: <Globe className="w-7 h-7" />,
    value: '2',
    label: 'Estados',
    description: 'São Paulo e Rondônia',
  },
];

// ══════════════════════════════
// COMPONENTE
// ══════════════════════════════

export function Stats() {
  return (
    <section
      aria-label="Estatísticas do consultório"
      style={{ background: 'linear-gradient(135deg, #1558a3 0%, #1e2966 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Ícone */}
              <div className="w-14 h-14 rounded-2xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center text-[#60a5fa] mx-auto mb-4 transition-colors duration-300">
                {stat.icon}
              </div>

              {/* Valor */}
              <p
                className="font-bold text-white mb-1 text-[48px]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </p>

              {/* Label */}
              <p
                className="text-sm font-semibold text-blue-100 mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </p>

              {/* Descrição */}
              <p
                className="text-xs text-blue-300 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}