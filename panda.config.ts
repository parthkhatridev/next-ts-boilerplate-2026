import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          // Brand colors
          brand: {
            50: { value: '#eff6ff' },
            100: { value: '#dbeafe' },
            200: { value: '#bfdbfe' },
            300: { value: '#93c5fd' },
            400: { value: '#60a5fa' },
            500: { value: '#3b82f6' },
            600: { value: '#2563eb' },
            700: { value: '#1d4ed8' },
            800: { value: '#1e40af' },
            900: { value: '#1e3a8a' },
            950: { value: '#172554' },
          },
        },
        fonts: {
          sans: { value: 'var(--font-roboto), system-ui, sans-serif' },
        },
        sizes: {
          container: {
            sm: { value: '640px' },
            md: { value: '768px' },
            lg: { value: '1024px' },
            xl: { value: '1280px' },
          },
        },
      },
      semanticTokens: {
        colors: {
          // Adaptive colors for light/dark mode
          bg: {
            DEFAULT: {
              value: { base: '{colors.white}', _dark: '{colors.neutral.950}' },
            },
            subtle: {
              value: {
                base: '{colors.neutral.50}',
                _dark: '{colors.neutral.900}',
              },
            },
            muted: {
              value: {
                base: '{colors.neutral.100}',
                _dark: '{colors.neutral.800}',
              },
            },
          },
          fg: {
            DEFAULT: {
              value: {
                base: '{colors.neutral.950}',
                _dark: '{colors.neutral.50}',
              },
            },
            muted: {
              value: {
                base: '{colors.neutral.500}',
                _dark: '{colors.neutral.400}',
              },
            },
          },
          border: {
            DEFAULT: {
              value: {
                base: '{colors.neutral.200}',
                _dark: '{colors.neutral.800}',
              },
            },
          },
          accent: {
            DEFAULT: {
              value: {
                base: '{colors.brand.600}',
                _dark: '{colors.brand.400}',
              },
            },
            fg: {
              value: { base: '{colors.white}', _dark: '{colors.brand.950}' },
            },
          },
          destructive: {
            DEFAULT: {
              value: {
                base: '{colors.red.600}',
                _dark: '{colors.red.400}',
              },
            },
            fg: {
              value: { base: '{colors.white}', _dark: '{colors.red.950}' },
            },
          },
        },
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        slideUp: {
          from: { transform: 'translateY(8px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          from: { transform: 'translateY(-8px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },

  // Global CSS styles
  globalCss: {
    html: {
      scrollBehavior: 'smooth',
    },
  },

  // Conditions for dark mode and responsive
  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
  },

  // Output directory for generated files
  outdir: 'styled-system',

  // Use JSX style props
  jsxFramework: 'react',
});
