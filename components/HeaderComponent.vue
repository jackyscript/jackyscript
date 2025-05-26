<template>
  <header class="container">
    <kbd>~/dejafu{{ subpageSuffix }}</kbd>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
const subpageSuffix = computed(() => {
  if (!route.name || route.fullPath === "/") return "";
  return route.fullPath;
});
</script>
