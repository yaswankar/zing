import { createStore } from 'vuex'

export default createStore({
  state: {
    currentUser: null,
  },
  mutations: {
    updateUser(state, payload) {
      console.log('updating');
      state.currentUser = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
