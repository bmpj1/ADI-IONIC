<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Categoria</ion-label>
        <ion-input type="text" required v-model="enteredCategoria"></ion-input>
      </ion-item> 
    </ion-list>
    <ion-button type="submit" expand="block">
      SAVE
    </ion-button>
  </form>
</template>

<script>
import { IonList, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { save } from 'ionicons/icons';

export default {
  emits: ['save-categoria'],
  data() {
    return {
      save,
      enteredCategoria: ''
    }
  },
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  },
  methods: {
    submitForm() {
      const categoriaData= { 
        nombre: this.enteredCategoria
      };
      this.$emit('save-categoria', categoriaData);
    }
  }
}
</script>