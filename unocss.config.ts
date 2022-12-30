import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetForms } from '@julr/unocss-preset-forms'

export default defineConfig({
  theme: {
    colors: {
      'primary': '#FC4D0D',
      'redorange': {
        100: '#FFE2D7',
        200: '#FEC4AE',
        300: '#FEA686',
        400: '#FD885D',
        500: '#FD6A35',
        600: '#FC4D0D',
        700: '#DE3D02',
        800: '#B63202',
        900: '#A22C01',
      },
      'secondary': '#152242',
      'navyblue': {
        100: '#839CD8',
        200: ' #6484CE',
        300: '#456BC4',
        400: '#3659AB',
        500: '#2C498C',
        600: '#22386D',
        700: '#152242',
        800: '#0F182F',
      },
      'grey': '#757780',
      'light-grey': ' #E5E5E5',
    },
  },
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetForms(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
