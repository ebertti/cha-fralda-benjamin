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
        primary: '#FFACD3',
        texto: '#ab738d',
        texto2: '#7f757a',
        secondary: '#EAAFFF',
        accent: '#FFB5AC',
        error: '#DEFFAC',
        
        primaryC : "#FFEBF5",
        primaryD : "#FF7BB9",
        primaryE : "#FE4EA1",
        
        secondaryA : "#EAAFFF",	/* Main Secondary color (1) */
        secondaryC : "#FAECFF",
        secondaryD : "#DE80FF",
        secondaryE : "#D154FD",
        
        secondary2A : "#FFB5AC",	/* Main Secondary color (2) */
        secondary2C : "#FFEEEB",
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
