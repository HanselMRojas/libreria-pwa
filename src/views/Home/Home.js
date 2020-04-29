import { mapActions, mapState } from 'vuex'

import BookCard from '../../components/BookCard/BookCard.vue'
import BookModal from '../../components/BookModal/BookModal.vue'

export default {
  data: () => ({
    busqueda: ''
  }),
  computed: {
    ...mapState({
      catalogo: state => state.catalogo,
      cuenta: state => state.cuenta
    }),
    usuarioAdmin () {
      const esAutenticado = this.cuenta.token !== ''
      const esAdmin = this.cuenta.detail.rol === 'ADMINISTRADOR'
      return esAutenticado && esAdmin
    }
  },
  components: {
    BookCard,
    BookModal
  },
  methods: {
    ...mapActions('catalogo', [
      'cambiarEstadoModal',
      'cambiarEstadoDefault',
      'listarAutores',
      'listarLibros'
    ]),
    alPulsarAgregarLibro () {
      this.cambiarEstadoDefault()
      this.cambiarEstadoModal({
        titulo: 'Crear libro (Admin)',
        esAbierto: true,
        esEdicion: false,
        vista: 2
      })
    }
  },
  watch: {
    busqueda (val) {
      this.listarLibros({ q: val, sort: 'titulo' })
    }
  },
  beforeMount () {
    this.listarLibros({ sort: 'titulo' })
    this.listarAutores({ sort: 'nombre' })
  }
}
