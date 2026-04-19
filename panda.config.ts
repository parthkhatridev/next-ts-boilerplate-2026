import { defineConfig } from '@pandacss/dev';
import { conditions } from '@/theme/conditions';
import { slotRecipes, recipes } from '@/theme/recipes';
import { animationStyles } from '@/theme/animation-styles';
import { zIndex } from '@/theme/tokens/z-index';
import { shadows } from '@/theme/tokens/shadows';
import { durations } from '@/theme/tokens/durations';
import { colors } from '@/theme/tokens/colors';
import { textStyles } from '@/theme/text-styles';
import { layerStyles } from '@/theme/layer-styles';
import { keyframes } from '@/theme/keyframes';
import { green } from '@/theme/colors/green';
import { red } from '@/theme/colors/red';
import { slate } from '@/theme/colors/slate';
import { blue } from '@/theme/colors/blue';

export default defineConfig({
  globalCss: {
    extend: {
      '*': {
        '--global-color-border': 'colors.border',
        '--global-color-placeholder': 'colors.fg.subtle',
        '--global-color-selection': 'colors.colorPalette.subtle.bg',
        '--global-color-focus-ring': 'colors.colorPalette.solid.bg',
      },
      html: {
        scrollBehavior: 'smooth',
        colorPalette: 'gray',
      },
      body: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        textRendering: 'optimizeLegibility',
        background: 'canvas',
        color: 'fg.default',
      },
    },
  },

  theme: {
    extend: {
      tokens: {
        colors,
        durations,
        zIndex,
        fonts: {
          sans: { value: 'var(--font-roboto), system-ui, sans-serif' },
        },
      },

      semanticTokens: {
        colors: {
          fg: {
            default: {
              value: {
                _light: '{colors.gray.12}',
                _dark: '{colors.gray.12}',
              },
            },

            muted: {
              value: {
                _light: '{colors.gray.11}',
                _dark: '{colors.gray.11}',
              },
            },

            subtle: {
              value: {
                _light: '{colors.gray.10}',
                _dark: '{colors.gray.10}',
              },
            },
          },

          border: {
            value: {
              _light: '{colors.gray.4}',
              _dark: '{colors.gray.4}',
            },
          },

          error: {
            value: {
              _light: '{colors.red.9}',
              _dark: '{colors.red.9}',
            },
          },

          blue,
          gray: slate,
          red,
          green,
        },

        shadows,

        radii: {
          l1: {
            value: '{radii.xs}',
          },

          l2: {
            value: '{radii.sm}',
          },

          l3: {
            value: '{radii.md}',
          },
        },
      },

      animationStyles,
      recipes,
      slotRecipes,
      keyframes,
      layerStyles,
      textStyles,
    },
  },

  preflight: true,
  jsxFramework: 'react',
  include: ['./src/**/*.{ts,tsx}'],
  exclude: [],
  outdir: 'styled-system',
  conditions,
  plugins: [
    {
      name: 'Remove Panda Preset Colors',
      hooks: {
        'preset:resolved': ({ utils, preset, name }) =>
          name === '@pandacss/preset-panda'
            ? utils.omit(preset, [
                'theme.tokens.colors',
                'theme.semanticTokens.colors',
              ])
            : preset,
      },
    },
  ],
});
