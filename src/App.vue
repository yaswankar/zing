<template>
  <router-view/>
</template>

<script>
import {onBeforeMount, ref} from 'vue';
import { useRouter} from 'vue-router';
import firebase from 'firebase';
import { useStore } from 'vuex';

export default {
  setup() {
    const router = useRouter();
    // const route = useRoute();
    const store = useStore();
    const name = ref('');
    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if(!user) {
          router.replace('/login')
        } else {
            name.value = user.email.split('@')[0];
            store.commit('updateUser', name.value);
            console.log(user);
            router.replace('/');
        }
      })
    })
  }
}
</script>
<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
