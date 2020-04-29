import { mapState, mapActions } from 'vuex'

// Componentes
import UiDrawer from '../components/UiDrawer/UiDrawer.vue'
import UiNavbar from '../components/UiNavbar/UiNavbar.vue'

export default {
  name: 'App',
  data: () => ({
    //
  }),
  mounted () {
    Notification.requestPermission()
  },
  components: {
    UiDrawer,
    UiNavbar
  },
  computed: {
    ...mapState({
      cuenta: state => state.cuenta,
      ui: state => state.ui
    }),
    usuarioAutenticado () {
      return this.cuenta.token !== ''
    }
  },
  methods: {
    ...mapActions('ui', ['cambiarEstadoSnack'])
  }
}
