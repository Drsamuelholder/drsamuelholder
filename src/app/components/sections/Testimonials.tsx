'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

// ══════════════════════════════
// TIPOS E DADOS
// ══════════════════════════════

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  initials: string;
  avatarColor: string;
}

// Avaliações reais coletadas do Doctoralia — ordenadas por impacto
const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Marceli',
    rating: 5,
    comment:
      'Conheço o Dr. Samuel há alguns anos, desde a época em que ele me atendia pelo convênio, e realizo acompanhamento regular com ele desde o ano passado. Pude constatar sua competência técnica, atenção e compromisso com um atendimento humanizado. Tenho histórico de obesidade e sempre fui acolhida com respeito, empatia e profissionalismo. O que mais admiro em seu trabalho é a forma como enxerga o paciente de maneira integral — considera hábitos de vida, saúde mental e bem-estar geral. Recomendo pela excelência profissional, humanidade e dedicação.',
    date: '2 de junho',
    initials: 'MA',
    avatarColor: '#1558a3',
  },
  {
    id: 2,
    name: 'Vanderlice',
    rating: 5,
    comment:
      'Eu e meu marido gostamos muito da consulta com o Dr. Samuel. Médico atencioso, calmo, humanizado, detalhista e simpático. Esclareceu nossas dúvidas com detalhes e profissionalismo. Nos sentimos protegidos já na primeira consulta. Ele demonstra amor e muita responsabilidade à profissão e dá acolhimento aos pacientes. O Hospital São Cristóvão, dessa vez, está de parabéns pela seleção e contratação desse profissional.',
    date: '20 de fevereiro',
    initials: 'VA',
    avatarColor: '#059669',
  },
  {
    id: 3,
    name: 'Jussara Santos Nascimento',
    rating: 5,
    comment:
      'Doutor Samuel, simplesmente maravilhoso — explica os diagnósticos com detalhes de uma maneira clara e objetiva. Um excelente médico.',
    date: '18 de dezembro',
    initials: 'JS',
    avatarColor: '#7c3aed',
  },
  {
    id: 4,
    name: 'Tamirys Fagundes',
    rating: 5,
    comment:
      'Médico muito atencioso, tirou todas minhas dúvidas, estou muito empolgada para começar meu tratamento — além de emagrecer, ter mais qualidade de vida!! Indico muito o médico e a clínica!',
    date: '20 de outubro',
    initials: 'TF',
    avatarColor: '#ea580c',
  },
  {
    id: 5,
    name: 'Jennifer',
    rating: 5,
    comment:
      'Super indico! Muito educado, atencioso, pontual, incrível o trabalho e como os pacientes são tratados!',
    date: '13 de outubro',
    initials: 'JE',
    avatarColor: '#0284c7',
  },
  {
    id: 6,
    name: 'Lorena Oliveira',
    rating: 5,
    comment:
      'Muito atencioso e detalhista, pergunta e explica tudo. Toda equipe da clínica muito atenciosa também!',
    date: '26 de novembro',
    initials: 'LO',
    avatarColor: '#be185d',
  },
  {
    id: 7,
    name: 'Luciana Cavalcante Santos',
    rating: 5,
    comment: 'Excelente Profissional. Dr bem atencioso e esclarecedor.',
    date: '16 de abril',
    initials: 'LC',
    avatarColor: '#0891b2',
  },
  {
    id: 8,
    name: 'Letícia',
    rating: 5,
    comment:
      'Ótimo médico, super atencioso, exames já são feitos na clínica o que ajuda muito. Com certeza irei voltar e indicar!!',
    date: '13 de outubro',
    initials: 'LE',
    avatarColor: '#dc2626',
  },
  {
    id: 9,
    name: 'Fernanda Fazzani',
    rating: 5,
    comment:
      'O Dr. Samuel foi muito atencioso, orientou-me sobre o tratamento e analisou meus exames com atenção.',
    date: '24 de abril',
    initials: 'FF',
    avatarColor: '#1558a3',
  },
  {
    id: 10,
    name: 'Rayanny',
    rating: 5,
    comment:
      'Muito bom médico, me ajudou certinho — ótimo profissional, educado, cuidadoso. O consultório estava impecável.',
    date: '13 de outubro',
    initials: 'RA',
    avatarColor: '#059669',
  },
  {
    id: 11,
    name: 'Thais',
    rating: 5,
    comment:
      'Excelente profissional, ótimo atendimento, atenciosa, amei a consulta, tirou todas as minhas dúvidas.',
    date: '14 de outubro',
    initials: 'TH',
    avatarColor: '#7c3aed',
  },
  {
    id: 12,
    name: 'R.S.',
    rating: 5,
    comment: 'Atendimento humanizado e consultório impecável :)',
    date: '8 de janeiro',
    initials: 'RS',
    avatarColor: '#ea580c',
  },
  {
    id: 13,
    name: 'M.Ap.O.L.',
    rating: 5,
    comment:
      'Maravilhoso médico, explicativo e agradável — não deixa dúvidas na consulta.',
    date: '19 de dezembro',
    initials: 'ML',
    avatarColor: '#0284c7',
  },
  {
    id: 14,
    name: 'Luís Carlos Fernandes Cardoso',
    rating: 5,
    comment: 'Atendimento muito eficaz, atencioso e competente!!',
    date: '8 de janeiro',
    initials: 'LC',
    avatarColor: '#be185d',
  },
  {
    id: 15,
    name: 'CPF',
    rating: 5,
    comment:
      'Adorei a consulta, super atencioso, simpático. A clínica é bem estruturada, muito organizada e limpa. A recepcionista é muito atenciosa, tira todas as dúvidas.',
    date: '28 de janeiro',
    initials: 'CP',
    avatarColor: '#0891b2',
  },
  {
    id: 16,
    name: 'Luciene',
    rating: 5,
    comment:
      'Gostei muito da consulta, atendimento humanizado e acolhedor. A estrutura da clínica é excelente também.',
    date: '15 de outubro',
    initials: 'LN',
    avatarColor: '#dc2626',
  },
  {
    id: 17,
    name: 'Rose',
    rating: 5,
    comment: 'Dr. Samuel é muito atencioso em sua consulta. Gostei muito.',
    date: '30 de abril',
    initials: 'RO',
    avatarColor: '#1558a3',
  },
  {
    id: 18,
    name: 'Katia Nic Gorgueira',
    rating: 5,
    comment: 'Foi minha primeira consulta com ele, gostei bastante — o Dr. é muito atencioso!',
    date: '23 de abril',
    initials: 'KN',
    avatarColor: '#059669',
  },
  {
    id: 19,
    name: 'Julia Ariane',
    rating: 5,
    comment: 'Tratamento efetivo e clareza na explicação! Muito bom.',
    date: '1 de maio',
    initials: 'JA',
    avatarColor: '#7c3aed',
  },
  {
    id: 20,
    name: 'A.M.',
    rating: 5,
    comment:
      'Dr. muito simpático, se preocupa em entregar a melhor consulta ao seu paciente. Me deu várias dicas de conteúdo para aprender a cuidar da saúde e mudar o modo de pensar.',
    date: '1 de maio',
    initials: 'AM',
    avatarColor: '#ea580c',
  },
  {
    id: 21,
    name: 'Caroline',
    rating: 5,
    comment: 'Doutor educado, atencioso, explicativo, cuidadoso.',
    date: '17 de abril',
    initials: 'CA',
    avatarColor: '#0284c7',
  },
  {
    id: 22,
    name: 'Evelyn',
    rating: 5,
    comment: 'Profissional ótimo! Atencioso, super mega educado.',
    date: '17 de abril',
    initials: 'EV',
    avatarColor: '#be185d',
  },
  {
    id: 23,
    name: 'Irineu Miranda da Silva',
    rating: 5,
    comment:
      'Nada a acrescentar, só pensei que seria mais importante um tempo maior de consulta — embora essa primeira fosse para exames.',
    date: '16 de abril',
    initials: 'IM',
    avatarColor: '#0891b2',
  },
  {
    id: 24,
    name: 'Márcia',
    rating: 5,
    comment:
      'Dr. Samuel foi muito atencioso e explicou muitas questões importantes. Solicitou exames necessários para continuarmos as investigações.',
    date: '9 de janeiro',
    initials: 'MC',
    avatarColor: '#dc2626',
  },
  {
    id: 25,
    name: 'Talita',
    rating: 5,
    comment: 'Ótimo Profissional!!! Parabéns, amei o atendimento.',
    date: '8 de janeiro',
    initials: 'TA',
    avatarColor: '#1558a3',
  },
  {
    id: 26,
    name: 'Priscilla Cezar',
    rating: 5,
    comment: 'Ótima consulta. Médico atencioso, explicou bem.',
    date: '8 de janeiro',
    initials: 'PC',
    avatarColor: '#059669',
  },
  {
    id: 27,
    name: 'Bruna',
    rating: 5,
    comment:
      'Profissional excelente! Mas fiquei chateada que não atende mais em São Caetano. Caso esteja em outra clínica aqui na região do ABC, gostaria de continuar os atendimentos que estávamos seguindo.',
    date: '26 de maio',
    initials: 'BR',
    avatarColor: '#7c3aed',
  },
  {
    id: 28,
    name: 'Cleiton',
    rating: 5,
    comment:
      'Excelente profissional, carismático, atencioso, esclareceu todas as minhas dúvidas. Me senti acolhido na consulta e por toda a equipe da Clínica — todos muito educados.',
    date: '15 de outubro',
    initials: 'CL',
    avatarColor: '#ea580c',
  },
  {
    id: 29,
    name: 'Roberta',
    rating: 5,
    comment:
      'Excelente profissional, carismático, atencioso, esclareceu todas as minhas dúvidas. Me senti acolhida na consulta e por toda a equipe da Clínica — todos muito educados.',
    date: '15 de outubro',
    initials: 'RB',
    avatarColor: '#0284c7',
  },
  {
    id: 30,
    name: 'Tayná Inacio Krist Souza',
    rating: 5,
    comment:
      'Ótimo profissional. Muito comunicativo, a clínica bem organizada, a limpeza excelente, todos bem atenciosos... irei retornar com toda certeza.',
    date: '15 de outubro',
    initials: 'TI',
    avatarColor: '#be185d',
  },
  {
    id: 31,
    name: 'Rose',
    rating: 5,
    comment:
      'Excelente profissional, atencioso e prestativo, esclareceu minhas dúvidas e me deixou bem animada em relação ao meu tratamento.',
    date: '17 de outubro',
    initials: 'R2',
    avatarColor: '#0891b2',
  },
  {
    id: 32,
    name: 'Paciente',
    rating: 5,
    comment:
      'Ótimo profissional! Tirou todas minhas dúvidas. Iniciarei um tratamento com o mesmo e estou super confiante na evolução!',
    date: '13 de outubro',
    initials: 'PA',
    avatarColor: '#dc2626',
  },
];

