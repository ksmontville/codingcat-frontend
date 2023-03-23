/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { md1, md2, md3 } from 'vuetify/blueprints'
import { aliases, md } from 'vuetify/iconsets/md'
import { mdi } from "vuetify/lib/iconsets/mdi";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md3,
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
      mdi
    }
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#F1F6F9',
          secondary: '#14274E',
          accent: '#394867',
          highlight: '#9BA4B4',
        },
      },
    },
  },
})
