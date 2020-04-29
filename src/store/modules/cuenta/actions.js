import API from '../../api'
import router from '../../../router'
import { errorHandler } from '../../utils'

/**
 * Login
 *
 * Esta llamada asincrona devuelve el resultado de la promesa
 * de llamada al api para autenticar el usuario.
 */
export async function login ({ commit }, payload = {}) {
  try {
    const { redireccion, ...credenciales } = payload
    const { data } = await API.loginCuenta(credenciales)
    commit('SETEAR_USUARIO', {
      cuenta: data.datos,
      token: data.token
    })

    if (redireccion) {
      router.push('/')
    } else {
      commit('SWITCH_MODAL')
    }

    commit('ui/CAMBIAR_SNACK', {
      show: true,
      color: 'green',
      message: `Bienvenido ${data.datos.nickname}!`
    }, { root: true })
  } catch (error) {
    errorHandler(error, commit, {
      show: true,
      right: true,
      bottom: true,
      errors: {
        404: 'Cuenta no encontrada!'
      }
    })
  }
}

/**
 * CrearCuenta
 *
 * Esta llamada asincrona devuelve el resultado de la promesa
 * de llamada al api para autenticar el nuevo usuario.
 */
export async function crearCuenta ({ commit }, payload = {}) {
  try {
    const { redireccion, ...credenciales } = payload
    const { data } = await API.crearCuenta(credenciales)
    data.datos.codigoReferido = data.referido
    commit('SETEAR_USUARIO', {
      cuenta: data.datos,
      token: data.token
    })

    if (redireccion) {
      router.push('/')
    } else {
      commit('SWITCH_MODAL')
    }

    commit('ui/CAMBIAR_SNACK', {
      show: true,
      color: 'green',
      message: `Bienvenido ${data.datos.nickname}!`
    }, { root: true })
  } catch (error) {
    errorHandler(error, commit, {
      show: true,
      right: true,
      bottom: true,
      errors: {
        400: 'La cuenta ya existe, comprueba que correo y nickname sean únicos',
        404: 'Cuenta no encontrada!'
      }
    })
  }
}

/**
 * cerrarSesion
 * Esta accion ejecuta la mutación para dejar el store por defecto
 * para la session.
 */
export async function cerrarSesion ({ commit }) {
  commit('SETEAR_USUARIO_DEFAULT')
  commit('ui/CAMBIAR_DRAWER', {}, { root: true })
}

export function switchModal ({ commit }) {
  commit('SWITCH_MODAL')
}
