<template>
  <v-app>
    <ui-navbar />
    <ui-drawer />

    <v-content class="content grey lighten-3">
      <v-slide-y-transition mode="out-in">
        <router-view/>
      </v-slide-y-transition>
    </v-content>

    <v-snackbar
      v-model="ui.snack.show"
      :timeout="ui.snack.timeout"
      :bottom="ui.snack.bottom"
      :top="ui.snack.top"
      :right="ui.snack.right"
      :left="ui.snack.left">
      {{ ui.snack.message }}
      <v-btn :color="ui.snack.color" @click="cambiarEstadoSnack({ show: false, message: '', color: 'error' })">
        Cerrar
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script src="./App.js"></script>
<style src="./App.styl" lang="stylus"></style>
