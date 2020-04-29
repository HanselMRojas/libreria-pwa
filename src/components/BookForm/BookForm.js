import { mapActions, mapState } from 'vuex'
import moment from 'moment'

export default {
  data: () => ({
    autoUpdate: true,
    isUpdating: false,
    fechador: false
  }),
  computed: {
    ...mapState({
      catalogo: state => state.catalogo
    })
  },
  methods: {
    ...mapActions('catalogo', [
      'actualizarLibro',
      'cambiarDetalleLibro',
      'cambiarEstadoModal',
      'cambiarEstadoDefault',
      'crearLibro'
    ]),
    formatearFecha (fecha = null) {
      const formatoFecha = moment(fecha).format('YYYY-MM-DD')
      const formatoAhora = moment().format('YYYY-MM-DD')
      return fecha ? formatoFecha : formatoAhora
    },
    alPulsarNuevoAutor () {
      this.cambiarEstadoModal({ vista: 3 })
    },
    alPulsarGuardarLibro () {
      const { libro } = this.catalogo
      this.crearLibro(libro)
    },
    alPulsarActualizarLibro () {
      const { libro } = this.catalogo
      this.actualizarLibro(libro)
    }
  }
}
