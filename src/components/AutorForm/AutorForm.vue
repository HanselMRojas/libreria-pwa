<template>
  <v-card>
    <v-card-title class="primary white--text">
      <h2>{{ catalogo.modal.titulo }}</h2>
    </v-card-title>

    <v-card-text class="mt-4 pa-8">
      <v-content>
        <v-row>
          <v-col class="d-flex pa-0 pr-md-1" cols="12" md="12">
            <v-text-field
              @input="cambiarDetalleAutor({ nombre: $event })"
              :value="catalogo.autor.nombre"
              label="Nombre del autor"
              placeholder="Nombre del autor"
              color="primary"
              filled>
            </v-text-field>
          </v-col>

          <v-col class="d-flex pa-0 pr-md-1" cols="12" md="12">
            <v-textarea
              @input="cambiarDetalleAutor({ descripcion: $event })"
              :value="catalogo.autor.descripcion"
              label="Descripción"
              placeholder="Describe el nuevo autor..."
              color="primary"
              filled>
            </v-textarea>
          </v-col>
        </v-row>
      </v-content>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text @click="alPulsarVolver">Volver</v-btn>
      <v-btn text @click="alPulsarGuardarAutor" color="primary">Crear Autor</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script src="./AutorForm.js"></script>
