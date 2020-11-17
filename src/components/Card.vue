<template>
  <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 mb-3">
    <div class="card">
        <img :src="producto.thumbnailUrl" class="card-img-top" :alt="`imagen-${producto.title}`" />
        <div class="card-body">
            <h5 class="card-title">{{producto.title}}</h5>
            <p class="card-text">${{producto.precio}} </p>
            <button class="btn btn-primary" @click="agregar(producto)"> Comprar </button>
        </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
    props: ['producto'],
    setup(){
      const store = useStore()
      const agregar = producto => {
        /* console.log(producto); */
        store.dispatch('agregarAlCarro',producto)
      }

      return {agregar}

    }
};
</script>

<style>
</style>