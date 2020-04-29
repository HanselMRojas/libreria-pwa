import API from '../../api'
import { errorHandler } from '../../utils'

/**
 * Listar Libros
 * Esta action llama al API para listar libros.
 *
 * @url /v1/biblioteca/libros
 * @method GET
 */
export async function listarLibros ({ commit }, query = {}) {
  try {
    const { data } = await API.leer('biblioteca/libros', query)
    commit('LISTAR_LIBROS', data.libros)
  } catch (error) {
    errorHandler(error, commit, {
      show: true,
      right: true,
      bottom: true,
      color: 'error',
      errors: {}
    })
  }
}

/**
 * Crear Libro
 * Esta action llama al API para crear libros.
 *
 * @url /v1/biblioteca/libros
 * @method POST
 */
export async function crearLibro ({ commit, rootState }, libro = {}) {
  try {
    const { token } = rootState.cuenta
    const { data } = await API.crear('biblioteca/libros', libro, {
      Authorization: `Barear ${token}`
    })

    commit('CONCATENAR_LIBROS', data.libro)
    commit('SETEAR_MODAL_DEFAULT')
    commit('DETALLE_LIBRO_DEFAULT')
    commit('ui/CAMBIAR_SNACK', {
      show: true,
      message: 'Libro creado correctamente'
    }, { root: true })
  } catch (error) {
    errorHandler(error, commit, {
      show: true,
      right: true,
      bottom: true,
      color: 'error',
      errors: {}
    })
  }
}

/**
 * Listar Autores
 * Esta action llama al API para listar libros.
 *
 * @url /v1/biblioteca/autores
 * @method GET
 */
export async function listarAutores ({ commit }, query = {}) {
  try {
    const { data } = await API.leer('biblioteca/autores', query)
    commit('LISTAR_AUTORES', data.autores)
  } catch (error) {
    errorHandler(error, commit, {
      show: true,
      right: true,
      bottom: true,
      color: 'error',
      errors: {}
    })
  }
}

export function cambiarEstadoModal ({ commit }, modal = {}) {
  commit('CAMBIAR_ESTADO_MODAL', modal)
}

export function cambiarEstadoDefault ({ commit }, modal = {}) {
  commit('SETEAR_MODAL_DEFAULT', modal)
}

export function cambiarDetalleLibro ({ commit }, campos = {}) {
  commit('CAMBIAR_DETALLE_LIBRO', campos)
}
