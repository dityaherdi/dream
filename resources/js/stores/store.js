import Vue from 'vue'
import Vuex from 'vuex'
import document from './document'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    document
  }
})
