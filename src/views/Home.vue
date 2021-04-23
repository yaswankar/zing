<template>
 <!-- <main-layout> -->
  <!-- <template v-slot:header></template> -->
  <div class="home">
    <h1>Welcome to Zing</h1>
    <br>
    <button class="logout" @click="logout">Logout</button>
  </div>
 <!-- </main-layout> -->
</template>

<script>
// import MainLayout from '../layouts/MainLayout.vue'
import {ref, onBeforeMount} from 'vue';
import firebase from 'firebase';

export default {
  //  components: {
  //   MainLayout
  // },
  setup() {
    const name = ref('');

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if(user) name.value = user.email.split('@')[0]
    });

    const logout = () => {
      firebase .auth().signOut().then(() => console.log('Signed out'))
      .catch(err=> alert(err.message));
    }

    return {
      logout,
      name
    }
  }
}
</script>
