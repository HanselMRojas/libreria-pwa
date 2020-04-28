import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

// Persistencia
import VuexPersistence from 'vuex-persist'
import localForage from 'localforage'

Vue.use(Vuex)

// Configurar Vue Persist con localforage
localForage.config({
  name: 'libreria.hanselmrojas.com',
  version: 1,
  storeName: 'libreria.hanselmrojas.com'
})

let vuexLocal = null

vuexLocal = new VuexPersistence({
  strictMode: true,
  asyncStorage: true,
  storage: localForage,
  reducer: (state) => ({
    cuenta: state.cuenta
  })
})

export default new Vuex.Store({
  mutations: {
    RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION
  },
  modules,
  plugins: [
    vuexLocal.plugin
  ],
  strict: false
})
