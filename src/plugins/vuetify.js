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
        title: '#E8697F',
        text: '#998195',
        button: '#F7D88C',
        background: '#F8F4F0',
        secondary: '#A24A59',
        nubank: '#830AD1',
        picpay: '#00C36F',
        g100: '#303030',
      },
    },
  },
})
