<template>
  <ion-app>

  <main-menu></main-menu>    

  <ion-router-outlet id="main"></ion-router-outlet>
  </ion-app>
</template>

<script>
import { 
  IonApp, 
  IonRouterOutlet,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import MainMenu from '@/components/base/MainMenu.vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    MainMenu
  }
});
</script>
