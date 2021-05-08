import { createStore } from 'vuex'
import ChannelService from '../services/channelService'

export default createStore({
  state: {
    currentUser: null,
    channels: [],
    selectedChannel: ''
  },
  mutations: {
    updateUser(state, payload) {
      state.currentUser = payload;
    },
    updateChannels(state, payload) {
      state.channels = payload;
    },
    updateSelectedChannel(state, payload) {
      if(payload) state.selectedChannel = payload;
      else state.selectedChannel = state.channels[0].channelName;
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
