import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import * as firebase from 'firebase';
import firebase from 'firebase/app'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyDBAaFrpcaDDncyC5k9ryy2shoRAvCSC_I",
    authDomain: "vue-firebase-auth-c7d82.firebaseapp.com",
    databaseURL: "https://vue-firebase-auth-c7d82.firebaseio.com",
    projectId: "vue-firebase-auth-c7d82",
    storageBucket: "vue-firebase-auth-c7d82.appspot.com",
    messagingSenderId: "485718337071",
    appId: "1:485718337071:web:2c40b68cc1b3d3a2cc88da",
    measurementId: "G-DFH221H3MH"
  };

  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
