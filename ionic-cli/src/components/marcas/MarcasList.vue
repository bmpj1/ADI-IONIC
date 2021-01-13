<template>
  <ion-list>
    <marca-list-item
      v-for="marca in marcas"
      :key="marca.id"
      :marca="marca"
    ></marca-list-item>
  </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue';
import MarcaListItem from './MarcaListItem.vue';

export default {
  props: ["marcas"],
  components: {
    IonList,
    MarcaListItem
  }
}
</script>