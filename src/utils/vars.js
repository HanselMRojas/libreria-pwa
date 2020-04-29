export const PRODUCCION = process.env.NODE_ENV === 'production'

export const HOST = PRODUCCION
  ? 'https://libreria.hanselmrojas.com'
  : 'http://localhost:4000'
