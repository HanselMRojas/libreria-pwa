import * as actions from './actions'

const defaultState = {
  libros: [],
  detalle: {
    titulo: '',
    subtitulo: '',
    fechaPublicacion: '',
    autores: [],
    numeroPaginas: 0
  }
}

const mutations = {
  /**
   * Listar Libros
   * Esta mutación recibe un nuevo array de libros
   * y reemplza el array existente en el estado totalmente.
   *
   * @param {observer} state estado actual del módulo
   * @param {Array} libros nuevo array de libros
   */
  LISTAR_LIBROS (state, libros = []) {
    state.libros = libros
  },
  /**
   * Concatenar Libros
   * Esta mutacion recibe un array nuevo de libros y lo concatena
   * con el array existente en el estado.
   *
   * @param {observer} state estado actual del módulo
   * @param {Array} libros nuevo array de libros
   */
  CONCATENAR_LIBROS (state, libros = []) {
    state.libros = Array.from(state.libros).concat(libros)
  },
  /**
   * Setear detalle libro
   * Esta mutacion recibe un array nuevo de libros y lo concatena
   * con el array existente en el estado.
   *
   * @param {observer} state estado actual del módulo
   * @param {Array} libros nuevo array de libros
   */
  SETEAR_DETALLE_LIBRO (state, libro = {}) {
    state.detalle = libro
  }
}

export default {
  actions,
  mutations,
  state: defaultState,
  namespaced: true
}
