<template >
  <div class="container">
        <h1 class="text-center">Carrito de compras Vue.js 3 - Vuex </h1>
        <!-- <pre>{{productos}}</pre> -->
        <!-- {{carrito}} -->
        <hr>
        <h2 class="text-center">Seleccione sus productos</h2>
        <div class="row py-2">
          <Card
            v-for="producto of productos" :key="producto.id"
            :producto="producto"
            />
        </div>
          <Carrito/>
    </div>
</template>

<script>
import Card from './components/Card'
import Carrito from './components/Carrito'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'App',
  components: {
    Card,
    Carrito
  },
  setup(){
    const store = useStore()
    onMounted(() => {
      store.dispatch('fetchData')
    })
    // mapeamos
    const productos = computed(()=>store.state.productos)
    /* const carrito = computed(()=>store.state.carrito) */
    return { productos }
  }
}
</script>

<style>
</style>
