<template>
  <!-- LOGIN FORM -->
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item class="textColor">
        <ion-label position="floating" >email</ion-label>
        <ion-input type="email" required v-model="enteredEmail"></ion-input>
      </ion-item>
      <ion-item class="textColor">
        <ion-label position="floating">password</ion-label>
        <ion-input type="password" required v-model="enteredPassword"></ion-input>
      </ion-item>
    </ion-list>
    <br>
    <ion-button type="submit" expand="block" fill="outline" color="success">
      LOGIN
    </ion-button>
    
    <!-- REGISTER -->
    <p class="ion-text-center textColor">-or-</p>
    <ion-button href="/registro" expand="block" fill="outline" color="success">Create Account</ion-button>  
  
  </form>
</template>

<script>
import { 
  IonInput,
  IonList,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/vue';

export default {
  emits: ['try-login'],
  data() {
    return {
      enteredEmail: '',
      enteredPassword: ''
    }
  },
  components: {
    IonInput,
    IonList,
    IonItem,
    IonLabel,
    IonButton
  },
  methods: {
    submitForm() {
      const credenciales = { 
        email: this.enteredEmail,
        password: this.enteredPassword
      };
      this.$emit('try-login', credenciales);
    }
  }
}
</script>