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
      'cambiarDetalleAutor',
      'cambiarEstadoModal',
      'cambiarEstadoDefault',
      'crearAutor'
    ]),
    formatearFecha (fecha = null) {
      const formatoFecha = moment(fecha).format('YYYY-MM-DD')
      const formatoAhora = moment().format('YYYY-MM-DD')
      return fecha ? formatoFecha : formatoAhora
    },
    alPulsarVolver () {
      this.cambiarEstadoModal({ vista: 2, titulo: 'Crear libro (Admin)' })
    },
    alPulsarGuardarAutor () {
      const { autor } = this.catalogo
      this.crearAutor(autor)
    }
  }
}
