import { motion } from 'motion/react';
import { Phone, Mail, Instagram, Linkedin, Clock, Calendar } from 'lucide-react';
import { AgendaWidget } from './AgendaWidget';
import type { ReactNode } from 'react';
import {
  WHATSAPP_URL,
  WHATSAPP_PHONE_DISPLAY,
  EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from '../../constants';

// ══════════════════════════════
// COMPONENTE
// ══════════════════════════════

export function Contact() {
  return (
    <section id="contato" className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── CABEÇALHO ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1e2966]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Agende sua Consulta
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ── COLUNA ESQUERDA: AGENDA ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Agenda nativa do CRM (Web Component, Shadow DOM — sem iframe), no lugar do
                formulário que existia antes. WhatsApp continua listado em "Informações de
                Contato" ao lado, sem CTA duplicado aqui. */}
            <AgendaWidget />
          </motion.div>

          {/* ── COLUNA DIREITA: INFO + LOCAIS ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Horário de atendimento */}
            <div className="bg-[#1558a3] text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-blue-200" />
                <h3 className="font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Horários de Atendimento
                </h3>
              </div>
              <div className="space-y-2 text-sm text-blue-100" style={{ fontFamily: "'Inter', sans-serif" }}>
                <div className="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span className="font-medium text-white">08h – 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados</span>
                  <span className="font-medium text-white">08h – 12h</span>
                </div>
                <div className="flex justify-between">
                  <span>Teleconsulta</span>
                  <span className="font-medium text-white">Sob agendamento</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20 flex items-center gap-2 text-sm text-blue-100">
                <Calendar className="w-4 h-4" />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>Consulta com hora marcada</span>
              </div>
            </div>

            {/* Dados de contato */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
              <h3 className="font-bold text-[#1e2966] text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Informações de Contato
              </h3>
              <ContactItem icon={<Phone className="w-4 h-4" />} label="WhatsApp">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1558a3] hover:underline text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {WHATSAPP_PHONE_DISPLAY}
                </a>
              </ContactItem>
              <ContactItem icon={<Mail className="w-4 h-4" />} label="E-mail">
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-[#1558a3] hover:underline text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {EMAIL}
                </a>
              </ContactItem>
              <ContactItem icon={<Instagram className="w-4 h-4" />} label="Instagram">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1558a3] hover:underline text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  @drsamuelholder
                </a>
              </ContactItem>
              <ContactItem icon={<Linkedin className="w-4 h-4" />} label="LinkedIn">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1558a3] hover:underline text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  drsamuelholder
                </a>
              </ContactItem>
            </div>

          </motion.div>
        </div>
      </div>

    </section>
  );
}

// ── Sub-componente: Item de informação de contato ──

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-[#eff6ff] flex items-center justify-center text-[#1558a3] shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}
