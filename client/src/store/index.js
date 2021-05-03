import { createStore } from 'vuex'
import ChannelService from '../services/channelService'

export default createStore({
  state: {
    currentUser: null,
    channels: [],
  },
  mutations: {
    updateUser(state, payload) {
      state.currentUser = payload;
    },
    updateChannels(state, payload) {
      state.channels = payload;
    }
  },
  actions: {
    async getChannels({commit}) {
      const channels = await ChannelService.getChannels();
      commit('updateChannels', channels);
    }
  },
  modules: {
  }
})
