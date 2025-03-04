import presetMini from '@unocss/preset-mini'
import presetWebFonts from '@unocss/preset-web-fonts'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetMini(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
      },
    }),
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
})