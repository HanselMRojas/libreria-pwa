<template>
  <v-dialog
    v-model="cuenta.modal"
    width="500">
    <v-card>
      <v-card-title
        class="headline primary white--text"
        primary-title>
        {{ titulo }}
      </v-card-title>

      <v-card-text>
        <v-form class="base_form mt-4" v-model="form.valid">
          <section>
            <v-container>
              <v-row>
                <v-col class="d-flex pa-0 pr-md-1" cols="12" md="12"  v-if="!esLogin">
                  <v-text-field
                    v-model="form.nickname"
                    :counter="22"
                    :rules="rules.nombres"
                    label="Nombre de usuario"
                    placeholder="Nickname"
                    color="primary"
                    filled>
                  </v-text-field>
                </v-col>

                <v-col class="d-flex pa-0 pr-md-1" cols="12" md="12">
                  <v-text-field
                    v-model="form.correo"
                    :rules="rules.correo"
                    label="Correo Electrónico"
                    placeholder="correo@correo.com"
                    type="email"
                    color="primary"
                    filled>
                  </v-text-field>
                </v-col>

                <v-col class="d-flex pa-0 pr-md-1" cols="12" md="12">
                  <v-text-field
                    @click:append="mostrarClave = !mostrarClave"
                    v-model="form.clave"
                    :counter="32"
                    :rules="rules.clave"
                    :append-icon="mostrarClave ? 'visibility_off' : 'visibility'"
                    :type="mostrarClave ? 'text' : 'password'"
                    color="primary"
                    placeholder="**********"
                    label="Contraseña"
                    filled>
                  </v-text-field>
                </v-col>

                <v-col class="d-flex pa-0 pr-md-1" cols="12" md="12">
                  <v-btn
                    v-if="esLogin"
                    class="btn primary white--text"
                    depressed
                    block
                    large
                    @click="onLogin">
                    {{ titulo }}
                  </v-btn>

                  <v-btn
                    v-else
                    class="btn primary white--text"
                    depressed
                    block
                    large
                    @click="onCrearCuenta">
                    {{ titulo }}
                  </v-btn>
                </v-col>

                <v-col cols="12" sm="12" v-if="!esLogin" class="text-center">
                  <p>
                    Al pulsar <b>CREAR CUENTA</b> estas aceptando nuestrs <router-link to="/legal/terminos">Términos y condiciones</router-link>.
                  </p>
                </v-col>
                <v-col cols="12" sm="12">
                  <v-btn
                    @click="hacerSwitchLogin"
                    text
                    large
                    color="primary"
                    block>
                    {{ textoBoton }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </section>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script src="./AuthModal.js"></script>
