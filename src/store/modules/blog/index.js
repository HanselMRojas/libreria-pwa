import * as actions from './actions'

const defaultState = {
  posts: []
}

const mutations = {
  SETEAR_PUBLICACIONES (state, datos = []) {
    state.posts = datos
  }
}

export default {
  actions,
  mutations,
  state: defaultState,
  namespaced: true
}
