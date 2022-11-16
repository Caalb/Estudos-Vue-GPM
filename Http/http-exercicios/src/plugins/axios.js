import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-udem-default-rtdb.firebaseio.com/'

Vue.use({
  install(Vue) {
    // Vue.prototype.$http = axios
    Vue.prototype.$http = axios.create({
      baseURL: 'https://curso-vue-udem-default-rtdb.firebaseio.com/'
    })
  }
})