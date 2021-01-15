<template>
  <ion-list>
    <categoria-list-item
      v-for="categoria in categorias"
      :key="categoria.id"
      :categoria="categoria"
      @del-categoria="del"
      @edit-categoria="edit"
    ></categoria-list-item>
  </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue';
import CategoriaListItem from './CategoriaListItem.vue';

export default {
  props: ["categorias"],
  emits: ["del-categoria", "edit-categoria"],
  components: {
    IonList,
    CategoriaListItem
  },
  methods: {
    async del(categoria) {
      this.$emit('del-categoria', categoria);
    },
    async edit(categoria) {
      this.$emit('edit-categoria', categoria);
    }
  }
}
</script>