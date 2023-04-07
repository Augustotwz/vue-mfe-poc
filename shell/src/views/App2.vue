<template>
  <div ref="app2"></div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const app2 = ref();
const application = ref();

onMounted(async () => {
	const { mountMfe } = await import("app2/bootloader");
	application.value = await mountMfe(app2.value);
});

onBeforeUnmount(() => {
	application.value.destroyMfe();
});
</script>