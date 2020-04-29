import * as actions from './actions'

const defaultState = {
  drawer: false,
  loader: false,
  ciudades: [],
  snack: {
    show: false,
    bottom: false,
    left: false,
    top: false,
    right: false,
    color: 'green',
    timeout: 10000,
    message: ''
  }
}

const mutations = {
  LISTAR_CIUDADES (state, ciudades = []) {
    state.ciudades = ciudades
  },
  CONCATENAR_CIUDADES (state, ciudades) {
    state.ciudades = Array.from(state.ciudades).concat(ciudades)
  },
  CAMBIAR_DRAWER (state) {
    state.drawer = !state.drawer
  },
  CAMBIAR_SNACK (state, snack = {}) {
    state.snack = {
      ...state.snack,
      ...snack
    }
  }
}

export default {
  actions,
  mutations,
  state: defaultState,
  namespaced: true
}
