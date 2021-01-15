<template>
  <ion-page>
    <ion-content scroll="false">
      <logo></logo>
      <login @try-login="handleLogin"></login>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonPage,
  IonContent,
  alertController
} from '@ionic/vue';

import Login from '@/components/base/Login.vue';
import Logo from '../components/base/Logo.vue';

export default {
  data() {
    return {
      
    }
  },
  components: {
    IonPage,
    IonContent,
    Logo,
    Login
  },
  methods: {
    async handleLogin (credenciales) {
      this.$store.dispatch('auth/login', credenciales)
          .then(() =>{
            //console.log(this.$store.state.auth.user.usuario.rol)
            //console.log(this.$store.getters["auth/getRol"])
            //let role = this.$store.getters["auth/getRol"]
            //role =='admin'? 
            //  this.$router.replace('/admin').catch(()=>{})
            //  :this.$router.replace('/articulos').catch(()=>{})
            this.$router.replace('/home').catch(()=>{});
          },
          error => {
            var message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
            message = message.message.toString();
            this.presentAlert(message);
          });
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
