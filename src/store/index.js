import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: [],
    carrito: {},
  },
  mutations: {
    // Modifican el state
    SET_PRODUCTO(state, payload){ 
      state.productos = payload;
      console.log(state.productos);
    },
    SET_CARRITO( state, payload ){ // el payload es el producto que viene desde el action agregarAlCarro, viene a representar el id
      state.carrito[payload.id] = payload;
    },
    VACIAR_CARRITO(state){
      state.carrito = {}
    },
    AUMENTAR_PRODUCTO(state,payload){
      state.carrito[payload].cantidad = state.carrito[payload].cantidad+1
    },
    DISMINUIR_PRODUCTO(state,payload){
      state.carrito[payload].cantidad = state.carrito[payload].cantidad-1
      if( state.carrito[payload].cantidad === 0 ){
        delete state.carrito[payload] // si la cantidad es igual a cero quito el item del carrito
      }
    }
  },
  actions: {
    async fetchData({commit}){
      try {
        const res = await fetch('api.json')
        const data = await res.json()
        // Ejecuto commit para llamar a la mutación
        commit('SET_PRODUCTO',data)
      } catch (error) {
        console.log(error);
      }
    },
    agregarAlCarro({commit,state}, producto){ // producto viene de la vista, será el id(payload)
      state.carrito.hasOwnProperty(producto.id) 
      ? producto.cantidad = state.carrito[producto.id].cantidad + 1 // Si ya existe el producto en el carrito, aumentame en 1
      : producto.cantidad = 1 // sino cargame uno
      commit('SET_CARRITO', producto)
    },
    vaciarCarrito({commit}){
      commit('VACIAR_CARRITO')
    },
    aumentarProducto({commit}, producto){
      commit('AUMENTAR_PRODUCTO', producto)      
    },
    disminuirProducto({commit},producto){
      commit('DISMINUIR_PRODUCTO',producto)
    }
  },
  getters: {
    totalCantidad(state){
    // Objects.values devuelve un array con las propiedades enumerables del objeto pasado como parámetro. Nos permitirá hacer uso de los array methods como reduce
        return Object.values(state.carrito).reduce((acc,{cantidad})=> acc+cantidad, 0)
    },
    totalPrecio(state){
      return Object.values(state.carrito).reduce((acc,{cantidad,precio})=> acc + cantidad*precio, 0)
    },
  },
  modules: {
  }
})
