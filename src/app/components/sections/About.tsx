/**
 * Seção Sobre – Apresentação do Dr. Samuel Holder
 *
 * Apresenta a história, formação e valores do médico.
 * Layout duas colunas: foto + credenciais à esquerda,
 * bio e diferenciais à direita.
 */

import { motion } from 'motion/react';
import { GraduationCap, Microscope, Users, Video } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import drSamuelSobre from '@/imports/Perfilsobre.PNG'

// ══════════════════════════════
// DADOS
// ══════════════════════════════

/** Credenciais e formação do médico */
const CREDENTIALS = [
  { icon: <GraduationCap className="w-4 h-4" />, text: 'Médico formado pela UNIR – Porto Velho/RO' },
  { icon: <Microscope className="w-4 h-4" />, text: 'Médico especialista em Clínica Médica - Hospital Tatuapé' },
  { icon: <Microscope className="w-4 h-4" />, text: 'Especialização em Endocrinologia e Metabologia - Hospital Ipiranga ' },
  { icon: <Users className="w-4 h-4" />, text: 'Atendimento em São Paulo e Porto Velho' },
  { icon: <Video className="w-4 h-4" />, text: 'TeleMedicina Brasil' },
];

/** Valores e diferenciais do consultório */
interface Value {
  title: string;
  description: string;
  color: string;
}

const VALUES: Value[] = [
  {
    title: 'Medicina Personalizada',
    description: 'Cada paciente é único. Criamos planos de tratamento individualizados baseados no histórico de Saúde, avaliação em exames e  baseado no estilo de vida de cada paciente.',
    color: '#dbeafe',
  },
  {
    title: 'Abordagem Humanizada',
    description: 'Escutamos, explicamos e acompanhamos cada etapa do tratamento com empatia e respeito à sua individualidade.',
    color: '#dcfce7',
  },
  {
    title: 'Ciência e Evidências',
    description: 'Utilizamos protocolos baseados nas mais recentes diretrizes científicas nacionais e internacionais.',
    color: '#fef3c7',
  },
];

// Animação de entrada ao rolar
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ══════════════════════════════
// COMPONENTE
// ══════════════════════════════

export function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 lg:py-32 bg-white">
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
          className="text-3xl md:text-4xl lg:text-5xl text-center text-[#1e2966] mb-16"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Sobre o Dr. Samuel Holder
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── COLUNA ESQUERDA: FOTO + CREDENCIAIS ── */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Foto principal */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <ImageWithFallback
                src={drSamuelSobre}
                alt="Dr. Samuel Holder em seu consultório"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradiente sutil */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(21,88,163,0.5) 0%, transparent 60%)' }}
              />
              {/* Badge CRM */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <p
                  className="text-lg font-bold text-[#1e2966]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Dr. Samuel Holder
                </p>
                <p
                  className="text-sm text-[#1558a3] font-medium"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Endocrinologista e Metabologista
                </p>
                <p
                  className="text-xs text-gray-500 mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  CRM-RO / CRM-SP
                </p>
              </div>
            </div>

            {/* Elemento decorativo */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl -z-10"
              style={{ background: '#dbeafe' }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl -z-10"
              style={{ background: '#dcfce7' }}
            />
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
              className="text-base text-gray-600 leading-relaxed mb-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Sou médico, natural de Rondônia e iniciei minha formação profissional cursando farmácia e bioquímica pela Universidade Federal do Mato Grosso do Sul (UFMS). Logo após, me formei em medicina pelas Faculdades Integradas Aparício Carvalho (FIMCA) e assim que conclui, vim para São Paulo e fiz a residência de clínica médica no Hospital Municipal do Tatuapé. Me especializei em Endocrinologia e Metabolismo no Hospital Ipiranga. Atualmente, trabalho em São Paulo com atendimento particular com planos de acompanhamento médico. Escolhi trabalhar com obesidade
e emagrecimento, pelo fato de fazer a diferença na qualidade de vida dos meus pacientes. Também trabalho com outras endocrinopatias como diabetes, tireóide, osteoporose e menopausa.
Amo o que faço e procuro atender e tratar o indivíduo de uma forma humanizada e integral. 
            </p>

            {/* Credenciais */}
            <div className="space-y-3 mb-8">
              {CREDENTIALS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#eff6ff] flex items-center justify-center text-[#1558a3] shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <p
                    className="text-sm text-gray-700 pt-1.5"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
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
                  <h4
                    className="text-sm font-semibold text-[#1e2966] mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {val.title}
                  </h4>
                  <p
                    className="text-xs text-gray-600 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
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
