<template>
  <section>
    <carousel
      autoplay
      loop
      :autoplayTimeout="5000"
      :perPage="1"
      paginationActiveColor="#FF5722"
      paginationColor="#9E9D9D">

      <slide class="slide primary">
        <article class="web-inner slide__content">
          <h1 class="banner-title">¡Bienvenido!</h1>
          <p class="banner-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus at.</p>
        </article>
      </slide>

      <slide class="slide red">
        <article class="web-inner slide__content">
          <h1 class="banner-title">¡Bienvenido!</h1>
          <p class="banner-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus at.</p>
        </article>
      </slide>

      <slide class="slide purple">
        <article class="web-inner slide__content">
          <h1 class="banner-title">¡Bienvenido!</h1>
          <p class="banner-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus at.</p>
        </article>
      </slide>
    </carousel>

    <section class="web-inner mt-8">
      <v-toolbar flat>
        <v-toolbar-title class="grey--text">Catálogo de Libros</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          clearable
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="search"
          label="Buscar..."
        ></v-text-field>
      </v-toolbar>

      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="6" v-for="libro in catalogo.libros" :key="libro.id">
            <book-card :libro="libro"></book-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </section>
</template>

<style lang="stylus" src="./Home.styl" scoped></style>
<script src="./Home.js"></script>
