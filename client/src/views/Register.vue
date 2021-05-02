<template>
  <div class="register">
      <h1>Register</h1>
      <form @submit.prevent="Register">
          <input type="text" placeholder="Email" v-model="email"/>
          <input type="password" placeholder="Password" v-model="password"/>
          <input type="submit" value="Register">
          <p>Have an account? <router-link to="/login">Login Here</router-link></p>
      </form>
  </div>
</template>

<script>
import firebase from 'firebase';
import {ref, inject} from 'vue';

export default {
    setup() {
        const email = ref('');
        const password = ref('');
        const $zingService = inject('$zingService');
        const Register = () => {
            console.log('email', email);
            firebase.auth().createUserWithEmailAndPassword(email.value.trim(), password.value)
            .then(async () => {
                await $zingService.User.createUser({userName: email.value})
            })
            .catch(err => alert(err.message));
        }
        return {
            Register,
            email,
            password
        }
    }
}
</script>

<style>

</style>