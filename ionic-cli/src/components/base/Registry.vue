<template>
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
        <ion-input type="number" required v-model="telefono"></ion-input>
      </ion-item>
      <ion-item class="textColor">
        <ion-label position="floating">nacimiento</ion-label>
        <ion-datetime displayFormat="MM/DD/YYYY" required v-model="fechaNac"></ion-datetime>
      </ion-item>
      <ion-item class="textColor">
        <ion-label position="floating">password</ion-label>
        <ion-input type="password" required v-model="password"></ion-input>
      </ion-item>
      <ion-item class="textColor">
        <ion-label position="floating">re-password</ion-label>
        <ion-input type="password" required v-model="rePassword"></ion-input>
      </ion-item>
      <div v-if="password !== rePassword" class="text-danger">
        Las contraseñas no coinciden
      </div>
    </ion-list>

    <br>
    <ion-button type="submit" expand="block" fill="outline" color="success" :disabled="password!==rePassword || !fechaNac">
      CONFIRM
    </ion-button>
  
  </form>
        
</template>

<script>
import {
  IonInput,
  IonList,
  IonItem,
  IonLabel,
  IonDatetime,
  IonButton
} from '@ionic/vue';

export default {
  emits: ['try-registry'],
  data() {
    return {
      email: '',
      nombre: '',
      apellidos: '',
      telefono: '',
      fechaNac: null,
      password: '',
      rePassword: ''
    }
  },
  components: {
    IonInput,
    IonList,
    IonItem,
    IonLabel,
    IonDatetime,
    IonButton,
  },
  methods: {
    submitForm() {
      console.log()
      
      const usuario = { 
        email: this.email,
        nombre: this.nombre,
        apellidos: this.apellidos,
        telefono: this.telefono,
        fechaNac: this.fechaNac.split("T")[0],
        password: this.password
      };
      this.$emit('try-registry', usuario);
      
    }
  }
}
</script>

<style scoped>

</style>