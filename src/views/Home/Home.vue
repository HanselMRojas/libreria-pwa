<template>
  <section>
    <carousel
      autoplay
      loop
      :autoplayTimeout="5000"
      :perPage="1"
      paginationActiveColor="#FF5722"
      paginationColor="#9E9D9D">

      <slide class="slide">
        <figure>
          <img src="/img/backgrounds/pieza_1.png" alt="Pieza 1" />
          <div class="overlay"></div>
        </figure>
        <article class="web-inner slide__content white--text">
          <h1 class="banner-title">¡Hola!</h1>
          <p class="banner-text">Te damos la bienvenida a la librería de las sombras</p>
        </article>
      </slide>

      <slide class="slide">
        <figure>
          <img src="/img/backgrounds/pieza_2.png" alt="Pieza 2" />
          <div class="overlay"></div>
        </figure>
        <article class="web-inner slide__content white--text">
          <h1 class="banner-title">"...Las ideas son a prueba de balas..."</h1>
          <p class="banner-text">Consigue tus mejores libros de culto de todos los tiempos.</p>
        </article>
      </slide>

      <slide class="slide">
        <figure>
          <img src="/img/backgrounds/pieza_3.png" alt="Pieza 3" />
          <div class="overlay"></div>
        </figure>
        <article class="web-inner slide__content white--text">
          <h1 class="banner-title">"...Winter is comming..."</h1>
          <p class="banner-text">Consigue tus mejores sagas y completa tus colecciones</p>
        </article>
      </slide>

      <slide class="slide">
        <figure>
          <img src="/img/backgrounds/pieza_4.png" alt="Pieza 4" />
          <div class="overlay"></div>
        </figure>
        <article class="web-inner slide__content white--text">
          <h1 class="banner-title">Aprovecha tu mejor tu tiempo</h1>
          <p class="banner-text">Los mejores libros de emprendimiento para que aproveches en esta cuarentena</p>
        </article>
      </slide>
    </carousel>

    <section class="web-inner mt-8">
      <v-toolbar flat>
        <v-toolbar-title class="grey--text">Catálogo de Libros</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-text-field
          v-model="busqueda"
          clearable
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="search"
          label="Buscar..."
        ></v-text-field>

        <v-menu bottom left v-if="usuarioAdmin">
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>more_vert</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item @click="alPulsarAgregarLibro">
              <v-list-item-title>Agregar libro</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>

      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="6" v-for="libro in catalogo.libros" :key="libro.id">
            <book-card :libro="libro"></book-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <book-modal></book-modal>
  </section>
</template>

<style lang="stylus" src="./Home.styl" scoped></style>
<script src="./Home.js"></script>
