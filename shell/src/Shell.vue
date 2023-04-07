<template>
  <div class="w-full min-h-screen">
    <ul class="sticky top-0 bg-blue-400 text-white text-lg p-2 flex gap-8 w-full">
      <li>
        <router-link to="/home">HOST</router-link>
      </li>|
      <li>
        <router-link to="/app2">APP 2</router-link>
      </li>|
      <li>
        <router-link to="/app3">APP 3</router-link>
      </li>
    </ul>
    <section class="w-full p-4">
      <router-view></router-view>
    </section>
  </div>
</template>
