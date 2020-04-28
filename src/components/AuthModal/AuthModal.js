import { mapActions, mapState } from 'vuex'

import {
  emailRegexp,
  nombreRegexp,
  claveRegexp
} from '../../utils/regexp'

export default {
  data: () => ({
    esLogin: true,
    form: {
      valid: false,
      nickname: '',
      correo: '',
      clave: ''
    },
    mostrarClave: false,
    rules: {
      nombres: [
        v => !!v || 'El nombre es requerido',
        v => v.length <= 22 || 'No puede contener mas de 22 caracteres',
        v => nombreRegexp.test(v) || 'Debe ser una sola palabra pemitidos los _-'
      ],
      correo: [
        v => !!v || 'El correo electrónico es requerido',
        v => emailRegexp.test(v) || 'Debe ser un correo válido'
      ],
      clave: [
        v => !!v || 'La clave es requerida',
        v => claveRegexp.test(v) || 'Debe contener almenos una letra minuscula, una mayuscula, un carater especial y un digito. Debe tener mímino 8 caracteres'
      ]
    }
  }),
  computed: {
    ...mapState({
      cuenta: state => state.cuenta
    }),
    titulo () {
      return this.esLogin ? 'Iniciar Sesión' : 'Crear una cuenta'
    },
    textoBoton () {
      return !this.esLogin ? 'Iniciar Sesión' : 'Crear una cuenta'
    }
  },
  methods: {
    ...mapActions('cuenta', ['login', 'crearCuenta']),
    ...mapActions('ui', ['cambiarEstadoSnack']),
    hacerSwitchLogin () {
      this.esLogin = !this.esLogin
    },
    /**
     * onLogin
     *
     * Llamada desde la vista de login en el boton
     * "INICIAR SESION". Valida si el formulario
     * es correcto y envía la petición mediante el action.
     */
    onLogin () {
      const { valid, correo, clave } = this.form
      if (valid) {
        this.login({ correo, clave, redireccion: false })
      } else {
        this.cambiarEstadoSnack({
          show: true,
          color: 'red',
          right: true,
          bottom: true,
          message: 'El formulario no es válido'
        })
      }
    },
    /**
     * onCrearCuenta
     *
     * Funcion que se llama desde le boton "CREAR CUENTA"
     * Valida que el formulario este correcto y si es así
     * envía la petición mediante el action.
     */
    onCrearCuenta () {
      const {
        valid,
        nickname,
        correo,
        clave
      } = this.form

      if (valid) {
        this.crearCuenta({
          nickname,
          correo,
          clave,
          redireccion: false
        })
      } else {
        this.cambiarEstadoSnack({
          show: true,
          color: 'red',
          right: true,
          bottom: true,
          message: 'El formulario no es válido'
        })
      }
    }
  }
}
