export const errorHandler = (error, commit, cnf) => {
  if (!error.response) {
    commit('ui/CAMBIAR_SNACK', {
      ...cnf,
      color: 'red',
      message: cnf.errors.noResponse || 'Problema con la red'
    }, { root: true })

    throw TypeError(error)
  }

  if (error.response.status === 400) {
    commit('ui/CAMBIAR_SNACK', {
      ...cnf,
      color: 'red',
      message: cnf.errors['400'] || error.response.mensaje || 'Problema al enviar datos'
    }, { root: true })
  }

  if (error.response.status === 404) {
    commit('ui/CAMBIAR_SNACK', {
      ...cnf,
      color: 'red',
      message: cnf.errors['404'] || error.response.mensaje || 'Recurso no encontrado'
    }, { root: true })
  }

  if (error.response.status === 401) {
    commit('ui/CAMBIAR_SNACK', {
      ...cnf,
      color: 'red',
      message: cnf.errors['401'] || error.response.mensaje || 'Credenciales invalidas'
    }, { root: true })
  }

  if (error.response.status === 403) {
    commit('ui/CAMBIAR_SNACK', {
      ...cnf,
      color: 'red',
      message: cnf.errors['403'] || error.response.mensaje || 'La cuenta no está autorizada para iniciar sesión'
    }, { root: true })
  }

  if (error.response.status === 500) {
    commit('ui/CAMBIAR_SNACK', {
      ...cnf,
      color: 'red',
      message: cnf.errors['500'] || 'Problemas con el servidor'
    }, { root: true })
  }
}
