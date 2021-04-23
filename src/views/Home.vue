<template>
 <main-layout>
   <component v-bind:is="component"/>
 </main-layout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue'
import CreateChannel from '@/components/CreateChannel.vue'
import {ref, onBeforeMount} from 'vue';
import firebase from 'firebase';

export default {
   components: {
    MainLayout,
    CreateChannel
  },
  setup() {
    const name = ref('');
    const component = ref('create-channel');
    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if(user) name.value = user.email.split('@')[0]
    });

    return {
      name,
      component
    }
  }
}
</script>

<style scoped>
</style>
