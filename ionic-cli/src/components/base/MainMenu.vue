<template>
  <!-- MAIN SIDE MENU -->
    <ion-menu side="start" menu-id="mainMenu" content-id="main">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content >
      <ion-list >
        <!-- 
        <ion-menu-toggle >
          <ion-item router-link="/perfil">
            <ion-icon :icon="personCircleOutline"></ion-icon>
            <ion-label>Perfil</ion-label>
          </ion-item>
        </ion-menu-toggle>
        -->
        <div v-if="isAdmin">
          <ion-menu-toggle>
            <ion-item router-link="/marcas">
              <ion-icon :icon="businessOutline"></ion-icon>
              <ion-label>Marcas</ion-label>
            </ion-item>
          </ion-menu-toggle >
        </div>

        <div v-if="isAdmin">
          <ion-menu-toggle>
            <ion-item router-link="/categorias">
              <ion-icon :icon="listCircleOutline"></ion-icon>
              <ion-label>Categorias</ion-label>
            </ion-item>
          </ion-menu-toggle>
        </div>

        <ion-menu-toggle>
          <ion-item router-link="/articulos">
            <ion-icon :icon="apertureOutline"></ion-icon>
            <ion-label>Articulos</ion-label>
          </ion-item>
        </ion-menu-toggle>
        <!--
        <div v-if="isAdmin">
          <ion-menu-toggle>
            <ion-item router-link="/usuarios">
              <ion-icon :icon="peopleCircleOutline"></ion-icon>
              <ion-label>Usuarios</ion-label>
            </ion-item>
          </ion-menu-toggle>
        </div>
        -->
        <ion-item-divider>
        </ion-item-divider>
        
        <div v-if="loggedIn">
          <ion-menu-toggle>
            <ion-item button @click="logOut()">
              <ion-icon :icon="logOutOutline"></ion-icon>
              <ion-label>LogOut</ion-label>
            </ion-item>
          </ion-menu-toggle>
        </div>

      </ion-list>
    </ion-content>
  </ion-menu>
  
</template>

<style>

</style>

<script>
import { 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonList, 
  IonMenu, 
  IonTitle, 
  IonToolbar,
  IonMenuToggle,
  IonIcon,
  IonLabel,
  IonItemDivider
} from '@ionic/vue';

import { 
  personCircleOutline,
  businessOutline,
  listCircleOutline,
  apertureOutline,
  peopleCircleOutline,
  logOutOutline
} from 'ionicons/icons';

import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      personCircleOutline,
      businessOutline,
      listCircleOutline,
      apertureOutline,
      peopleCircleOutline,
      logOutOutline
    }
  },
  components: {
    IonContent, 
    IonHeader, 
    IonItem, 
    IonList, 
    IonMenu, 
    IonTitle, 
    IonToolbar,
    IonMenuToggle,
    IonIcon,
    IonLabel,
    IonItemDivider
  },
  computed: {
    isAdmin() {
      return this.$store.getters["auth/isAdmin"];
    },
    loggedIn() {
      return this.$store.getters["auth/loggedIn"];
    }
  },
  methods: {
    logOut() {
      console.log("logout");
      this.$store.dispatch('auth/logout');
      this.$router.replace('/login').catch(()=>{});
    },
  }
});
</script>