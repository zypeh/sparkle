import Vue from 'vue'
import Vuex from 'vuex'
import { fecthItems, fechIdsByType, fetchUser } from './app'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      itemsPerPage: 20,
      lists: {
        new: [],
        show: []
      }
    },

    actions: {

    },

    mutations: {

    },

    getters: {

    },
})

export default store
