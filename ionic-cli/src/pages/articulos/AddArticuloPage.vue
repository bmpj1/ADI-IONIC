<template>
  <base-layout pageTitle="Nuevo Articulo" pageDefaultBackLink="/articulos">
    <create-articulo-form @save-articulo="saveArticulo"></create-articulo-form>
  </base-layout>
</template>

<script>
import BaseLayout from '@/components/base/BaseLayout.vue';
import CreateArticuloForm from '@/components/articulos/CreateArticuloForm.vue';
import ArticuloService from '@/services/articulo.service';
import { alertController } from '@ionic/vue'

export default {
  components: {
    BaseLayout,
    CreateArticuloForm
  },
  methods: {
    async saveArticulo(articuloData) {
      ArticuloService.addArticulo(articuloData)
      .then(res => {
        console.log(res);
        this.$router.replace('/articulos').catch(()=>{});
      })
      .catch(error => {
        var message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        message = message.message=="El articulo ya existe" ? "Ya existe un artículo con ese código." : message.message;
        this.presentAlert(message);
      });
    },
    async presentAlert(message) {
      console.log(message)
      const alert = await alertController.create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          //subHeader: 'Subtitle',
          message: message,
          buttons: ['OK'],
        });
      return alert.present();
    }
  } 
}
</script>