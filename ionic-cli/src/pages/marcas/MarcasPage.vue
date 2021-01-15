<template>
  <base-layout pageTitle="Todas las Marcas">
    <!-- ADD MARCA -->
    <template v-slot:actions-end>
      <ion-button router-link="/marcas/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <!-- MARCAS LIST -->
    <marcas-list 
      :marcas="marcas"
      @del-marca="delMarca"
      @edit-marca="editMarca"
    ></marcas-list>
    
  </base-layout> 
</template>

<script>
import { IonButton, IonIcon } from '@ionic/vue';
import { add } from 'ionicons/icons';
import MarcasList from '@/components/marcas/MarcasList.vue';
import MarcaService from '@/services/marca.service';

export default {
  data: function(){
    return {
      add,
      marcas: []
    }
  },
  components: {
    MarcasList,
    IonButton,
    IonIcon
  },
  created() {
    this.getMarcas();
  },
  watch: {  // Para que se recarge la lista
    '$route' (to, from) {
      if (to.path === '/marcas' && from.path=== '/marcas/add') {
        this.getMarcas()
      }
    }
  },
  methods: {
    async getMarcas() {
      MarcaService.getMarcas().then(
        res => {
          this.marcas = res.data;
      }).catch(err =>{
          console.log(err.response);
      });
    },
    async delMarca(marca) {
      MarcaService.deleteMarca(marca.id).then(
        () =>{
          this.marcas.splice(this.marcas.indexOf(marca),1)
      }).catch(err =>{
          console.log(err.response)
      })
    },
    async editMarca(marca) {
      var index = this.marcas.findIndex(m => m.id == marca.id);
      Object.assign(this.marcas[index], marca);
    }
  }
}
</script>