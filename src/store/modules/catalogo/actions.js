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
