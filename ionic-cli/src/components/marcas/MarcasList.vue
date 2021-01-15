<template>
  <ion-list>
    <marca-list-item
      v-for="marca in marcas"
      :key="marca.id"
      :marca="marca"
      @del-marca="del"
      @edit-marca="edit"
    ></marca-list-item>
  </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue';
import MarcaListItem from './MarcaListItem.vue';

export default {
  props: ["marcas"],
  emits: ["del-marca", "edit-marca"],
  components: {
    IonList,
    MarcaListItem
  },
  methods: {
    async del(marca) {
      this.$emit('del-marca', marca);
    },
    async edit(marca) {
      this.$emit('edit-marca', marca);
    }
  }
}
</script>