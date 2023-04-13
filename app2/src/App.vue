<template>
  <div class="w-full min-h-screen">
    <ul class="bg-blue-200 text-white text-lg p-2 flex gap-8 w-full">
      <li>
        <router-link to="/app2/page1">Page 1</router-link>
      </li>|
      <li>
        <router-link to="/app2/page2">Page 2</router-link>
      </li>|
      <li>
        <router-link to="/home">Home</router-link>
      </li>
    </ul>
    <section class="w-full p-4">
      <h1>App 2</h1>
      <router-view></router-view>
    </section>
  </div>
</template>
