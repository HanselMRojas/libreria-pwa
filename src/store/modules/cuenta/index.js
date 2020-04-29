import * as actions from './actions'

const defaultState = {
  detail: {
    id: '',
    correo: '',
    rol: '',
    nickname: ''
  },
  token: '',
  modal: false
}

const mutations = {
  /**
   * SETEAR_USUARIO
   * Mutación que cambia el estado de autenticación de un usuario
   * al recibir
   * @param {*} state estado actual
   * @param {*} data nuevos datos de la session
   */
  SETEAR_USUARIO (state, { token, cuenta, referido }) {
    state.token = token
    state.detail = cuenta
  },

  /**
   * SET AUTH DEFAULT
   * Mutación que deja esta parte del store por defecto
   * @param {*} state
   */
  SETEAR_USUARIO_DEFAULT (state) {
    state.detail = { ...defaultState.detail }
    state.token = ''
  },

  /**
   * SET AUTH DEFAULT
   * Mutación que deja esta parte del store por defecto
   * @param {*} state
   */
  SWITCH_MODAL (state) {
    state.modal = !state.modal
  }
}

export default {
  actions,
  mutations,
  state: defaultState,
  namespaced: true
}
