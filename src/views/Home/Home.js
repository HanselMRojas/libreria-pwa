import { mapActions, mapState } from 'vuex'

import BookCard from '../../components/BookCard/BookCard.vue'
import BookModal from '../../components/BookModal/BookModal.vue'

export default {
  data: () => ({
    busqueda: ''
  }),
  computed: {
    ...mapState({
      catalogo: state => state.catalogo
    })
  },
  components: {
    BookCard,
    BookModal
  },
  methods: {
    ...mapActions('catalogo', [
      'cambiarEstadoModal',
      'listarAutores',
      'listarLibros'
    ]),
    alPulsarAgregarLibro () {
      this.listarAutores({ sort: 'nombre' })
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
  }
}
