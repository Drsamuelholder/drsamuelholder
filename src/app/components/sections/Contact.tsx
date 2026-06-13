import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import {
  Phone, Mail, Instagram, Linkedin,
  Send, CheckCircle, Clock, Calendar,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { cn } from '../ui/utils';
import type { ReactNode } from 'react';
import {
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
  WHATSAPP_PHONE_DISPLAY,
  EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from '../../constants';

// ══════════════════════════════
// TIPOS
// ══════════════════════════════

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  specialty: string;
  message: string;
}

// ══════════════════════════════
// DADOS ESTÁTICOS
// ══════════════════════════════


const SPECIALTIES = [
  'Emagrecimento Médico',
  'Diabetes Mellitus',
  'Tireoide',
  'Distúrbios Hormonais',
  'Osteoporose',
  'Síndrome Metabólica',
  'Teleconsulta',
  'Outros',
];

// ══════════════════════════════
// HELPERS
// ══════════════════════════════

function buildWhatsAppURL(data: ContactFormData): string {
  const lines = [
    `Olá, Dr. Samuel! Meu nome é ${data.name}.`,
    `E-mail: ${data.email}`,
    `Telefone: ${data.phone}`,
    data.specialty ? `Motivo: ${data.specialty}` : '',
    data.message ? `Mensagem: ${data.message}` : '',
  ].filter(Boolean);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}

// ══════════════════════════════
// COMPONENTE
// ══════════════════════════════

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    const url = buildWhatsAppURL(data);
    window.open(url, '_blank');
    setSubmitted(true);
    reset();
  };

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
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#1558a3]" />
            <span className="text-sm font-semibold text-[#1558a3] uppercase tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>
              Agende sua Consulta
            </span>
            <div className="h-px w-12 bg-[#1558a3]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1e2966] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Dê o primeiro passo para uma vida mais saudável.
            Agende sua consulta hoje mesmo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ── COLUNA ESQUERDA: CTA + FORMULÁRIO ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* CTA WhatsApp direto */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#059669] hover:bg-[#047857] text-white rounded-2xl p-5 mb-6 shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Agendar pelo WhatsApp
                </p>
                <p className="text-green-100 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {WHATSAPP_PHONE_DISPLAY} · Resposta rápida
                </p>
              </div>
              <div className="ml-auto">
                <Send className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Formulário ou tela de sucesso */}
            {submitted ? (
              <div className="bg-white rounded-2xl p-8 border border-green-200 text-center shadow-sm">
                <CheckCircle className="w-12 h-12 text-[#059669] mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Mensagem enviada!
                </h3>
                <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Sua mensagem foi encaminhada. Retornaremos em breve para confirmar o agendamento.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="border-[#1558a3] text-[#1558a3] hover:bg-[#1558a3] hover:text-white"
                >
                  Enviar nova mensagem
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4"
                noValidate
              >
                <p className="text-sm font-semibold text-gray-700 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Ou preencha o formulário abaixo:
                </p>

                {/* Nome */}
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Nome completo <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    className={cn(errors.name && 'border-red-400 focus-visible:ring-red-300')}
                    {...register('name', { required: 'Nome é obrigatório' })}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500" role="alert" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email + Telefone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                      E-mail <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      className={cn(errors.email && 'border-red-400')}
                      {...register('email', {
                        required: 'E-mail obrigatório',
                        pattern: { value: /^\S+@\S+\.\S+$/, message: 'E-mail inválido' },
                      })}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500" role="alert" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                      WhatsApp <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      className={cn(errors.phone && 'border-red-400')}
                      {...register('phone', { required: 'Telefone obrigatório' })}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500" role="alert" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Especialidade */}
                <div className="space-y-1.5">
                  <Label htmlFor="specialty" className="text-sm font-medium text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Motivo da consulta
                  </Label>
                  <select
                    id="specialty"
                    className="w-full h-9 rounded-md border border-input bg-input-background px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1558a3]/30 transition-shadow"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    {...register('specialty')}
                  >
                    <option value="">Selecione uma especialidade…</option>
                    {SPECIALTIES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Mensagem */}
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Mensagem / Dúvida
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Descreva brevemente sua queixa ou dúvida…"
                    className="min-h-[100px] text-sm text-gray-700 focus-visible:ring-[#1558a3]/30"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    {...register('message')}
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1558a3] hover:bg-[#1e3a8a] text-white h-11 gap-2 transition-all active:scale-[0.98] disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensagem
                </Button>
              </form>
            )}
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
