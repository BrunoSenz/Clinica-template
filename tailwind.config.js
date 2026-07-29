/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ==========================================
        // 🎨 PAINEL DE CONTROLE DE CORES DO TEMPLATE
        // Altere os códigos HEX (#) abaixo para mudar a identidade visual de todo o site.
        // ==========================================

        // 1. TONS DE PELE / FUNDO (Cores bases para seções e fundos)
        nude: {
          DEFAULT: '#F2E7DA', // Fundo principal
          light: '#FAF5EE',   // Fundo mais claro
          dark: '#E6D5C0',    // Fundo mais escuro/sombreado
        },
        cream: '#FFFEFC',     // Branco/creme para fundos muito claros

        // 2. COR DE DESTAQUE PRINCIPAL (Botões, ícones, detalhes)
        gold: {
          light: '#E3C88F',   // Destaque claro
          DEFAULT: '#B8934C', // Cor principal de destaque (O "Dourado")
          dark: '#8C6B2E',    // Destaque escuro (Para efeito ao passar o mouse)
        },

        // 3. CORES DE TEXTO (Para contraste e leitura)
        ink: {
          DEFAULT: '#2B2420', // Texto principal (Títulos - quase preto)
          soft: '#5C5148',    // Texto secundário (Parágrafos - cinza escuro)
          faint: '#8A7F73',   // Texto apagado (Detalhes sutis)
        },

        // 4. COR DE APOIO (Opcional, para detalhes secundários da clínica)
        plum: {
          DEFAULT: '#3E2440',
          soft: '#5B3B60',
        },
        // ==========================================
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        editorial: ['"Playfair Display"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      boxShadow: {
        // ATENÇÃO: Se mudar a cor "ink" ou "gold" acima, lembre-se de atualizar os códigos HEX aqui também!
        soft: '0 20px 60px -20px rgba(43, 36, 32, 0.25)',     // Usa a cor ink (#2B2420)
        glass: '0 8px 32px rgba(184, 147, 76, 0.15)',         // Usa a cor gold (#B8934C)
        gold: '0 10px 40px -10px rgba(184, 147, 76, 0.45)',   // Usa a cor gold (#B8934C)
      },
      backgroundImage: {
        // ATENÇÃO: Se mudar "gold" ou "nude" acima, mude os códigos HEX dos degradês abaixo:
        'gold-gradient': 'linear-gradient(135deg, #E3C88F 0%, #B8934C 50%, #8C6B2E 100%)',
        'nude-radial': 'radial-gradient(circle at 30% 20%, #FAF5EE 0%, #F2E7DA 60%, #E6D5C0 100%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'fade-up': 'fadeUp 0.9s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}