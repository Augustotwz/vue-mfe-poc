<template>
    <nav class="bg-gray-100 w-full">
        <ul class="flex flex-col font-medium md:flex-row md:space-x-8 md:mt-0">
            <li v-for="route in routes" :key="route.name">
                <router-link 
                    class="block p-4 uppercase text-gray-900 hover:bg-gray-300 "
                    :to="{ name: route.name }"
                >
                    {{ route.name }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { RouteRecordRaw } from "vue-router";

defineProps({
    routes: {
        type: Array as PropType<RouteRecordRaw[]>,
        required: true
    }
})
</script>

<style scoped lang="scss">
.active {
  font-weight: bold;
}
</style>
