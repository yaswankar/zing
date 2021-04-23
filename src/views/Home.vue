<template>
 <main-layout>
   <component v-bind:is="component"/>
 </main-layout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue'
import CreateChannel from '@/components/CreateChannel.vue'
import {ref} from 'vue';
// import firebase from 'firebase';
// import {useStore} from 'vuex';

export default {
   components: {
    MainLayout,
    CreateChannel
  },
  setup() {
    const name = ref('');
    const component = ref('create-channel');
    // const store = useStore(); 
    // onBeforeMount(() => {
     
    // });
    return {
      name,
      component,
    }
  }
}
</script>

<style scoped>
</style>
