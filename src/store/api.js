import axios from 'axios'
import queryString from 'querystring'

const PRODUCCION = process.env.NODE_ENV === 'production'

export class AsegurandoClient {
  constructor (config = {}) {
    this.config = Object.assign({}, {
      ssl: (PRODUCCION),
      url: (PRODUCCION) ? 'api.hanselmrojas.com/tests' : 'localhost:3000',
      versionApi: 'v1'
    }, config)
  }

  loginCuenta (credenciales = {}) {
    return this.request({
      path: 'autenticacion/login',
      method: 'POST',
      data: credenciales,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  crearCuenta (credenciales = {}) {
    return this.request({
      path: 'autenticacion/registro',
      method: 'POST',
      data: credenciales,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  crear (ruta, data = {}, headers = {}, config) {
    return this.request({
      path: ruta,
      method: 'POST',
      data,
      headers,
      config
    })
  }

  leer (ruta, query = null, headers = {}) {
    return this.request({
      path: ruta,
      method: 'GET',
      query,
      headers
    })
  }

  actualizar (id = '', ruta, data = {}, headers = {}) {
    return this.request({
      path: `${ruta}/${id}`,
      method: 'POST',
      data,
      headers
    })
  }

  borrar (ruta, headers = {}) {
    return this.request({
      path: ruta,
      method: 'DELETE',
      query: null,
      headers
    })
  }

  request (payload = {}) {
    const QS = (payload.query == null || payload.query === undefined || Object.keys(payload.query).length === 0) ? '' : `?${queryString.encode(payload.query)}`
    const ruta = `${this.parseURL()}/${payload.path}${QS}`

    return axios({
      url: ruta,
      method: payload.method,
      data: payload.data,
      headers: Object.assign({}, {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }, payload.headers)
    })
  }

  parseURL () {
    const { ssl, url, versionApi } = this.config
    const protocol = (ssl) ? 'https' : 'http'

    return `${protocol}://${url}/${versionApi}`
  }
}

export default new AsegurandoClient()
