import Vue from 'vue'
import App from './App.vue'
import ContadoresVue from './ContadoresVue.vue'

Vue.config.productionTip = false
Vue.component('app-contadores', ContadoresVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
