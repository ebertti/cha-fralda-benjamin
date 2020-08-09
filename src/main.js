import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.filter('moeda', (x) => x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
