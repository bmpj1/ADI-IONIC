<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Codigo</ion-label>
        <ion-input type="number" required v-model="defaultArticulo.codigo"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Nombre</ion-label>
        <ion-input type="text" required v-model="defaultArticulo.nombre"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">PVP</ion-label>
        <ion-input type="number" required step='0.01' value='0.00' v-model="defaultArticulo.pvp"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Descripcion</ion-label>
        <ion-textarea rows="5" required v-model="defaultArticulo.detalles"></ion-textarea>
      </ion-item>
      
      <ion-item>
        <input placeholder="Escoge una Categoria" type="text" v-model="cat" list="categorias" style="background-color: black;">
        <datalist id="categorias">
          <option v-for="categoria in categorias" :key="categoria.id">{{categoria.nombre}}</option>
        </datalist>
      </ion-item>
      <ion-item>
        <input placeholder="Escoge una Marca" type="text" v-model="marc" list="marcas" style="background-color: black;" >
        <datalist id="marcas">
          <option v-for="marca in marcas" :key="marca.id" >{{marca.marca}}</option>
        </datalist>
      </ion-item>

    </ion-list>
    <ion-button type="submit" expand="block" fill="outline" color="success">
      SAVE
    </ion-button>
  </form>
</template>

<script>
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton, alertController } from '@ionic/vue';
import { save } from 'ionicons/icons';
import CategoriaService from '@/services/categoria.service';
import MarcaService from '@/services/marca.service';

export default {
  emits: ['save-articulo'],
  data() {
    return {
      save,
      defaultArticulo: {
        id: -1,
        codigo: null,
        nombre: null,
        pvp: null,
        valoracion: 0.01,
        marca_id: null,
        categoria_id: null,
        detalles: null
      },
      cat: "",
      marc: "",
      marcas: ["Sin marcas"],
      categorias: ["Sin marcas"]
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
  created() {
    this.getMarcas();
    this.getCategorias();
  },
  watch: {
    categorias: function(newVal) {
      this.categorias = newVal;
    },
    marcas: function(newVal) {
      this.marcas = newVal;
    }
  },
  methods: {
    submitForm() {
      var articuloData = this.defaultArticulo;
      var index = this.marcas.findIndex(m => m.marca.toUpperCase() == this.marc.toUpperCase());
      console.log(index)
      if(index==-1)
        this.presentAlert("Seleccione una marca válida.");
      else {
        articuloData.marca_id = this.marcas[index].id;
        index = this.categorias.findIndex(m => m.nombre.toUpperCase() == this.cat.toUpperCase());
        console.log(index);
        if(index==-1)
          this.presentAlert("Seleccione una categoria válida.");
        else {
          articuloData.categoria_id = this.categorias[index].id;
          this.$emit('save-articulo', articuloData);  
        }
      }
    },
    async getMarcas() {
      MarcaService.getMarcas().then(
        res=> {
          this.marcas = res.data;
      }).catch(err=> {
        console.log(err); 
      })
    },
    async getCategorias() {
      CategoriaService.getCategorias().then(
        res=> {
          this.categorias = res.data;
      }).catch(err=> {
        console.log(err);
      })
    },
    async presentAlert(message) {
      console.log(message)
      const alert = await alertController.create({
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