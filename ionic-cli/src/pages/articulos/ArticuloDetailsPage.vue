<template>
  <base-layout pageTitle="Detalles del Articulo" pageDefaultBackLink="/articulos">
    <articulo-overview  
      :articulo="articulo" 
      @del-articulo="delArticulo"></articulo-overview>
  </base-layout>
</template>

<script>
import BaseLayout from '@/components/base/BaseLayout.vue';
import ArticuloOverview from '@/components/articulos/ArticuloOverview.vue';
import ArticuloService from '@/services/articulo.service';

export default {
  data() {
    return {
      articulo: { id:-1, nombre: "NULL", pvp:"NULL", detalles:"No se ha encontrado el articulo", valoracion: 5 }
    }
  },
  components: { 
    BaseLayout,
    ArticuloOverview
  },
  created() {
    this.getArticuloById();
  },
  methods: {
    async getArticuloById() {
      ArticuloService.getArticuloById(this.$route.params.id).then(
        response => {
          this.articulo = response.data;
      })
      .catch(function (error) {
          console.log(error);
      });
    },
    async delArticulo() {
      ArticuloService.deleteArticulo(this.articulo.id).then(
        () =>{
        this.$router.replace('/articulos').catch(()=>{});
      }).catch(err =>{
          console.log(err.response)
      })
    }
  }
    
}
</script>