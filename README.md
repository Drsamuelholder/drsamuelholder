# Dr Samuel Holder

Site institucional do Dr. Samuel Holder (endocrinologista, São Paulo) — `drsamuelholder.com.br`.
SPA em React + Vite, uma página só (`/`) com seções de apresentação, sobre, serviços, estatísticas,
depoimentos, FAQ e contato. Design original em
[Figma](https://www.figma.com/design/98wMPVrp49ZcUrzq7Vca4C/Dr-Samuel-Holder).

## Stack

- **Vite 6** + **React 18** + **React Router 7** (`src/app/routes.tsx`)
- **Tailwind CSS 4** + Radix UI (componentes em `src/app/components/ui`)
- **Motion** (framer-motion) para animações
- Deploy: **Vercel** (`vercel.json` — SPA rewrite pra `index.html`)

## Rodando localmente

```bash
npm i         # instala as dependências
npm run dev   # servidor de desenvolvimento (Vite, normalmente localhost:5173)
npm run build # build de produção
```

## Estrutura

```
src/app/
  components/sections/   # Hero, About, Services, Stats, Testimonials, FAQ, Contact
  components/layout/      # Header, Footer
  components/ui/          # componentes Radix/shadcn-style reutilizáveis
  constants.ts             # dados de contato (WhatsApp, redes sociais, Doctoralia) centralizados
  routes.tsx                # rota única (/) via react-router
public/
  favicon.svg, robots.txt, sitemap.xml, ícones e verificação do Google Search Console
```

## Funcionalidades notáveis

- **Agenda embutida (widget do CRM)** — a seção de Contato carrega a agenda nativa do consultório
  via um Web Component servido pelo CRM (`<api111-agenda>`, Shadow DOM, sem iframe). Detalhes,
  valores confirmados e como testar localmente: [`docs/AGENDA-WIDGET.md`](docs/AGENDA-WIDGET.md).
  **Nota**: implementado e em produção via a branch `main`; a branch `SEO.01` ainda não incorporou
  esse código (ver nota no topo do doc).
- **SEO** — Schema.org (`Physician`, `AggregateRating`, `FAQPage`), Open Graph/Twitter cards,
  sitemap e robots.txt. Mudanças em andamento e pendências:
  [`docs/SEO-CHANGES.md`](docs/SEO-CHANGES.md).

## Branches

- `main` — produção (`www.drsamuelholder.com.br`), inclui o widget de agendamento já mesclado.
- `SEO.01` — trabalho de SEO em andamento (schema.org, favicon, robots.txt), ainda não mesclado
  de volta em `main`.
