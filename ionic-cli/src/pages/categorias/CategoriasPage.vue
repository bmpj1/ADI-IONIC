<template>
  <base-layout pageTitle="Todas las Categorias">
    <!-- ADD MARCA -->
    <template v-slot:actions-end>
      <ion-button router-link="/categorias/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <!-- MARCAS LIST -->
    <categorias-list 
      :categorias="categorias"
      @del-categoria="delCategoria"
      @edit-categoria="editCategoria"
    ></categorias-list>
    
  </base-layout> 
</template>

<script>
import { IonButton, IonIcon } from '@ionic/vue';
import { add } from 'ionicons/icons';
import CategoriasList from '@/components/categorias/CategoriasList.vue';
import CategoriaService from '@/services/categoria.service';

export default {
  data: function(){
    return {
      add,
      categorias: []
    }
  },
  components: {
    CategoriasList,
    IonButton,
    IonIcon
  },
  created() {
    this.getCategorias();
  },
  watch: {  // Para que se recarge la lista
    '$route' (to, from) {
      if (to.path === '/categorias' && from.path=== '/categorias/add') {
        this.getCategorias()
      }
    }
  },
  methods: {
    async getCategorias() {
      CategoriaService.getCategorias().then(
        res => {
          this.categorias = res.data;
      }).catch(err =>{
          console.log(err.response);
      });
    },
    async delCategoria(categoria) {
      CategoriaService.deleteCategoria(categoria.id).then(
        () =>{
          this.categorias.splice(this.categorias.indexOf(categoria),1)
      }).catch(err =>{
          console.log(err.response)
      })
    },
    async editCategoria(categoria) {
      var index = this.categorias.findIndex(m => m.id == categoria.id);
      Object.assign(this.categorias[index], categoria);
    }
  }
}
</script>