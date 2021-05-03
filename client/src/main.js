import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';
import zingService from './services/zingService';

import './styles/global.scss';

const firebaseConfig = {
    apiKey: "AIzaSyB1e9fKVguI4tryfKOBwdYUzMDWB4tAlSs",
    authDomain: "vue-chat-975c2.firebaseapp.com",
    projectId: "vue-chat-975c2",
    storageBucket: "vue-chat-975c2.appspot.com",
    messagingSenderId: "853802741268",
    appId: "1:853802741268:web:2ff2798ae0a2a0c8148101"
  };

  firebase.initializeApp(firebaseConfig);


createApp(App).use(store).use(router).provide('$zingService', zingService).mount('#app')

