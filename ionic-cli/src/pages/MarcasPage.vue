<template>
  <!-- Siempre usar ion-page alrededor de los componentes principales de la pagina que creamos con ionic y vue  -->
  <ion-page>
  
    <ion-header>
      <ion-toolbar>
        <ion-title>Todas las Marcas</ion-title>
      </ion-toolbar>
    </ion-header>
      <ion-list>
        <ion-item >Marca1</ion-item>
        <ion-item>Marca2</ion-item>
        <ion-item>Marca3</ion-item>
        <ion-item>Marca4</ion-item>
      </ion-list>
    <ion-content>
    </ion-content>
  
  </ion-page>    
</template>

<script>
import { 
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/vue';
import MarcaService from '../services/marca.service';

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  },
  data: function(){
    return {
      marcas: []
    }
  },
  created() {
    this.getMarcas();
  },
  methods: {
    getMarcas() {
        MarcaService.getMarcas().then(
            res => {
                this.marcas = res.data;
        }).catch(err =>{
            console.log(err.response);
        })
    },
  }
}
</script>