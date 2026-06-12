import { motion } from 'motion/react';
import { GraduationCap, Microscope, Users, Video } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import drSamuelSobre from '@/imports/Perfilsobre.PNG';

// ══════════════════════════════
// DADOS
// ══════════════════════════════

const CREDENTIALS = [
  { icon: <GraduationCap className="w-4 h-4" />, text: 'Médico formado pela UNIR – Porto Velho/RO' },
  { icon: <Microscope className="w-4 h-4" />, text: 'Médico especialista em Clínica Médica - Hospital Tatuapé' },
  { icon: <Microscope className="w-4 h-4" />, text: 'Especialização em Endocrinologia e Metabologia - Hospital Ipiranga' },
  { icon: <Users className="w-4 h-4" />, text: 'Atendimento em São Paulo, Porto Velho e OnLine' },
  
];

interface Value {
  title: string;
  description: string;
  color: string;
}

const VALUES: Value[] = [
  {
    title: 'Medicina Personalizada',
    description: 'Criamos planos de tratamento individualizados, baseados no seu histórico de saúde, exames e estilo de vida.',
    color: '#dbeafe',
  },
  {
    title: 'Abordagem Humanizada',
    description: 'Escutamos, explicamos e acompanhamos cada etapa do tratamento com empatia e respeito à sua individualidade.',
    color: '#dcfce7',
  },
  {
    title: 'Ciência e Evidências',
    description: 'Utilizamos protocolos baseados nas mais recentes diretrizes científicas, tanto nacionais quanto internacionais.',
    color: '#fef3c7',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ══════════════════════════════
// COMPONENTE
// ══════════════════════════════

export function About() {
  return (
    <section id="sobre" className="py-10 md:py-14 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── LABEL DE SEÇÃO ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="h-px w-12 bg-[#1558a3]" />
          <span
            className="text-sm font-semibold text-[#1558a3] uppercase tracking-widest"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Quem sou eu
          </span>
          <div className="h-px w-12 bg-[#1558a3]" />
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl text-center text-[#1e2966] mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Sobre o Dr. Samuel Holder
        </motion.h2>

        {/* items-stretch: a coluna da foto acompanha a altura da coluna de texto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* ── COLUNA ESQUERDA: FOTO ── */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative min-h-[400px] lg:min-h-0"
          >
            {/* absolute inset-0 faz a foto preencher exatamente a célula do grid */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={drSamuelSobre}
                alt="Dr. Samuel Holder em seu consultório"
                className="w-full h-full object-cover object-[center_15%]"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(21,88,163,0.5) 0%, transparent 60%)' }}
              />
              {/* Badge CRM */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <p className="text-lg font-bold text-[#1e2966]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Dr. Samuel Holder
                </p>
                <p className="text-sm text-[#1558a3] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Endocrinologista e Metabologista
                </p>
                <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  CRM-RO / CRM-SP
                </p>
              </div>
            </div>

            {/* Decorativos */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl -z-10" style={{ background: '#dbeafe' }} />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl -z-10" style={{ background: '#dcfce7' }} />
          </motion.div>

          {/* ── COLUNA DIREITA: BIO + CREDENCIAIS + VALORES ── */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Bio */}
            <p
              className="text-base text-gray-600 leading-relaxed mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Sou médico, natural de Rondônia e especialista em Endocrinologia e Metabolismo pelo Hospital Ipiranga, com residência em Clínica Médica pelo Hospital Municipal do Tatuapé. Minha base profissional começou na UFMS, onde cursei Farmácia e Bioquímica, e consolidou-se na FIMCA, onde me formei em Medicina.<br /> 

              Atualmente, atuo em São Paulo com atendimento particular e planos de acompanhamento focado em obesidade e emagrecimento, transformando a qualidade de vida dos meus pacientes. Também trato diabetes, distúrbios da tireoide, osteoporose e menopausa. Amo minha profissão e prezo por um atendimento humanizado, integral e focado no indivíduo.
            </p>

            {/* Credenciais */}
            <div className="space-y-2 mb-5">
              {CREDENTIALS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#eff6ff] flex items-center justify-center text-[#1558a3] shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <p className="text-sm text-gray-700 pt-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Valores */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {VALUES.map((val) => (
                <div
                  key={val.title}
                  className="rounded-2xl p-4 border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  style={{ backgroundColor: val.color }}
                >
                  <h4 className="text-sm font-semibold text-[#1e2966] mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {val.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
