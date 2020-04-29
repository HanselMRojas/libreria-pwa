<template>
  <v-card flat class="book">
    <v-card-text class="book__container">
      <aside class="book__img primary">
        <img :src="libro.urlImagen" :alt="libro.titulo">
      </aside>

      <article class="book__content">
        <h2>{{ libro.titulo }}</h2>
        <p>{{ libro.subtitulo }}</p>

        <v-simple-table>
          <tbody>
            <tr>
              <td colspan="2">Autores, {{ autores }}</td>
            </tr>
            <tr>
              <td>Año, {{ fecha }}</td>
            </tr>
            <tr>
              <td>Páginas, {{ libro.numeroPaginas }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </article>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn text primary @click="alPresionarDetalle(libro)">
        Detalle
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn text :color="colorReserva" @click="alPresionarReserva">
        <v-icon>date_range</v-icon>
        {{ libro.reservas.length }}
      </v-btn>

      <v-btn text :color="colorFavorito" @click="alPresionarFavorito">
        <v-icon>favorite_border</v-icon>
        {{ libro.favoritos.length }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="stylus" src="./BookCard.styl" scoped></style>
<script src="./BookCard.js"></script>
