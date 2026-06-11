/**
 * Seção FAQ – Perguntas Frequentes sobre Endocrinologia
 *
 * Utiliza o componente Accordion do design system para
 * exibir as perguntas e respostas mais comuns dos pacientes.
 * Dividido em duas colunas no desktop para melhor leitura.
 */

import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';

// ══════════════════════════════
// DADOS DAS PERGUNTAS
// ══════════════════════════════

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'o-que-e',
    question: 'O que é a Endocrinologia e quando devo consultar?',
    answer:
      'A Endocrinologia é a especialidade médica que trata das glândulas e hormônios do corpo. Você deve consultar um endocrinologista se tiver ganho ou perda de peso inexplicável, cansaço excessivo, alterações de humor, diabetes, problemas na tireoide, irregularidade menstrual, osteoporose ou suspeita de desequilíbrio hormonal.',
  },
  {
    id: 'emagrecimento',
    question: 'Como funciona o tratamento médico para emagrecimento?',
    answer:
      'O tratamento inicia com uma consulta completa, exames laboratoriais e avaliação do histórico do paciente. A partir disso, o Dr. Samuel elabora um plano de acompanhamento personalizado que pode incluir orientações nutricionais, ajustes de hábitos e medicamentos quando indicados. O objetivo é um emagrecimento saudável e duradouro.',
  },
  {
    id: 'diabetes',
    question: 'Quais tipos de diabetes o Dr. Samuel trata?',
    answer:
      'O Dr. Samuel trata diabetes mellitus tipo 1, tipo 2, diabetes gestacional e pré-diabetes. O acompanhamento inclui controle glicêmico, ajuste de medicação, orientações sobre alimentação, atividade física e prevenção de complicações. O objetivo é que o paciente viva com qualidade e segurança.',
  },
  {
    id: 'convenio',
    question: 'O Dr. Samuel Holder atende por convênio médico?',
    answer:
      'Não. O atendimento é somente particular, para pacientes que querem um plano de acompanhamento médico.',
  },
  {
    id: 'consulta-online',
    question: 'O doutor realiza teleconsultas (consultas online)?',
    answer:
      'Sim! O Dr. Samuel Holder realiza teleconsultas para pacientes de todas as regiões do Brasil e do mundo. A consulta online permite maior comodidade sem abrir mão da qualidade do atendimento. Entre em contato para agendar.',
  },
  {
    id: 'tireoide',
    question: 'Quais são os sintomas de problemas na tireoide?',
    answer:
      'O hipotireoidismo pode causar cansaço, ganho de peso, frio excessivo, pele seca e queda de cabelo. Já o hipertireoidismo provoca palpitações, perda de peso, agitação e sudorese excessiva. Nódulos na tireoide geralmente não causam sintomas. Em todos os casos, uma avaliação médica com exames é essencial para o diagnóstico correto.',
  },
  {
    id: 'duracao',
    question: 'Quanto tempo dura uma consulta e como me preparar?',
    answer:
      'A primeira consulta costuma durar entre 40 e 60 minutos, pois é feita uma anamnese completa. Para se preparar, traga todos os exames anteriores, lista de medicamentos que usa e anote suas principais queixas e dúvidas. Caso tenha exames de imagem, como ultrassom ou tomografia, leve o laudo também.',
  },
  {
    id: 'agendamento',
    question: 'Como agendar uma consulta com o Dr. Samuel?',
    answer:
      'O agendamento pode ser feito de forma rápida e fácil pelo WhatsApp (11) 94719-1129, Link do Instagram e pelo formulário de contato deste site ou diretamente pelo Doctoralia.',
  },
];

// Divide em dois grupos para exibir em duas colunas no desktop
const FAQ_LEFT = FAQ_ITEMS.slice(0, 4);
const FAQ_RIGHT = FAQ_ITEMS.slice(4);

const WHATSAPP_NUMBER = '5511947191129';
const WHATSAPP_MSG = encodeURIComponent(
  'Olá, Dr. Samuel! Tenho uma dúvida sobre Endocrinologia e gostaria de saber mais sobre seus serviços.',
);

// ══════════════════════════════
// COMPONENTE
// ══════════════════════════════

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-16 md:py-24 lg:py-32"
      style={{ background: 'linear-gradient(180deg, #f8faff 0%, #eff6ff 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── CABEÇALHO ── */}
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
              Dúvidas Frequentes
            </span>
            <div className="h-px w-12 bg-[#1558a3]" />
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#1e2966] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Perguntas Frequentes
          </h2>
          <p
            className="text-lg text-gray-600 max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Respondemos as principais dúvidas sobre Endocrinologia e o atendimento
            do Dr. Samuel Holder.
          </p>
        </motion.div>

        {/* ── ACORDEÕES EM DUAS COLUNAS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-12">
          {/* Coluna esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {FAQ_LEFT.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-white rounded-xl px-5 shadow-sm border border-gray-100 hover:border-[#bfdbfe] transition-colors"
                >
                  <AccordionTrigger
                    className="text-sm font-semibold text-gray-800 hover:no-underline hover:text-[#1558a3] py-5"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p
                      className="text-sm text-gray-600 leading-relaxed pb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Coluna direita */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {FAQ_RIGHT.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-white rounded-xl px-5 shadow-sm border border-gray-100 hover:border-[#bfdbfe] transition-colors"
                >
                  <AccordionTrigger
                    className="text-sm font-semibold text-gray-800 hover:no-underline hover:text-[#1558a3] py-5"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p
                      className="text-sm text-gray-600 leading-relaxed pb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>

        {/* ── CTA: Não encontrou sua dúvida? ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 text-center shadow-md border border-[#dbeafe]"
        >
          <MessageCircle className="w-10 h-10 text-[#1558a3] mx-auto mb-3" />
          <h3
            className="text-xl font-bold text-[#1e2966] mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Não encontrou sua dúvida?
          </h3>
          <p
            className="text-sm text-gray-600 mb-5 max-w-md mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Entre em contato diretamente pelo WhatsApp. Respondemos com agilidade!
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#059669] hover:bg-[#047857] text-white gap-2 px-8 h-12 transition-all active:scale-95">
              <MessageCircle className="w-4 h-4" />
              Enviar Pergunta pelo WhatsApp
            </Button>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
