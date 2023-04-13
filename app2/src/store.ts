import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      value: 0
    }
  },
  mutations: {
    increment (state) {
      state.value++
    },
    decrement (state) {
      state.value--
    }
  },
  getters: {
    getValue (state) {
      return state.value;
    }
  }
})