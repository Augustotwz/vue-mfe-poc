import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      count: 0,
      name: 'John'
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
    setName (state, value) {
      state.name = value;
    }
  },
  getters: {
    getCount (state) {
      return state.count;
    },
    getName (state) {
      return state.name;
    },
  }
})