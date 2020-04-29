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
      color: 'green',
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
 * Actualizar Libro
 * Esta action llama al API para actualizar un libro dado su ID.
 *
 * @url /v1/biblioteca/libros/:libroId
 * @method POST
 */
export async function actualizarLibro ({ commit, rootState }, libro = {}) {
  try {
    const { token } = rootState.cuenta
    await API.actualizar(libro.id, 'biblioteca/libros', libro, {
      Authorization: `Barear ${token}`
    })
    /**
     * Para actualizar la lista de libros actual con los
     * cambios realizados en el libro en contexto opté
     * por devolver una nueva lista, a la forma de programación
     * funcional. Pienso que es una solución elegante.
     */
    const listado = rootState.catalogo.libros.map(lib => {
      const esLibroIgual = lib.id === libro.id
      return esLibroIgual ? libro : lib
    })

    commit('LISTAR_LIBROS', listado)
    commit('SETEAR_MODAL_DEFAULT')
    commit('DETALLE_LIBRO_DEFAULT')
    commit('ui/CAMBIAR_SNACK', {
      show: true,
      color: 'green',
      message: `${libro.titulo} actualizado correctamente`
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
 * Actualizar Couners Libro
 * Esta action llama al API para actualizar un libro dado su ID.
 *
 * @url /v1/biblioteca/libros/:libroId
 * @method POST
 */
export async function actualizarLibroCounters ({ commit, rootState }, libro = {}) {
  try {
    const { token } = rootState.cuenta
    const { data } = await API.actualizar(`${libro.id}/counters`, 'biblioteca/libros', libro, {
      Authorization: `Barear ${token}`
    })
    /**
     * Para actualizar la lista de libros actual con los
     * cambios realizados en el libro en contexto opté
     * por devolver una nueva lista, a la forma de programación
     * funcional. Pienso que es una solución elegante.
     */
    const listado = rootState.catalogo.libros.map(lib => {
      const esLibroIgual = lib.id === libro.id
      return esLibroIgual ? data.libro : lib
    })

    commit('LISTAR_LIBROS', listado)
    commit('SETEAR_MODAL_DEFAULT')
    commit('DETALLE_LIBRO_DEFAULT')
    commit('ui/CAMBIAR_SNACK', {
      show: true,
      color: 'green',
      message: 'Actualizado correctamente'
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

/**
 * Crear autores
 * Esta action llama al API para crear autores.
 *
 * @url /v1/biblioteca/autores
 * @method POST
 */
export async function crearAutor ({ commit, rootState }, autor = {}) {
  try {
    const { token } = rootState.cuenta
    const { data } = await API.crear('biblioteca/autores', autor, {
      Authorization: `Barear ${token}`
    })

    commit('CONCATENAR_AUTORES', data.autor)
    commit('CAMBIAR_ESTADO_MODAL', { vista: 2, titulo: 'Crear libro (Admin)' })
    commit('DETALLE_AUTOR_DEFAULT')
    commit('ui/CAMBIAR_SNACK', {
      show: true,
      color: 'green',
      message: 'Autor creado correctamente'
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

export function cambiarEstadoModal ({ commit }, modal = {}) {
  commit('CAMBIAR_ESTADO_MODAL', modal)
}

export function cambiarEstadoDefault ({ commit }, modal = {}) {
  commit('SETEAR_MODAL_DEFAULT', modal)
}

export function cambiarDetalleLibro ({ commit }, campos = {}) {
  commit('CAMBIAR_DETALLE_LIBRO', campos)
}

export function cambiarDetalleAutor ({ commit }, campos = {}) {
  commit('CAMBIAR_DETALLE_AUTOR', campos)
}
