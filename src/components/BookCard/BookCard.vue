<template>
  <v-card flat class="book">
    <v-card-text class="book__container">
      <aside class="book__img primary">
        <eva-icon name="home-outline" class="center-icon" width="28" height="28"></eva-icon>
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
      <v-btn text primary>
        Detalle
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn text>
        <v-icon>date_range</v-icon>
        45
      </v-btn>

      <v-btn icon>
        <v-icon>favorite_border</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="stylus" src="./BookCard.styl" scoped></style>
<script src="./BookCard.js"></script>
