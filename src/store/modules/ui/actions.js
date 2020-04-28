import API from '../../api'
import { errorHandler } from '../../utils'

/**
 * Listar Ciudades
 */
export async function listarCiudades ({ commit }, query = {}) {
  try {
    let { data } = await API.leer('app/ciudades', query)
    commit('CONCATENAR_CIUDADES', data.ciudades)
  } catch (error) {
    errorHandler(error, commit, {
      show: true,
      right: true,
      bottom: true,
      color: 'error',
      errors: {
        '404': 'Cotización no encontrada'
      }
    })
  }
}

export function cambiarEstadoSnack ({ commit }, snack = {}) {
  commit('CAMBIAR_SNACK', snack)
}

export function cambiarDrawer ({ commit }) {
  commit('CAMBIAR_DRAWER')
}
