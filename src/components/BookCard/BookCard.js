import { mapActions, mapState } from 'vuex'
import moment from 'moment'

export default {
  computed: {
    ...mapState({
      cuenta: state => state.cuenta
    }),
    autores () {
      return this.libro.autores.map(autor => autor.nombre).join(', ') || 'Sin autor'
    },
    fecha () {
      return moment(this.libro.fechaPublicacion).format('YYYY')
    },
    usuarioAutenticado () {
      return this.cuenta.token !== ''
    },
    colorReserva () {
      const { _id } = this.cuenta.detail
      return this.libro.reservas.includes(_id) ? 'green' : ''
    },
    colorFavorito () {
      const { _id } = this.cuenta.detail
      return this.libro.favoritos.includes(_id) ? 'red' : ''
    }
  },
  methods: {
    ...mapActions('catalogo', [
      'cambiarDetalleLibro',
      'cambiarEstadoModal',
      'actualizarLibroCounters'
    ]),
    ...mapActions('cuenta', ['switchModal']),
    alPresionarDetalle (libro = {}) {
      this.cambiarDetalleLibro(libro)

      this.cambiarEstadoModal({
        esAbierto: true,
        vista: 1
      })
    },
    alPresionarFavorito () {
      if (this.cuenta.token !== '') {
        const { libro } = this
        const payload = {
          id: libro.id,
          favorito: true
        }
        this.actualizarLibroCounters(payload)
      } else {
        this.switchModal()
      }
    },
    alPresionarReserva () {
      if (this.cuenta.token !== '') {
        const { libro } = this
        const payload = {
          id: libro.id,
          reserva: true
        }
        this.actualizarLibroCounters(payload)
      } else {
        this.switchModal()
      }
    }
  },
  props: {
    libro: {
      titulo: { type: String, default: 'Título del libro' },
      subtitulo: { type: String, default: 'Subtitulo del libro' },
      favoritos: {
        type: Array,
        default: () => []
      },
      reservas: {
        type: Array,
        default: () => []
      }
    }
  }
}
