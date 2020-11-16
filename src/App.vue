<template>
  <div class="container">
        <h1>Carrito de compras</h1>
        {{productos}}
        <hr>
        <div class="row">
          <Card/>
        </div>
    </div>
</template>

<script>
import Card from './components/Card'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'App',
  components: {
    Card,
  },
  setup(){
    const store = useStore()
    onMounted(() => {
      store.dispatch('fetchData')
    })
    const productos = computed(()=>store.state.productos)
    return {productos}
  }
}
</script>

<style>
</style>
