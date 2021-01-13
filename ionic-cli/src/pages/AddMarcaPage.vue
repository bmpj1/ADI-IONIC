<template>
  <base-layout pageTitle="Agregar Marca" pageDefaultBackLink="/marcas">
    <create-marca-form @save-marca="saveMarca"></create-marca-form>
  </base-layout>
</template>

<script>
import BaseLayout from '../components/base/BaseLayout.vue';
import CreateMarcaForm from '../components/marcas/CreateMarcaForm.vue';
import MarcaService from '../services/marca.service';

export default {
  data() {

  },
  components: { 
    BaseLayout,
    CreateMarcaForm
  },
  methods: {
    async saveMarca(marcaData) {
      console.log(marcaData);
      MarcaService.addMarca({marca: marcaData.marca})
      .then(res => {
        console.log(res);
        this.$router.replace('/marcas').catch(()=>{});
      })
      .catch(error => {
        console.log(error.response)
        /*
        this.loading = false;
        this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        this.message = this.message.message.toString();*/
      });
    }
  }
}
</script>