import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})

/**
 * Example for axios interceptors.
 */
axios.interceptors.request.use((config) => {
  console.log(`================ Fire end point: ${config.url}`)
  return config
}, error => Promise.reject(error))
