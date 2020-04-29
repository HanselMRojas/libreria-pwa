import { mapActions, mapState } from 'vuex'

import AutorForm from '../AutorForm/AutorForm.vue'
import BookDetail from '../BookDetail/BookDetail.vue'
import BookForm from '../BookForm/BookForm.vue'

export default {
  computed: {
    ...mapState({
      catalogo: state => state.catalogo
    })
  },
  components: {
    AutorForm,
    BookDetail,
    BookForm
  },
  methods: {
    ...mapActions('catalogo', [
      'cambiarDetalleLibro',
      'cambiarEstadoModal',
      'cambiarEstadoDefault'
    ])
  }
}
