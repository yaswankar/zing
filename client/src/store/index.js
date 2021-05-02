import { createStore } from 'vuex'

export default createStore({
  state: {
    currentUser: null,
  },
  mutations: {
    updateUser(state, payload) {
      state.currentUser = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
