<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
          <ion-grid v-if="!edit">
            <ion-row>
              <ion-col size="8">
                  <ion-label>
                    {{ articulo.nombre }}
                  </ion-label>
              </ion-col>

              <ion-col size="4"> 
                <ion-button type="button" @click="del" expand="block" fill="outline" color="danger">
                  <ion-icon :icon="trashOutline"></ion-icon>
                </ion-button>
                  
              </ion-col>
            </ion-row>
          </ion-grid>
      </ion-card-title>
      <ion-card-subtitle>{{ articulo.pvp }} €</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
        <p>Marca: {{marca}}</p>
        <p>Categoria: {{categoria}}</p>
        <br>
        <p>Detalles: {{ articulo.detalles }}</p>
        <star-rating :valoracion="articulo.valoracion"></star-rating>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent,
  IonIcon
} from '@ionic/vue';
import { trashOutline } from 'ionicons/icons'
import StarRating from '@/components/StarRating.vue';
import MarcaService from '@/services/marca.service';
import CategoriaService from '@/services/categoria.service';

export default {
  props: ['articulo'],
  emits: ['del-articulo'],
  components: { 
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    StarRating,
    IonIcon
  },
  data() {
    return {
      trashOutline,
      marca: "Sin marca",
      categoria: "Sin categoria"
    }
  },
  watch: {
    articulo: function() {
      this.getMarca();
      this.getCategoria();
    }
  },
  methods: {
    async getMarca() {
      MarcaService.getMarcaById(this.articulo.marca_id).then(
        res=> {
          this.marca = res.data.marca
      }).catch(err=> {
        console.log(err);
      });
      
    },
    async getCategoria() {
      CategoriaService.getCategoriaById(this.articulo.categoria_id).then(
        res=> {
          this.categoria = res.data.nombre;
      }).catch(err => {
        console.log(err);
      });      
    },
    async del() {
      this.$emit("del-articulo");
    }
  }
  
    
}
</script>