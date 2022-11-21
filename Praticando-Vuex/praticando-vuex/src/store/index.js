import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    user: {
      first_name: 'Jon',
      last_name: 'Snow',
      email: 'jon@snow.com'
    }
  },
  getters: {
  },
  mutations: {
    saveFirstName(state, payload) {
      state.user.first_name = payload
    }
  },
  actions: {
    saveFistName(context, payload){
      context.commit('saveFirstName', payload)
    }
  },
  modules: {
  }
})
