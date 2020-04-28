import { mapActions, mapState } from 'vuex'

import BookCard from '../../components/BookCard/BookCard.vue'

export default {
  data: () => ({
    search: ''
  }),
  computed: {
    ...mapState({
      catalogo: state => state.catalogo
    })
  },
  components: {
    BookCard
  },
  methods: {
    ...mapActions('catalogo', ['listarLibros'])
  },
  beforeMount () {
    this.listarLibros({ sort: 'titulo' })
  }
}
