<template>
  <pre>Host global state: {{ store.state }}</pre>

  <div class="grid gap-6 mb-6 mt-2">
    <div class="flex gap-4">
      <button @click="store.commit('decrement')"> Decrement </button>
      <button @click="store.commit('increment')"> Increment </button>
    </div>
    <div>
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
      <input
        id="name"
        v-model="name"
        type="text"
        class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from "shell/RootStore";
import { computed } from "vue";

const name = computed(({
  get: () => store.getters.getName,
  set: (value: string) => { store.commit('setName', value) },
}))
</script>