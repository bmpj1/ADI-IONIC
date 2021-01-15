<template>
  <ion-item>
    <ion-icon :icon="stars[0]"></ion-icon>
    <ion-icon :icon="stars[1]"></ion-icon>
    <ion-icon :icon="stars[2]"></ion-icon>
    <ion-icon :icon="stars[3]"></ion-icon>
    <ion-icon :icon="stars[4]"></ion-icon>
  </ion-item>
</template>

<script>
import { IonItem, IonIcon } from '@ionic/vue';
import { starOutline, starHalf, star } from 'ionicons/icons';

export default {
  props: ['valoracion'],
  data() {
    return {
      starOutline,
      starHalf,
      star,
      stars: [starOutline, starOutline, starOutline, starOutline, starOutline]
    }
  },
  components: {
    IonItem,
    IonIcon
  },
  created() {
    this.getValorationStars();    
  },
  watch: {
    valoracion: function (newVal, oldVal) {
      console.log('Prop valoracion changed: ', newVal, ' | was: ', oldVal)
      this.stars = [starOutline, starOutline, starOutline, starOutline, starOutline]
    },
    stars: function(newVal) {
      this.stars = newVal;
      this.getValorationStars();
    }
  },
  methods: {
    async getValorationStars() {
      var valo = this.valoracion;
      for (var i=0; valo>=0; valo-- && i++) {
        if(valo<1 && valo>=0.5)
          this.stars[i] = starHalf
        if(valo>=1 && valo<=5)
          this.stars[i] = star;
      }
    }
  }
}
</script>