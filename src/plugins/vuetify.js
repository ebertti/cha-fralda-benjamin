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
        title: '#e8697f',
        text: '#998195',
        button: '#F7D88C',
        button_plus: '#BDE7BD',
        button_minus: '#FFD5D4',
        background: '#f8f4f0',
        secondary: '#A24A59',
        nubank: '#830AD1',
        picpay: '#00C36F',
        g100: '#303030',
      },
    },
  },
})
