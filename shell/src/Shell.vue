<template>
  <div class="w-full min-h-screen">
    <TheNavbar :routes="routes" />
    <main class="w-full p-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from "./components/TheNavbar.vue";
import { routes } from "./router"
</script>
