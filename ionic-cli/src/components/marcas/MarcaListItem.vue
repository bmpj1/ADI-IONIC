<template>
  <ion-item 
    :router-link="`/marcas/${marca.id}`"
  >
    <!--
    <ion-thumbnail slot="start">
      <ion-img 
        :src="marca.image" 
        :alt="marca.marca">
      </ion-img>
    </ion-thumbnail>
    -->
    <ion-label>
      {{ marca.marca}}
    </ion-label>

  </ion-item>
</template>

<script>
import { 
  IonItem,
  //IonImg,
  //IonThumbnail,
  IonLabel
} from '@ionic/vue';

export default {
  props: ["marca"],
  components: {
    IonItem,
    // IonImg,
    // IonThumbnail,
    IonLabel
  }    
}
</script>