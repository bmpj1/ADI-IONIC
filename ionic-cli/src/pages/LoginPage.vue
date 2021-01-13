<template>
  <ion-page>
    <ion-content scroll="false">
      <logo></logo>
      <login @try-login="habdleLogin"></login>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonPage,
  IonContent
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
    async habdleLogin (credenciales) {
      this.$store.dispatch('auth/login', credenciales)
          .then((res) =>{
            console.log(res);
            //console.log(this.$store.state.auth.user.usuario.rol)
            //console.log(this.$store.getters["auth/getRol"])
            let role = this.$store.getters["auth/getRol"]
            console.log(role);
            //role =='admin'? 
            //  this.$router.replace('/admin').catch(()=>{})
            //  :this.$router.replace('/articulos').catch(()=>{})
            this.$router.replace('/marcas').catch(()=>{});
          },
          error => {
            this.loading = false;
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
            this.message = this.message.message.toString();
            // this.message = 'Error, contraseña/email incorrecto'
          });
    }
  }
}
</script>
