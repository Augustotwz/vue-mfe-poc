<template>
<!-- 
  Using the id selector allows to create the mfe 
  global style without impacting the host style
-->
 <section id="app2-mfe">
  <div class="w-full min-h-screen">
    <TheNavbar :routes="app2Routes[0].children!" />
    <section class="w-full p-4">
      <h1>App 2</h1>
      <router-view></router-view>
    </section>
  </div>
 </section>
</template>

<script setup lang="ts">
import TheNavbar from "shell/TheNavbar";
import { app2Routes } from "./router";
</script>

<style lang="scss">
@import "./index.scss";
</style>