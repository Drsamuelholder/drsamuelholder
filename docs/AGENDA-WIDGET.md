# Agenda embutida (widget do CRM) — o que é, estado atual, como retomar

Escrito em 13/08/2026 (Claude Code). Duas sessões no mesmo dia:
1. `feat/agenda-widget-embed` (a partir de `origin/main`) — primeira versão, **já em produção**.
2. `feat/agenda-widget-contact-layout` (a partir de `SEO.01`) — redesign da seção Contato, **ainda
   não em produção**, ver "Estado dos deploys" no fim.

Registro completo pra qualquer sessão futura (IA ou humana) — não presumir que já sabe disto só
pelo `git log`.

## O que é

A seção "Contato" do site mostra a agenda **nativa** do consultório, carregada de um widget
externo (`<api111-agenda>`) — não é um formulário deste site, é um Web Component servido pelo CRM
do Dr. Samuel (`app.drsamuelholder.com.br/widget.js`), com Shadow DOM (o CSS de um não vaza pro
outro em nenhuma direção). Documentação completa da arquitetura, decisão de design e testes está
no **outro repositório** (monorepo do CRM):
- Versão original do widget:
  `docs/superpowers/specs/2026-08-13-widget-agendamento-embutivel.md`
- Presets de tamanho/layout (`size`) e indicador de passos, adicionados na sessão de hoje:
  `docs/superpowers/specs/2026-08-13-widget-size-variants-design.md`
(caminhos relativos ao monorepo do CRM, não são links clicáveis daqui — é outro repo, mas é onde
está o detalhe de verdade).

Este documento cobre só o lado do site institucional.

## Redesign da seção Contato (sessão `feat/agenda-widget-contact-layout`, 13/08/2026)

A pedido do Marcio, depois de ver a primeira versão ocupando a seção inteira:

- **Formulário de contato removido.** A agenda entra no lugar dele, ao lado das colunas de
  "Horários de Atendimento" e "Informações de Contato" — não mais um bloco full-width acima da
  grade.
- **CTA verde "Agendar pelo WhatsApp" removido do Contato** — o WhatsApp continua acessível via
  "Informações de Contato" (link de texto) e o botão flutuante do site, sem duplicar como CTA
  grande.
- **Título da seção reduzido** a só "Agende sua Consulta" (removidos "Entre em Contato" e o
  parágrafo "Dê o primeiro passo...").
- **Preset `size="split"`** escolhido entre as 5 opções (`compact`/`medium`/`large`/`split`/
  `wizard`) depois de comparar ao vivo — calendário e horários lado a lado, cabe bem na coluna
  estreita ao lado das outras informações. Ver o spec de presets no monorepo do CRM (link acima)
  pro racional de cada opção.
- **Indicador de passos colorido** dentro do próprio widget (implementado no CRM, não neste repo):
  barra "Você é cliente? → Tipo de consulta → Data e horário" com cor indicando passo atual,
  concluído e futuro.
- **Botões "Agendar Consulta"** (Header desktop, menu mobile, Hero) pararam de abrir o WhatsApp
  direto — agora rolam até `#contato` (a própria agenda). O card de WhatsApp do Contato era o
  único link de WhatsApp restante nesse fluxo; como foi removido, WhatsApp como "agendar" só
  sobra no botão flutuante e em "Informações de Contato" (não mais como CTA competindo com a
  agenda).
- **Ordem das seções da página mudou**: Contato agora vem logo depois de Especialidades (antes
  vinha por último, depois de FAQ) — `src/app/pages/Home.tsx`. Nav (`Header.tsx`) reordenado pra
  bater e o link renomeado de "Contato" pra "Contato/Agendar".
- **Fundo do Contato**: trocado de `bg-gray-50` pra `bg-white` — ficou vizinho de Especialidades
  (que é `bg-gray-50`) e as duas se misturavam sem essa troca.

## Arquivos deste repo envolvidos

- [`src/app/components/sections/AgendaWidget.tsx`](../src/app/components/sections/AgendaWidget.tsx)
  — carrega o `<script>` do widget (uma vez só, idempotente), mostra 3 estados (carregando/pronto/
  erro) e renderiza `<api111-agenda ... size="split" />`.
- [`src/app/components/sections/Contact.tsx`](../src/app/components/sections/Contact.tsx) — só a
  agenda na coluna esquerda (sem form, sem CTA WhatsApp); título reduzido a "Agende sua Consulta".
- [`src/app/components/layout/Header.tsx`](../src/app/components/layout/Header.tsx) — nav
  reordenado/renomeado; CTAs "Agendar Consulta" rolam até `#contato` em vez de abrir WhatsApp.
- [`src/app/components/sections/Hero.tsx`](../src/app/components/sections/Hero.tsx) — mesmo ajuste
  de CTA que o Header.
