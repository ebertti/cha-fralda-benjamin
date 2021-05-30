import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import pt from 'vuetify/es5/locale/pt'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: {pt},
    current: 'pt',
  },
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    options: {
      variations: true,
    },
    themes: {
      light: {
        primary: '#5d69bf',
        texto: '#C5CAE9',
        texto2: '#C5CAE9',
        secondary: '#C5CAE9',
        accent: '#C5CAE9',
        error: '#DEFFAC',

        primaryC : "#C5CAE9",
        primaryD : "#FF7BB9",
        primaryE : "#FE4EA1",

        secondaryA : "#EAAFFF",	/* Main Secondary color (1) */
        secondaryC : "#e9ebf1",
        secondaryD : "#DE80FF",
        secondaryE : "#11c76f",

        secondary2A : "#FFB5AC",	/* Main Secondary color (2) */
        secondary2C : "#C5CAE9",
        secondary2D : "#FF8A7B",
        secondary2E : "#FF634E",

        complementA : "#DEFFAC",	/* Main Complement color */
        complementC : "#F7FFEB",
        complementD : "#CBFF7B",
        complementE : "#B9FF4E",
      },
    },
  },
})
