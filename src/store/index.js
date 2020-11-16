import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: []
  },
  mutations: {
    // Modifican el state
    SET_PRODUCTO(state, payload){
      state.productos = payload;
      console.log(state.productos);
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
    }
  },
  modules: {
  }
})
