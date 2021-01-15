<template>
    <ion-item>
      <ion-grid v-if="!edit">
        <ion-row>
          <ion-col size="6">
            <ion-item >
              <ion-label>
                {{ categoria.nombre }}
              </ion-label>
            </ion-item>
          </ion-col>
          
          <ion-col>
              <ion-item button @click="edit = !edit">
                <ion-icon :icon="pencilOutline"></ion-icon>
              </ion-item>
          </ion-col>
          <ion-col>
              <ion-item button @click="del">
                <ion-icon :icon="trashOutline"></ion-icon>
              </ion-item>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid v-else>
        <ion-row>
          <form @submit.prevent="confirmEdit">
            <ion-item>
              <ion-input :placeholder="categoria.nombre" type="text" required v-model="editCategoria"></ion-input>
              <ion-button type="submit" expand="block" fill="outline" color="success">
                <ion-icon :icon="checkmarkCircleOutline"></ion-icon>
              </ion-button>
              <ion-button type="button" @click="edit = !edit" expand="block" fill="outline" color="danger">
                <ion-icon :icon="closeCircleOutline"></ion-icon>
              </ion-button>
            </ion-item>
          </form>
        </ion-row>
      </ion-grid>
      
    </ion-item>
</template>

<script>
import { 
  IonItem,
  //IonImg,
  //IonThumbnail,
  IonLabel,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonButton,
  alertController
} from '@ionic/vue';

import {
  pencilOutline,
  trashOutline,
  checkmarkCircleOutline,
  closeCircleOutline
} from 'ionicons/icons'
import CategoriaService from '@/services/categoria.service';


export default {
  props: ["categoria"],
  emits: ['del-categoria', 'edit-categoria'],
  data() {
    return {
      pencilOutline,
      trashOutline,
      checkmarkCircleOutline,
      closeCircleOutline,
      edit: false,
      editCategoria: ''
    }
  }, 
  components: {
    IonItem,
    IonLabel,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonButton
  },
  methods: {
    async del() {
      const categoria = { id: this.categoria.id, nombre: this.categoria.nombre };
      this.$emit('del-categoria', categoria);
    },
    async confirmEdit() {
      const categoria = { id: this.categoria.id, nombre: this.editCategoria }
      CategoriaService.updateCategoria({
          id: this.categoria.id,
          nombre: this.editCategoria
      }).then(() =>{
        this.edit = !this.edit;
        this.$emit('edit-categoria', categoria);
      }).catch(error => {
          //console.log(error.response)
          var message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          message = message.message;
          this.presentAlert(message);
      })
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