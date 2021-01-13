<template>
  <div>
    <ion-img class="ion-text-center" :src="image" :alt="marca"></ion-img>
    <h2 class="ion-text-center">{{ marca }}</h2>
  </div>
</template>

<script>
import { 
  IonImg, 
} from '@ionic/vue';

export default {
  props: ['marca', 'image'],
  components: {
    IonImg
  }
}
</script>