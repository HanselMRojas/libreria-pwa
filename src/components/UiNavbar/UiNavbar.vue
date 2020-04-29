<template>
  <header class="ui-navbar">
    <section class="web-inner">
      <section class="ui-navbar__content">
        <router-link to="/">
          <v-img class="ui-navbar__logo" src="/vectores/libro.svg"></v-img>
        </router-link>
        <h4 class="ml-4">Librería de las sombras</h4>

        <v-spacer></v-spacer>

        <nav class="ui-navbar__nav">
          <router-link to="/" class="ui-navbar__item">
            <v-btn icon color="primary center-icon">
              <eva-icon name="home-outline" class="center-icon" width="28" height="28"></eva-icon>
            </v-btn>
          </router-link>
        </nav>

        <div v-if="usuarioAutenticado">
          <v-btn color="primary" text class="ui-navbar__item center-icon" @click="cambiarDrawer">
            <span class="mr-4">{{ cuenta.detail.nickname }}</span>
            <eva-icon name="menu" class="center-icon" width="28" height="28"></eva-icon>
          </v-btn>
        </div>

        <div v-else class="ml-8">
          <v-btn class="primary" color="primary--text" text @click="switchModal">Ingresar</v-btn>
        </div>
      </section>
    </section>

    <auth-modal />
  </header>
</template>

<script src="./UiNavbar.js"></script>
<style src="./UiNavbar.styl" lang="stylus" scoped></style>
