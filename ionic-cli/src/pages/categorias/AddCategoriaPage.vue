<template>
  <base-layout pageTitle="Agregar Categoria" pageDefaultBackLink="/categorias">
    <create-categoria-form @save-categoria="saveCategoria"></create-categoria-form>
  </base-layout>
</template>

<script>
import BaseLayout from '@/components/base/BaseLayout.vue';
import CreateCategoriaForm from '@/components/categorias/CreateCategoriaForm.vue';
import CategoriaService from '@/services/categoria.service';
import { alertController } from '@ionic/vue';

export default {
  data() {

  },
  components: { 
    BaseLayout,
    CreateCategoriaForm
  },
  methods: {
    async saveCategoria(categoriaData) {
      CategoriaService.addCategoria({nombre: categoriaData.nombre})
      .then(res => {
        console.log(res);
        this.$router.replace('/categorias').catch(()=>{});
      })
      .catch(error => {
        var message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        message = message.message;
        this.presentAlert(message);
      });
    },
    async presentAlert(message) {
      const alert = await alertController
        .create({
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