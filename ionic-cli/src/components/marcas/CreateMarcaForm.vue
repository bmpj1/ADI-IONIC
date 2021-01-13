<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Marca</ion-label>
        <ion-input type="text" required v-model="enteredMarca"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Image URL</ion-label>
        <ion-input type="url" required v-model="enteredUrl"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Descripcion</ion-label>
        <ion-textarea rows="5" required v-model="enteredDescripcion"></ion-textarea>
      </ion-item> 
    </ion-list>
    <ion-button type="submit" expand="block">
      SAVE
    </ion-button>
  </form>
</template>

<script>
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/vue';
import { save } from 'ionicons/icons';

export default {
  emits: ['save-marca'],
  data() {
    return {
      save,
      enteredMarca: '',
      enteredUrl: '',
      enteredDescripcion: ''
    }
  },
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
  },
  methods: {
    submitForm() {
      const marcaData = { 
        marca: this.enteredMarca,
        imageUrl: this.enteredUrl,
        descripcion: this.enteredDescripcion
      };
      this.$emit('save-marca', marcaData);
    }
  }
}
</script>