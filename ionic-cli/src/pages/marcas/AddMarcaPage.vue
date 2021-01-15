<template>
  <base-layout pageTitle="Agregar Marca" pageDefaultBackLink="/marcas">
    <create-marca-form @save-marca="saveMarca"></create-marca-form>
  </base-layout>
</template>

<script>
import BaseLayout from '@/components/base/BaseLayout.vue';
import CreateMarcaForm from '@/components/marcas/CreateMarcaForm.vue';
import MarcaService from '@/services/marca.service';
import { alertController } from '@ionic/vue';

export default {
  data() {

  },
  components: { 
    BaseLayout,
    CreateMarcaForm
  },
  methods: {
    async saveMarca(marcaData) {
      MarcaService.addMarca({marca: marcaData.marca})
      .then(res => {
        console.log(res);
        this.$router.replace('/marcas').catch(()=>{});
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