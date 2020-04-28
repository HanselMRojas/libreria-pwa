import { mapActions, mapState } from 'vuex'
import md5 from 'md5'

import { version } from '../../../package.json'

export default {
  name: 'UiDrawer',
  computed: {
    ...mapState({
      cuenta: state => state.cuenta,
      ui: state => state.ui
    }),
    versionSoftware () {
      return version
    },
    avatar (email) {
      return `https://www.gravatar.com/avatar/${md5(this.cuenta.detail.correo)}?d=retro`
    },
    usuarioAutenticado () {
      return this.cuenta.token !== ''
    }
  },
  methods: {
    ...mapActions('cuenta', ['cerrarSesion'])
  }
}
