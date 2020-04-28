import moment from 'moment'

export default {
  computed: {
    autores () {
      return this.libro.autores.map(autor => autor.nombre).join(', ') || 'Sin autor'
    },
    fecha () {
      return moment(this.libro.fechaPublicacion).format('YYYY')
    }
  },
  props: {
    libro: {
      titulo: { type: String, default: 'Título del libro' },
      subtitulo: { type: String, default: 'Subtitulo del libro' }
    }
  }
}
