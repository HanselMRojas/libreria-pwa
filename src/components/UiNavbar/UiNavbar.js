import { mapState, mapActions } from 'vuex'

// Componentes
import AuthModal from '../AuthModal/AuthModal.vue'

export default {
  name: 'UiNavbar',
  computed: {
    ...mapState({
      cuenta: state => state.cuenta
    }),
    usuarioAutenticado () {
      return this.cuenta.token !== ''
    }
  },
  components: {
    AuthModal
  },
  methods: {
    ...mapActions('ui', ['cambiarDrawer']),
    ...mapActions('cuenta', ['switchModal'])
  }
}
