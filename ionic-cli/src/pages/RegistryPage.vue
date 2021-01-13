<template>
  <base-layout pageTitle="Registrarse" pageDefaultBackLink="/">
    
    <ion-content>
      <!-- LOGO -->
      <logo></logo>

      <!-- LOGIN FORM -->
      <form class="ion-padding" @submit.prevent="submitForm">
        
        <ion-list>
          <ion-item class="textColor">
            <ion-label position="floating" >email</ion-label>
            <ion-input type="email" required v-model="email"></ion-input>
          </ion-item>
          <ion-item class="textColor">
            <ion-label position="floating">nombre</ion-label>
            <ion-input type="text" required v-model="nombre"></ion-input>
          </ion-item>
          <ion-item class="textColor">
            <ion-label position="floating">apellidos</ion-label>
            <ion-input type="text" required v-model="apellidos"></ion-input>
          </ion-item>
          <ion-item class="textColor">
            <ion-label position="floating">telefono</ion-label>
            <ion-input type="tel" required v-model="telefono"></ion-input>
          </ion-item>
          <ion-item class="textColor">
            <ion-label position="floating">nacimiento</ion-label>
            <ion-datetime displayFormat="MM/DD/YYYY" v-model="fechaNac"></ion-datetime>
          </ion-item>
          <ion-item class="textColor">
            <ion-label position="floating">password</ion-label>
            <ion-input type="password" required v-model="password"></ion-input>
          </ion-item>
          <ion-item class="textColor">
            <ion-label position="floating">re-password</ion-label>
            <ion-input type="password" required v-model="rePassword"></ion-input>
          </ion-item>
        </ion-list>

        <br>
        <ion-button type="submit" expand="block" fill="outline" color="success">
          CONFIRM
        </ion-button>
      
      </form>

    </ion-content>
  </base-layout>
</template>

<script>
import BaseLayout from '../components/base/BaseLayout.vue';
import Logo from '../components/base/Logo.vue';

import {
  IonContent,
  IonInput,
  IonList,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/vue';

export default {
  data() {
    return {
      image: "../images/logo.png"
    }
  },
  components: { 
    BaseLayout,
    IonContent,
    IonInput,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    Logo
  },
    
}
</script>

<style scoped>
  .logoHeader {
    text-align: center !important;
    margin-top: 10% !important;
  }
  .welcomeHeader {
    text-align: center;
    font-family: "sans-serif";
  }
  .textColor {
    color:  #1ABC9C;
  }
</style>