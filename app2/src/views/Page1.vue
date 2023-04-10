<template>
  <h1>Page 1</h1> Host count: {{ store.getters.getCount }}
  <div class="flex gap-4">
    <button @click="store.commit('decrement')"> Decrement </button>
    <button @click="store.commit('increment')"> Increment </button>
  </div>
</template>

<script setup lang="ts">
import { store } from "shell/RootStore";

</script>