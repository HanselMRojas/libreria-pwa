<template>
  <v-navigation-drawer
    v-model="ui.drawer"
    absolute
    temporary>
    <header class="drawer-header white">
      <figure class="drawer-header__logo">
        <v-img class="drawer-header__img" src="/vectores/libro.svg"></v-img>
        <h5>Librería de las sombras</h5>
      </figure>
    </header>

    <v-divider></v-divider>

    <v-list>
      <v-list-item style="margin-bottom: 10px" v-if="usuarioAutenticado">
        <v-list-item-avatar>
          <v-img :src="avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ cuenta.detail.nickname }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item to="/">
        <v-list-item-avatar>
          <eva-icon name="home-outline" class="center-icon"></eva-icon>
        </v-list-item-avatar>
        <v-list-item-title>Inicio</v-list-item-title>
      </v-list-item>

      <v-list-item to="/cuenta">
        <v-list-item-avatar>
          <eva-icon name="home-outline" class="center-icon"></eva-icon>
        </v-list-item-avatar>
        <v-list-item-title>Mi Cuenta</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item to="/acerca">
        <v-list-item-avatar>
          <eva-icon name="info-outline" class="center-icon"></eva-icon>
        </v-list-item-avatar>
        <v-list-item-title>v{{ versionSoftware }}</v-list-item-title>
      </v-list-item>

      <v-list-item @click="cerrarSesion">
        <v-list-item-avatar>
          <eva-icon name="close-square-outline" class="center-icon"></eva-icon>
        </v-list-item-avatar>
        <v-list-item-title>Cerrar Sesión</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script src="./UiDrawer.js"></script>
<style src="./UiDrawer.styl" lang="stylus" scoped></style>
