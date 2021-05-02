<template>
  <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="login">
          <input type="text" placeholder="Email" v-model="email"/>
          <input type="password" placeholder="Password" v-model="password"/>
          <input type="submit" value="login">
          <p>Need an account? <router-link to="/register">Register Here</router-link></p>
      </form>
  </div>
</template>

<script>
import {ref} from 'vue';
import firebase from 'firebase';

export default {
    setup() {
        const email = ref('');
        const password = ref('');

        const login = () => {
            firebase.auth().signInWithEmailAndPassword(email.value.trim(), password.value).then(data =>
                console.log(data)).catch(err => alert(err.message));
            }
        
        return {
            login,
            email,
            password
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    text-align: center;
}
</style>