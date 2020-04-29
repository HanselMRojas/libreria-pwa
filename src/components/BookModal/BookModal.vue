<template>
   <v-dialog
    v-model="catalogo.modal.esAbierto"
    width="700">
    <v-stepper v-model="catalogo.modal.vista">
      <v-stepper-header class="no-visible">
        <v-stepper-step :complete="catalogo.modal.vista > 1" step="1">Name of step 1</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="catalogo.modal.vista > 2" step="2">Name of step 2</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Name of step 3</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items class="modal__container">
        <v-stepper-content step="1">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          ></v-card>

          <v-btn
            color="primary"
            @click="catalogo.modal.vista = 1"
          >
            Continue
          </v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2"  class="modal__container">
          <v-card>
            <v-card-title class="primary white--text">
              <h2>{{ catalogo.modal.titulo }}</h2>
            </v-card-title>

            <v-card-text class="mt-4">
              <v-container>
                <v-row>
                  <v-col class="d-flex pa-0 pr-md-1" cols="12" md="12">
                    <v-text-field
                      @input="cambiarDetalleLibro({ titulo: $event })"
                      :value="catalogo.libro.titulo"
                      label="Título del libro"
                      placeholder="Título del libro"
                      color="primary"
                      filled>
                    </v-text-field>
                  </v-col>

                  <v-col class="d-flex pa-0 pr-md-1" cols="12" md="12">
                    <v-text-field
                      @input="cambiarDetalleLibro({ subtitulo: $event })"
                      :value="catalogo.libro.subtitulo"
                      label="Subtitulo"
                      placeholder="Subtítulo del libro"
                      color="primary"
                      filled>
                    </v-text-field>
                  </v-col>

                  <v-col class="d-flex pa-0 pr-md-1" cols="12" md="12">
                    <v-text-field
                      @input="cambiarDetalleLibro({ isbn: $event })"
                      :value="catalogo.libro.isbn"
                      label="Número ISBN"
                      placeholder="ISBN 13, ISBN 10"
                      color="primary"
                      filled>
                    </v-text-field>
                  </v-col>

                  <v-col class="d-flex pa-0 pr-md-1" cols="12" md="6">
                    <v-menu
                      v-model="fechador"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      min-width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          :value="catalogo.libro.fechaPublicacion"
                          label="Fecha de publicación"
                          placeholder="Fecha de publicación"
                          color="primary"
                          readonly
                          v-on="on"
                          filled>
                        </v-text-field>
                      </template>

                      <v-date-picker
                        @input="cambiarDetalleLibro({ fechaPublicacion: $event })"
                        :value="catalogo.libro.fechaPublicacion"
                        no-title scrollable>
                      </v-date-picker>
                    </v-menu>
                  </v-col>

                  <v-col class="d-flex pa-0 pr-md-1" cols="12" md="6">
                    <v-text-field
                      @input="cambiarDetalleLibro({ numeroPaginas: $event })"
                      :value="catalogo.libro.numeroPaginas"
                      type="number"
                      min="1"
                      label="Número de páginas"
                      placeholder="Número de páginas"
                      color="primary"
                      filled>
                    </v-text-field>
                  </v-col>

                  <v-col class="d-flex pa-0 pr-md-1" cols="12" md="12">
                    <v-textarea
                      @input="cambiarDetalleLibro({ descripcion: $event })"
                      :value="catalogo.libro.descripción"
                      :counter="22"
                      label="Descripción"
                      placeholder="Describe el nuevo libro..."
                      color="primary"
                      filled>
                    </v-textarea>
                  </v-col>

                  <v-col class="d-flex pa-0 pr-md-1" cols="12" md="12">
                    <v-autocomplete
                      @input="cambiarDetalleLibro({ autores: $event })"
                      :value="catalogo.libro.autores"
                      :disabled="isUpdating"
                      :items="catalogo.autores"
                      filled
                      chips
                      return-object
                      color="blue-grey lighten-2"
                      label="Autores"
                      placeholder="Seleccionar Autores"
                      item-text="nombre"
                      item-value="nombre"
                      append-icon="add_circle"
                      color:append="primary"
                      @click:append="alPulsarNuevoAutor"
                      multiple>
                      <!-- Chips -->
                      <template v-slot:selection="data">
                        <v-chip
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          closable
                          @click="data.select"
                          @click:close="remove(data.item)">
                          <v-avatar left>
                            <v-icon color="primary">person</v-icon>
                          </v-avatar>
                          {{ data.item.nombre }}
                        </v-chip>
                      </template>
                      <!-- Chips -->
                      <template v-slot:item="data">
                        <template v-if="typeof data.item !== 'object'">
                          <v-list-item-content v-text="data.item"></v-list-item-content>
                        </template>
                        <template v-else>
                          <v-list-item-avatar>
                            <v-icon>person</v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title v-html="data.item.nombre"></v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </template>
                    </v-autocomplete>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="cambiarEstadoDefault">Cancelar</v-btn>
              <v-btn text @click="alPulsarGuardarLibro" color="primary">Crear Libro</v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          ></v-card>

          <v-btn
            color="primary"
            @click="catalogo.modal.vista = 3">
            Continue
          </v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
   </v-dialog>
</template>

<style lang="stylus" src="./BookModal.styl" scoped></style>
<script src="./BookModal.js"></script>
