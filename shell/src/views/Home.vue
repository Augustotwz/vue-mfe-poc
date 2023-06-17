<template>
  <h1>Home</h1> 
  <h3>Host global state:</h3>
  <pre> {{ store.state }} </pre>

  <div class="flex gap-4">
    <button @click="store.commit('decrement')"> Decrement </button>
    <button @click="store.commit('increment')"> Increment </button>
  </div>
</template>

<script setup lang="ts">
import { store } from 'shell/RootStore';

</script>