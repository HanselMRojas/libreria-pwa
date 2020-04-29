<template>
   <v-dialog
    v-model="catalogo.modal.esAbierto"
    width="750">
    <v-stepper v-model="catalogo.modal.vista">
      <v-stepper-header class="no-visible">
        <v-stepper-step :complete="catalogo.modal.vista > 1" step="1">Name of step 1</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="catalogo.modal.vista > 2" step="2">Name of step 2</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Name of step 3</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items class="modal__container">
        <v-stepper-content step="1" class="modal__container">
          <book-detail></book-detail>
        </v-stepper-content>

        <v-stepper-content step="2" class="modal__container">
          <book-form></book-form>
        </v-stepper-content>

        <v-stepper-content step="3" class="modal__container">
          <autor-form></autor-form>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
   </v-dialog>
</template>

<style lang="stylus" src="./BookModal.styl" scoped></style>
<script src="./BookModal.js"></script>
