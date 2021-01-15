<template>
  <ion-card :router-link="`/articulos/${articulo.id}`">
    <ion-card-header>
      <ion-card-title>{{ articulo.nombre }}</ion-card-title>
      <ion-card-subtitle>{{ articulo.pvp }} €</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
        {{ articulo.detalles }}
        <star-rating :valoracion="articulo.valoracion"></star-rating>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent
} from '@ionic/vue';
import StarRating from '@/components/StarRating.vue';

export default {
  props: ['articulo'],
  components: { 
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    StarRating
  }
    
}
</script>