const DOCTORALIA_URL =
  'https://www.doctoralia.com.br/samuel-ramos-holder/endocrinologista/sao-paulo';

const CARDS_PER_PAGE = 4;

// ══════════════════════════════
// COMPONENTE
// ══════════════════════════════

export function Testimonials() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalPages = Math.ceil(TESTIMONIALS.length / CARDS_PER_PAGE);
  const currentCards = TESTIMONIALS.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  function goTo(next: number) {
    setDirection(next > page ? 1 : -1);
    setPage(next);
  }

  return (
    <section id="depoimentos" className="py-16 md:py-24 lg:py-32 bg-white">
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
              Depoimentos
            </span>
            <div className="h-px w-12 bg-[#1558a3]" />
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#1e2966] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            O que dizem os pacientes
          </h2>
          <p
            className="text-lg text-gray-600 max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            38 avaliações no Doctoralia — 32 com nota máxima. Veja o que os pacientes
            falam sobre o atendimento do Dr. Samuel Holder.
          </p>

          {/* Rating geral */}
          <div className="mt-6 inline-flex items-center gap-2 bg-[#eff6ff] px-6 py-3 rounded-full border border-[#bfdbfe]">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span
              className="text-lg font-bold text-[#1558a3]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              5.0
            </span>
            <span
              className="text-sm text-gray-500"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              · 32 avaliações no Doctoralia
            </span>
          </div>
        </motion.div>

        {/* ── CARROSSEL ── */}
        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={page}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {currentCards.map((t) => (
                <div
                  key={t.id}
                  className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Aspas decorativas */}
                  <Quote className="w-7 h-7 text-[#bfdbfe] mb-2 shrink-0" />

                  {/* Nome + data */}
                  <p
                    className="text-sm font-semibold text-gray-800"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs text-gray-400 mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    via Doctoralia · {t.date}
                  </p>

                  {/* Estrelas */}
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Comentário */}
                  <p
                    className="text-sm text-gray-700 leading-relaxed flex-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    "{t.comment}"
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── NAVEGAÇÃO ── */}
        <div className="flex items-center justify-center gap-3 mt-10 mb-12">
          <button
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#1558a3] hover:text-[#1558a3] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Página anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir para página ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                i === page
                  ? 'w-6 h-2.5 bg-[#1558a3]'
                  : 'w-2.5 h-2.5 bg-gray-200 hover:bg-[#bfdbfe]'
              }`}
            />
          ))}

          <button
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages - 1}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#1558a3] hover:text-[#1558a3] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Próxima página"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* ── CTA DOCTORALIA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a href={DOCTORALIA_URL} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="gap-2 border-[#1558a3] text-[#1558a3] hover:bg-[#1558a3] hover:text-white transition-all duration-300 px-8 h-12"
            >
              <ExternalLink className="w-4 h-4" />
              Ver todas as avaliações no Doctoralia
            </Button>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
