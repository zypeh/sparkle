import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

import VueAuthentice from 'vue-authenticate'

if (process.env.VUE_ENV === "client") {
  const VueAwesomeSwiper = require('vue-awesome-swiper/ssr')
  Vue.use(VueAwesomeSwiper)
}

// Middleware
Vue.use(VueAuthentice, {
  baseUrl: 'http://localhost:3000', // API domain

  providers: {
    facebook: { clientId: 'abc', redirectUri: '' },
    twitter: { clientId: 'def', redirectUri: 'something'},
    google: { clientId: 'ghi', redirectUri: 'something'},
  }
})

// Sync `vue-router`'s state with vuex's store, this is to
// allow us to manipulate change of view via status.
sync(store, router)

const app = new Vue({
    router,
    store,
    render: h => h(App)
})

// expose the app, so we can bootstrap depends on the NODE_ENV
export { app, router, store }
