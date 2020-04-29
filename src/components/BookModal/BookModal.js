import { mapActions, mapState } from 'vuex'

export default {
  data: () => ({
    autoUpdate: true,
    isUpdating: false,
    name: 'Midnight Crew',
    fechador: false
  }),
  computed: {
    ...mapState({
      catalogo: state => state.catalogo
    })
  },
  methods: {
    ...mapActions('catalogo', [
      'cambiarDetalleLibro',
      'cambiarEstadoModal',
      'cambiarEstadoDefault',
      'crearLibro'
    ]),
    alPulsarNuevoAutor () {
      this.cambiarEstadoModal({ vista: 3 })
    },
    alPulsarGuardarLibro () {
      const { libro } = this.catalogo
      this.crearLibro(libro)
    }
  }
}
