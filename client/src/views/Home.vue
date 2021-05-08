<template>
   <router-view />
</template>

<script>
import {ref, onBeforeMount} from 'vue';
import {useRouter} from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const name = ref('');
    const component = ref('channel');
    // const $zingService = inject('$zingService');
    const router = useRouter();
    const store = useStore();
    onBeforeMount(async() => {
      await store.dispatch('getChannels');
      if(store.state.channels.length !== 0) {
        router.push({ path: '/channels' });
        store.commit('updateSelectedChannel');
      } else router.push({ path: '/createChannel' })
    });
    return {
      name,
      component,
    }
  }
}
</script>

<style scoped>
</style>
