import Vue from 'vue'
import App from './App.vue'
import contadores from './contadores.vue'

Vue.config.productionTip = false
Vue.component('app-contadores', contadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
