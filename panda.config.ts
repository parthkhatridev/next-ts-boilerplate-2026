import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        fonts: {
          sans: { value: 'var(--font-roboto), system-ui, sans-serif' },
        },
      },
    },
  },
  globalCss: {
    html: {
      scrollBehavior: 'smooth',
      WebkitTextSizeAdjust: '100%',
    },
    body: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
      overflowWrap: 'break-word',
      WebkitTapHighlightColor: 'transparent',
    },
    '@media (prefers-reduced-motion: reduce)': {
      '*, *::before, *::after': {
        animationDuration: '0.01ms !important',
        animationIterationCount: '1 !important',
        transitionDuration: '0.01ms !important',
        scrollBehavior: 'auto !important',
      },
    },
  },
  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
  },
  outdir: 'styled-system',
  jsxFramework: 'react',
});
