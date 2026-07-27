# Bárbara Fontes — Estética, Saúde & Bem Estar

Site institucional premium, construído com **React + Vite + Tailwind CSS + Framer Motion**, pronto para publicar na **Vercel**.

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Como publicar na Vercel

1. Suba esta pasta para um repositório no GitHub/GitLab/Bitbucket.
2. Em [vercel.com](https://vercel.com), clique em **New Project** e importe o repositório.
3. O framework é detectado automaticamente como **Vite** — não é necessário configurar nada.
4. Clique em **Deploy**.

Ou, via linha de comando:

```bash
npm i -g vercel
vercel
```

## Imagens reais já incluídas

Estas imagens que você enviou já foram tratadas (recortadas/otimizadas) e estão em `public/images/`:

- `logo-barbara.webp` — logo oficial dourada (recortada, fundo transparente/branco preservado)
- `hero-barbara.webp` — foto da Bárbara usada no Hero
- `about-barbara.webp` — foto usada na seção "Sobre" (por ora, uma cópia da foto do Hero — **substitua por uma foto secundária real quando disponível**)

## Imagens que faltam (placeholders a substituir)

O código já referencia os nomes de arquivo abaixo. Basta adicionar os arquivos reais em `public/images/` com **exatamente esses nomes** que eles aparecerão automaticamente no site:

**Tratamentos** (`src/data/content.js` → `treatments`):
- `tratamento-limpeza-de-pele.webp`
- `tratamento-facial.webp`
- `tratamento-rejuvenescimento.webp`
- `tratamento-protocolo.webp`
- `tratamento-skincare.webp`

**Resultados / antes e depois** (`results`):
- `antes-depois-01-antes.webp` / `antes-depois-01-depois.webp`
- `antes-depois-02-antes.webp` / `antes-depois-02-depois.webp`
- `antes-depois-03-antes.webp` / `antes-depois-03-depois.webp`

**Linha de skincare** (`skincare`):
- `skincare-produto-01.webp`, `skincare-produto-02.webp`, `skincare-produto-03.webp`

**Instagram** (grade de prévia):
- `instagram-01.webp` a `instagram-04.webp` (se um arquivo não existir, o quadro some automaticamente, sem quebrar o layout)

> Dica: para manter a performance, exporte as fotos em `.webp`, lado ~1200px de largura, qualidade 80–85%.

## Onde editar os textos

Todo o conteúdo textual do site (títulos, parágrafos, depoimentos, endereço, WhatsApp, Instagram) está centralizado em:

```
src/data/content.js
```

Não é necessário mexer nos componentes para trocar textos — edite apenas esse arquivo.

### Dados a confirmar antes de publicar

Em `src/data/content.js`, no objeto `brand`, atualize:
- `whatsapp` e `whatsappDisplay` — número real da clínica
- `address` — endereço real (usado também no mapa incorporado)
- `instagram` — link real do perfil

## Estrutura do projeto

```
src/
  components/    → uma seção do site por arquivo (Hero, About, Treatments, Results...)
  data/content.js → todo o texto do site
  index.css       → estilos globais, glassmorphism, paleta
public/images/    → todas as imagens do site
```

## Identidade visual

- **Paleta:** nude/bege de fundo, branco de respiro, dourado metálico como destaque, tons escuros neutros para texto, roxo (`plum`) como detalhe sutil (~5%).
- **Tipografia:** Cormorant Garamond/Playfair Display (títulos editoriais) + Manrope (texto corrido).
- **Estilo:** minimalista, glassmorphism discreto, navbar flutuante em vidro, microanimações com Framer Motion.
- A logo dourada oficial foi preservada sem alterações de cor ou proporção — apenas recortada (trim) para remover espaço em branco excessivo ao redor.
