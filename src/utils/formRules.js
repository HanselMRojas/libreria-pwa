import {
  emailRegexp,
  nombreRegexp
} from './regexp'

export default {
  tipoIdentidad: [
    v => !!v || 'El tipo documento de identidad es requerido'
  ],
  tipoGenero: [
    v => !!v || 'El género es requerido'
  ],
  ciudad: [
    v => !!v || 'La ciudad es requerida'
  ],
  numeroIdentidad: [
    v => !!v || 'El número de documento de identidad es requerido',
    v => v.length <= 12 || 'Este número debe contener máximo 12 caracteres'
  ],
  fechaNacimiento: [
    v => !!v || 'La fecha de nacimiento es requerida'
  ],
  razonSocial: [
    v => !!v || 'La Razón Social es requerida'
  ],
  direccion: [
    v => !!v || 'La dirección es requerida'
  ],
  nombre: [
    v => !!v || 'El nombre es requerido',
    v => v.length <= 100 || 'No puede contener mas de 100 caracteres',
    v => nombreRegexp.test(v) || 'Debe ser una sola palabra'
  ],
  apellido: [
    v => !!v || 'El apellido es requerido',
    v => v.length <= 100 || 'No puede contener mas de 100 caracteres',
    v => nombreRegexp.test(v) || 'Debe ser una sola palabra'
  ],
  correo: [
    v => !!v || 'El correo electrónico es requerido',
    v => emailRegexp.test(v) || 'Debe ser un correo válido'
  ],
  telefono: [
    v => !!v || 'El teléfono es requerido',
    v => v.length === 10 || 'Debe contener 10 digitos'
  ]
}
