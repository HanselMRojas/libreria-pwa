import * as actions from './actions'

const defaultState = {
  libros: [],
  autores: [],
  libro: {
    titulo: '',
    subtitulo: '',
    fechaPublicacion: '',
    autores: [],
    numeroPaginas: 0
  },
  autor: {
    nombre: '',
    descripcion: ''
  },
  modal: {
    titulo: 'Crear libro',
    esAbierto: false,
    esEdicion: false,
    vista: 1
  }
}

const mutations = {
  /**
   * Listar Libros
   * Esta mutación recibe un nuevo array de libros
   * y reemplza el array existente en el estado totalmente.
   *
   * @param {Observer} state estado actual del módulo
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
   * @param {Observer} state estado actual del módulo
   * @param {Array} libros nuevo array de libros
   */
  CONCATENAR_LIBROS (state, libros = []) {
    state.libros = Array.from(state.libros).concat(libros)
  },
  /**
   * Setear detalle libro
   * Esta mutacion reemplaza el actual detalle de autor
   * con uno nuevo.
   *
   * @param {Observer} state estado actual del módulo
   * @param {Object} libro nuevo objeto de libro
   */
  SETEAR_DETALLE_LIBRO (state, libro = {}) {
    state.libro = libro
  },
  /**
   * Cambiar detalle libro
   * Esta mutacion hacer merge de campos nuevos con los actuales.
   * Cambiando únicamente los campos deseados en la edición del detalle.
   *
   * @param {Observer} state estado actual del módulo
   * @param {Object} campos nuevo objeto de libro
   */
  CAMBIAR_DETALLE_LIBRO (state, campos = {}) {
    state.libro = { ...state.libro, ...campos }
  },
  /**
   * Detalle Default Libro
   * Esta mutacion vuelve al detalle de libro en su
   * estado por defecto
   *
   * @param {Observer} state estado actual del módulo
   */
  DETALLE_LIBRO_DEFAULT (state, campos = {}) {
    state.libro = defaultState.libro
  },
  /**
   * Listar Autores
   * Esta mutación recibe un nuevo array de autores
   * y reemplza el array existente en el estado totalmente.
   *
   * @param {Observer} state estado actual del módulo
   * @param {Array} autores nuevo array de autores
   */
  LISTAR_AUTORES (state, autores = []) {
    state.autores = autores
  },
  /**
   * Concatenar Autores
   * Esta mutacion recibe un array nuevo de autores y lo concatena
   * con el array existente en el estado.
   *
   * @param {Observer} state estado actual del módulo
   * @param {Array} autores nuevo array de autores
   */
  CONCATENAR_AUTORES (state, autores = []) {
    state.autores = Array.from(state.autores).concat(autores)
  },
  /**
   * Setear detalle Autor
   * Esta mutacion reemplaza el actual detalle de autor
   * con uno nuevo.
   *
   * @param {Observer} state estado actual del módulo
   * @param {Object} autor nuevo objeto de autor
   */
  SETEAR_DETALLE_AUTOR (state, autor = {}) {
    state.autor = autor
  },
  /**
   * Cambiar detalle autor
   * Esta mutacion hacer merge de campos nuevos con los actuales.
   * Cambiando únicamente los campos deseados en la edición del detalle.
   *
   * @param {Observer} state estado actual del módulo
   * @param {Object} campos nuevo objeto de autor
   */
  CAMBIAR_DETALLE_AUTOR (state, campos = {}) {
    state.autor = { ...state.autor, ...campos }
  },
  /**
   * Cambiar Estado Modal
   * Esta mutacion recibe un nuevo objeto de modal.
   * Y lo mezcla con los datos actuales.
   *
   * @param {Observer} state estado actual del módulo
   * @param {Object} modal nuevo array de libros
   */
  CAMBIAR_ESTADO_MODAL (state, modal = {}) {
    state.modal = { ...state.modal, ...modal }
  },
  /**
   * Setear Modal Default
   * Esta mutación permite volver a dejar el estado
   * del modal a su estado por defecto.
   *
   * @param {Observer} state estado actual del módulo
   */
  SETEAR_MODAL_DEFAULT (state) {
    state.modal = defaultState.modal
  }
}

export default {
  actions,
  mutations,
  state: defaultState,
  namespaced: true
}
