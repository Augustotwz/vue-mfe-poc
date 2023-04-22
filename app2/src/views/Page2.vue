<template>
  <h1>Page 2</h1> App2 count: {{ store.getters.getValue }}
  <div class="flex gap-4">
    <button @click="store.commit('decrement')"> Decrement </button>
    <button @click="store.commit('increment')"> Increment </button>
  </div>
</template>

<script setup lang="ts">
import { store } from "../store";

</script>