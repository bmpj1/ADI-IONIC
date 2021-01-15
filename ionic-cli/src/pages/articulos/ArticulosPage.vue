<template>
  <base-layout pageTitle="Todos los Articulos">
    <!-- ADD MARCA -->
    <template v-slot:actions-end>
      <ion-button router-link="/articulos/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <articulos-list :articulos="articulos"></articulos-list>    
  </base-layout>
</template>

<script>
import BaseLayout from '@/components/base/BaseLayout.vue';
import ArticuloService from '@/services/articulo.service';
import ArticulosList from '@/components/articulos/ArticulosList.vue';
import { IonIcon, IonButton } from '@ionic/vue'
import { add } from 'ionicons/icons';

export default {

  data() {
    return {
      add,
      articulos: []
    }
  },
  components: { 
    BaseLayout,
    ArticulosList,
    IonIcon,
    IonButton
  },
  created() {
    this.getArticulos();
  },
  watch: {  // Para que se recarge la lista
    '$route' (to) {
      if (to.path === '/articulos') {
        this.getArticulos()
      }
    }
  },
  methods: {
    async getArticulos() {
      ArticuloService.getArticulos()
      .then(response => {
          this.articulos = response.data
      })
      .catch(function (error) {
          console.log(error);
      });
    }
  }
    
}
</script>