- [`src/app/pages/Home.tsx`](../src/app/pages/Home.tsx) — ordem das seções.
- [`src/app/constants.ts`](../src/app/constants.ts) — `AGENDA_WIDGET_SCRIPT_URL` e
  `AGENDA_PROFESSIONAL_ID`, ambos com valores reais confirmados (ver seção seguinte).
- [`src/vite-env.d.ts`](../src/vite-env.d.ts) — declaração de tipo pra `<api111-agenda>`, inclui o
  atributo `size` agora (o projeto não roda `tsc` no build, então isto é só conforto do editor).

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

1. No monorepo do CRM, worktree/branch com os presets (`feat/embed-widget-size-variants`, ou
   `main` se só quiser o comportamento sem presets), `apps/crm-samuel-holder`: rodar
   `npm run dev -- -p 3001` (ou a porta livre que preferir — `predev` já builda e copia o
   `widget.js`). Precisa de um `.env.local` ali com credenciais reais do Supabase do Dr. Samuel e
   `EMBED_ALLOWED_ORIGINS` incluindo a porta que o Vite deste site pegar (`http://localhost:5173`
   e/ou `5174` — **confira qual porta o Vite realmente usou**, ele pula pra próxima livre se a
   primeira já estiver ocupada por outro processo).
2. Neste repo, `.env.local` (raiz) com `VITE_AGENDA_WIDGET_SCRIPT_URL=http://localhost:PORTA/widget.js`
   (a porta do passo 1).
3. `npm run dev` aqui — abrir e ir até a seção Contato (agora logo depois de Especialidades).

Se o widget.js do CRM for reconstruído (`vite build` em `packages/embed-widget`) com o servidor
Next já rodando, rodar `node scripts/copy-widget.mjs` de novo em `apps/crm-samuel-holder` pra
atualizar o `public/widget.js` sem precisar reiniciar o `next dev`.

**Já foi testado assim** com dado real (profissional, tipos de consulta e horários verdadeiros do
banco do Dr. Samuel apareceram no widget, os 5 presets comparados ao vivo) — não é teoria, foi
confirmado num navegador de verdade.

## O que NÃO foi testado (de propósito)

- **Submeter um agendamento de verdade** pelo widget — criaria um registro real no banco de
  produção do Dr. Samuel e dispararia e-mail/notificação reais. Só fazer com autorização explícita
  dele, não por conta própria.

## O que NÃO fazer

- **Não** hardcodar um domínio/UUID diferente sem confirmar antes — os dois valores atuais vieram
  de verificação direta (arquivo `.env.local` real + consulta ao banco), não de suposição.
- **Não** commitar `.env.local` (override de teste local) — já está no `.gitignore`, mas confirmar
  se criar um novo em outra sessão.
- **Não** presumir que o widget "só funciona" sem testar — ele já quebrou uma vez por um bug do
  lado do CRM (rota estática bloqueada por middleware de login) que só apareceu testando de
  verdade, não no code review.
- **Não** trocar o preset `size="split"` sem confirmar com o Marcio — foi escolhido comparando as
  5 opções ao vivo, não é o default arbitrário (`medium`).

## Estado dos deploys — ATUALIZADO 13/08/2026 (fim do dia)

**Produção (`www.drsamuelholder.com.br`, branch `main`) ainda está na VERSÃO ORIGINAL** — widget
`size="medium"` (default, sem preset), formulário de contato presente, CTAs ainda abrindo WhatsApp
direto, seção Contato ainda por último na página. O redesign completo (preset `split`, sem
formulário, indicador de passos, CTAs pro calendário, nova ordem das seções) está só na branch
local `feat/agenda-widget-contact-layout` (a partir de `SEO.01`) — **não commitado em `main`, não
publicado (`git push`), não em produção.**

Do lado do CRM (monorepo), o indicador de passos e os presets de tamanho estão na branch
`feat/embed-widget-size-variants` (worktree `CRM/worktrees/embed-widget-size-variants`) — também
**não mesclada em `main` do CRM, não deployada em produção**. Pra `size="split"` funcionar no site
publicado, esse lado precisa ir pra produção primeiro (rebuild do `widget.js` +
`vercel --prod` do `crm-samuel-holder`) — combinar com o Marcio antes de rodar, é deploy em cima
do CRM real de agendamento do Dr. Samuel.

Histórico da primeira versão (já entregue): mesclada em `main` via PR
([#8](https://github.com/Drsamuelholder/drsamuelholder/pull/8) e depois #9), deployada com
`vercel --prod` + `vercel alias set` manual (o alias não seguiu automático). Ver o spec doc
original no monorepo do CRM (link no topo deste arquivo) pra detalhe de deployment IDs.
