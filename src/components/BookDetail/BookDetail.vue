<template>
  <v-card>
    <v-card-title class="primary white--text">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{ catalogo.libro.titulo }}</v-list-item-title>
          <v-list-item-subtitle>{{ catalogo.libro.subtitulo }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-title>

    <v-card-text class="pa-8">
      <v-content>
        <v-row>
          <v-col class="d-flex pa-0 pr-md-1" cols="12" md="6">
            <aside class="book__img primary">
              <img :src="catalogo.libro.urlImagen" :alt="catalogo.libro.titulo">
            </aside>
          </v-col>

          <v-col class="d-flex pa-0 pr-md-1" cols="12" md="6">
            <article class="px-4">
              <p class="justify-text">{{ catalogo.libro.descripcion }}</p>
              <v-simple-table>
                <tbody>
                  <tr>
                    <td colspan="2">Autores: {{ autores }}</td>
                  </tr>
                  <tr>
                    <td>Año: {{ fecha }}</td>
                  </tr>
                  <tr>
                    <td>Páginas: {{ catalogo.libro.numeroPaginas }}</td>
                  </tr>
                </tbody>
              </v-simple-table>

              <template v-if="usuarioAdmin">
                <v-divider></v-divider>

                <v-list>
                  <v-subheader>Acciones administrador</v-subheader>
                  <v-list-item @click="alPusarEditar">
                    <v-list-item-avatar color="green">
                      <v-icon dark>edit</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>Editar</v-list-item-title>
                      <v-list-item-subtitle>Editar este libro</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </template>
            </article>
          </v-col>
        </v-row>
      </v-content>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text @click="cambiarEstadoDefault">Cerrar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="stylus" src="./BookDetail.styl" scoped></style>
<script src="./BookDetail.js"></script>
