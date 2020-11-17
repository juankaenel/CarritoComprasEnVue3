<template>
<div class="my-5">
    <h4>Carrito de compras</h4>
    <table class="table">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Item</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Acción</th>
        <th scope="col">Total</th>
        </tr>
    </thead>
    <tbody id="items">
        <!--:item viajará a item.vue-->
        <Item
        v-for="item in items" :key="item.id"
        :item="item"
        />
        
    </tbody>
    <tfoot>
        <tr id="footer-carrito">
        <th v-if="Object.keys(items).length === 0" scope="row" colspan="5"  class="text-danger text-center"> El carrito se encuentra vacío, por favor agregue productos. </th>
        <Footer v-else/>
        </tr>
    </tfoot>
    </table>
</div>
</template>

<script>
import Footer from './Footer'
import Item from './Item'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default{
    components:{
        Item, Footer,
    },
    setup(){
        const store = useStore()
        const items = computed( () => store.state.carrito )

        return {items}
    }
}
</script>