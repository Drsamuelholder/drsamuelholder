# Agenda embutida (widget do CRM) — o que é, estado atual, como retomar

Escrito em 13/08/2026 (Claude Code), branch `feat/agenda-widget-embed` (a partir de `origin/main`).
Registro completo pra qualquer sessão futura (IA ou humana) — não presumir que já sabe disto só
pelo `git log`.

## O que é

A seção "Contato" do site agora mostra um card "Escolha o Melhor Horário" com a agenda **nativa**
do consultório, carregada de um widget externo (`<api111-agenda>`) — não é um formulário deste
site, é um Web Component servido pelo CRM do Dr. Samuel (`app.drsamuelholder.com.br/widget.js`),
com Shadow DOM (o CSS de um não vaza pro outro em nenhuma direção). Documentação completa da
arquitetura, decisão de design e testes está no **outro repositório**:
`C:\Users\marci\Desktop\Deploy\CRM\api111-monorepo\docs\superpowers\specs\2026-08-13-widget-agendamento-embutivel.md`
(não é um link clicável daqui, é outro repo — mas é onde está o detalhe de verdade).

Este documento cobre só o lado do site institucional.

## Arquivos deste repo envolvidos

- [`src/app/components/sections/AgendaWidget.tsx`](../src/app/components/sections/AgendaWidget.tsx)
  — carrega o `<script>` do widget (uma vez só, idempotente) e mostra 3 estados: carregando, pronto
  (o widget de verdade) ou erro/fallback (mensagem + link de WhatsApp).
- [`src/app/components/sections/Contact.tsx`](../src/app/components/sections/Contact.tsx) — só
  adiciona o bloco do `AgendaWidget` acima do formulário de contato que já existia. **Nada foi
  removido** — o CTA de WhatsApp e o formulário continuam do jeito que estavam.
- [`src/app/constants.ts`](../src/app/constants.ts) — `AGENDA_WIDGET_SCRIPT_URL` e
  `AGENDA_PROFESSIONAL_ID`, ambos com valores reais confirmados (ver seção seguinte).
- [`src/vite-env.d.ts`](../src/vite-env.d.ts) — declaração de tipo pra `<api111-agenda>` (o projeto
  não roda `tsc` no build, então isto é só conforto do editor, não bloqueia nada).

## Valores confirmados (13/08/2026)

- `AGENDA_WIDGET_SCRIPT_URL = 'https://app.drsamuelholder.com.br/widget.js'` — **sem "www."**.
  Confirmado contra `apps/crm-samuel-holder/.env.local` do CRM (que já tinha
  `NEXT_PUBLIC_SITE_URL` correto); o Marcio tinha dito de cabeça "www.app..." na conversa, o
  `.env.local` é que estava certo.
- `AGENDA_PROFESSIONAL_ID = '46d89d7e-1626-4b32-9197-372f5283364f'` — UUID de "Dr Samuel Ramos
  Holder" na tabela `professionals` do Supabase do próprio `crm-samuel-holder` (projeto isolado,
  não é o do api111). Confirmado por consulta direta (`select id, name, active from
  professionals`), não é um palpite.

Se qualquer um desses dois valores mudar (troca de domínio, profissional novo, etc.), é só editar
`constants.ts` — não precisa mexer em mais nada.

## Teste local — como fazer de novo

`AGENDA_WIDGET_SCRIPT_URL` aceita override por `VITE_AGENDA_WIDGET_SCRIPT_URL` num `.env.local`
**não commitado** (`.gitignore` já cobre `.env.local` neste repo). Pra testar contra o CRM rodando
localmente:

1. No monorepo do CRM (`apps/crm-samuel-holder`), rodar `npm run dev` — normalmente sobe em
   `localhost:3000`. Precisa de um `.env.local` ali com credenciais reais do Supabase do Dr. Samuel
   (existe em `C:\Users\marci\Desktop\Deploy\CRM\api111-monorepo\apps\crm-samuel-holder\.env.local`
   — copiar pra dentro do worktree/branch que estiver usando) e, além das vars normais, adicionar
   `EMBED_ALLOWED_ORIGINS=http://localhost:5173` (ou a porta que o Vite deste site pegar).
2. Neste repo, criar `.env.local` (raiz) com `VITE_AGENDA_WIDGET_SCRIPT_URL=http://localhost:3000/widget.js`.
3. `npm run dev` aqui (Vite, normalmente `localhost:5173`) — abrir e ir até a seção Contato.

**Já foi testado assim nesta sessão** com dado real (profissional, tipos de consulta e horários
verdadeiros do banco do Dr. Samuel apareceram no widget) — não é teoria, foi confirmado num
navegador de verdade, inclusive isolamento de CSS via Shadow DOM contra uma folha de estilo hostil
de propósito.

## O que NÃO foi testado (de propósito)

- **Submeter um agendamento de verdade** pelo widget — criaria um registro real no banco de
  produção do Dr. Samuel e dispararia e-mail/notificação reais. Só fazer com autorização explícita
  dele, não por conta própria.

## O que NÃO fazer

- **Não** remover o CTA de WhatsApp nem o formulário de contato existentes — o pedido original foi
  "manter como alternativa paralela", não substituir.
- **Não** hardcodar um domínio/UUID diferente sem confirmar antes — os dois valores atuais vieram
  de verificação direta (arquivo `.env.local` real + consulta ao banco), não de suposição.
- **Não** commitar `.env.local` (override de teste local) — já está no `.gitignore`, mas confirmar
  se criar um novo em outra sessão.
- **Não** presumir que o widget "só funciona" sem testar — ele já quebrou uma vez por um bug do lado
  do CRM (rota estática bloqueada por middleware de login) que só apareceu testando de verdade, não
  no code review.

## Estado dos deploys — ATUALIZADO 13/08/2026

**Já está em produção**, `www.drsamuelholder.com.br` (aliasado manualmente via `vercel alias set`
— o alias não seguiu automático pro deployment novo, precisou do comando explícito depois do
`vercel --prod`). Confirmado com navegador real: seção "Escolha o Melhor Horário" presente,
widget carregando dado real do CRM, sem erro no console.

**Atualização mesmo dia**: `feat/agenda-widget-embed` foi mesclada em `main` via PR
([#8](https://github.com/Drsamuelholder/drsamuelholder/pull/8), usando `gh` CLI autenticado como
`MarcioAnttonio` — o remote local ainda aponta pra `MarcioAnttonio/drsamuelholder.git`, mas esse
repo foi transferido pra conta `Drsamuelholder`; git segue redirecionando automaticamente). `main`
e produção agora batem. Ver o spec doc no monorepo do CRM (caminho no topo deste arquivo) pra mais
detalhe (IDs de deployment, etc.) — evitar duplicar aqui e desatualizar em um lugar só.
