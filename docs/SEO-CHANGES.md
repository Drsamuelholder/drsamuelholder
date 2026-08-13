# SEO — mudanças em andamento (branch `SEO.01`)

Registro das alterações de SEO feitas nesta branch, ainda **não commitadas** na sessão de
13/08/2026 (Claude Code). Objetivo: melhorar indexação e aparência nos resultados do Google
(rich snippets) sem alterar conteúdo visível do site.

## O que foi adicionado/alterado (working tree, não commitado)

### 1. Favicon
- `public/favicon.svg` (novo) — ícone SVG simples: fundo azul (`#1558a3`), monograma "SH" em
  branco, serifado (Georgia). 64×64, `rx="14"` (cantos arredondados).
- `index.html`: `<link rel="icon">` e `<link rel="apple-touch-icon">` apontando pro SVG novo. Não
  existia favicon nenhum configurado antes disso.

### 2. `robots.txt`
- `public/robots.txt` (novo) — libera todos os user-agents (`Allow: /`) e aponta pro
  `sitemap.xml` já existente (`public/sitemap.xml`, que só lista a home, `lastmod` 2026-06-13).

### 3. Schema.org — `AggregateRating` (dentro do bloco `Physician` já existente em `index.html`)
- Adicionado `aggregateRating` (`ratingValue: 5.0`, `reviewCount: 32`) ao JSON-LD de
  `@type: Physician` que já existia. Isso é o que faz as **estrelas aparecerem no resultado de
  busca do Google** ao lado do nome do médico.
- ⚠️ **Pendência de verificação**: os valores `5.0` / `32` precisam bater com uma fonte real
  (Doctoralia, Google Meu Negócio, etc.) — Schema.org com dado falso de avaliação viola as
  diretrizes do Google (Rich Results) e pode gerar penalização manual. Confirmar com o Marcio de
  onde vieram esses números antes de subir pra produção.

### 4. Schema.org — `FAQPage` (bloco novo)
- Novo JSON-LD `@type: FAQPage` com 7 perguntas/respostas (Endocrinologia, emagrecimento,
  diabetes, convênio, teleconsulta, tireoide, duração de consulta, como agendar).
- ⚠️ **Pendência de verificação**: o Google só honra o rich result de FAQ se as mesmas perguntas
  (ou perguntas equivalentes) também estiverem **visíveis na página** — checar se
  `src/app/components/sections/FAQ.tsx` já tem essas 7 perguntas ou se precisa ser atualizado pra
  bater com o JSON-LD (senão o Google pode ignorar o schema por considerá-lo enganoso).

## O que falta nesta frente

- [ ] Confirmar a fonte dos números de `aggregateRating` (5.0 / 32 avaliações) antes do commit.
- [ ] Conferir se `FAQ.tsx` (conteúdo visível) está alinhado com as 7 perguntas do JSON-LD novo.
- [ ] Commitar e subir estas mudanças (`index.html`, `public/favicon.svg`, `public/robots.txt`)
  — hoje só existem na working tree local (`git status` mostra `index.html` modificado e os dois
  arquivos novos como untracked).
- [ ] Expandir `public/sitemap.xml` se novas rotas/âncoras relevantes forem criadas (hoje só lista
  a home).
- [ ] Unir esta branch (`SEO.01`) com o trabalho do widget de agendamento, hoje só em `main` — ver
  [`docs/AGENDA-WIDGET.md`](./AGENDA-WIDGET.md).
- [ ] Validar o resultado no [Google Rich Results Test](https://search.google.com/test/rich-results)
  depois do deploy, pra confirmar que os schemas (`Physician`, `AggregateRating`, `FAQPage`) são
  reconhecidos sem erro.
