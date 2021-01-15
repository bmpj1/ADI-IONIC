<template>
  <articulo-list-item 
    v-for="articulo in articulos"
    :key="articulo.id"
    :articulo="articulo"
  >
  </articulo-list-item>
</template>

<script>
import ArticuloListItem from './ArticuloListItem.vue'

export default {
  props: ['articulos'],
  components: { ArticuloListItem }
    
}
</script>