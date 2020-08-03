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
        primary: '#BDFFBD',
        secondary: '#C9DCFF',
        accent: '#8c9eff',
        error: '#b71c1c',

        background: '#000000',

        principal: '#FFD5E9',

        analogoA: '#fae5e1',
        analogoB: '#E8B8B7',
        analogoD: '#E8B7E7',
        analogoD_escuro: '#695269',
        analogoE: '#F1C9FF',

        quadradoA: '#FFBDDD',
        quadradoB: '#FFEABD',
        quadradoD: '#BDFFBD',
        quadradoE: '#C9DCFF',

      },
    },
  },
})
