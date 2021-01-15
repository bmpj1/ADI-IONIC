<template>
  <base-layout pageTitle="Registrarse" pageDefaultBackLink="/login">
    
    <ion-content>
      <!-- LOGO -->
      <logo></logo>
      <!-- REGISTRY FORM -->
      <registry @try-registry="handleRegistry"></registry>

    </ion-content>
  </base-layout>
</template>

<script>
import BaseLayout from '@/components/base/BaseLayout.vue';
import Logo from '@/components/base/Logo.vue';
import Registry from '@/components/base/Registry.vue';

import { IonContent, alertController } from '@ionic/vue';

export default {
  data() {
    return {

    }
  },
  components: { 
    IonContent,
    BaseLayout,
    Logo,
    Registry
  },
  methods: {
    async handleRegistry(usuario) {
      this.$store.dispatch('auth/register', usuario).then(
        res => {
          console.log(res)
          //this.errorServer = "Usuario creado correctamente.";
          //this.successful = true;
          //if(this.$route.name != 'Admin')
            this.$router.replace('/marcas');
          //else{
          //  this.$emit('registrado', res.usuario)
          //}
        },
        error => {
          var message =
          (error.response && error.response.data) ||
            error.message ||
            error.toString();
          console.log(message)
          message = message.message;
          this.presentAlert(message);
        }
      );
    },
    async presentAlert(message) {
      const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          //subHeader: 'Subtitle',
          message: message,
          buttons: ['OK'],
        });
      return alert.present();
    }
  }
    
}

</script>

<style scoped>
  
</style>