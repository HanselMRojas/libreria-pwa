import { mapActions, mapState } from 'vuex'
import moment from 'moment'

export default {
  computed: {
    ...mapState({
      catalogo: state => state.catalogo,
      cuenta: state => state.cuenta
    }),
    autores () {
      return this.catalogo.libro.autores.map(autor => autor.nombre).join(', ') || 'Sin autor'
    },
    fecha () {
      return moment(this.catalogo.libro.fechaPublicacion).format('YYYY')
    },
    usuarioAdmin () {
      const esAutenticado = this.cuenta.token !== ''
      const esAdmin = this.cuenta.detail.rol === 'ADMINISTRADOR'
      return esAutenticado && esAdmin
    }
  },
  methods: {
    ...mapActions('catalogo', [
      'cambiarEstadoDefault',
      'cambiarEstadoModal'
    ]),
    alPusarEditar () {
      this.cambiarEstadoModal({ vista: 2, esEdicion: true })
    }
  }
}
