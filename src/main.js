import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/dates'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify, {
  theme: {
    primary: '#D32F2F',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDIP7xzLAfBCilkFC-UuzYHoei4szcBQ3c',
      authDomain: 'devmeetup-47ab7.firebaseapp.com',
      databaseURL: 'https://devmeetup-47ab7.firebaseio.com',
      projectId: 'devmeetup-47ab7',
      storageBucket: 'devmeetup-47ab7.appspot.com'
    })
  }
})
