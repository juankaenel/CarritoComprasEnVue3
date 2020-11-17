<template>
  <tr>
    <th scope="row">{{item.id}}</th>
    <td>{{item.title}}</td>
    <td>{{item.cantidad}}</td>
    <td>
      <button class="btn btn-primary btn-sm" @click="aumentar(item.id)">+</button>
      <button class="btn btn-danger btn-sm" @click="disminuir(item.id)">-</button>
    </td>
    <td>${{item.precio * item.cantidad }}</td>
  </tr>
</template>

<script>
import { useStore } from 'vuex'
export default {
  props: ['item'],
  setup(){
    const store = useStore()
    const aumentar = (id) => store.dispatch('aumentarProducto', id) // invoco al action aumentarProducto
    const disminuir = (id) => store.dispatch('disminuirProducto', id) 
    return {aumentar,disminuir}
}
};
</script>
