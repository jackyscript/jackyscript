<template>
  <header :class="['container sticky', { scrolled: scrolled }]">
    <kbd>~/dejafu{{ subpageSuffix }}</kbd>
    <slot />
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
const subpageSuffix = computed(() => {
  if (!route.name || route.fullPath === "/") return "";
  return route.path;
});

const scrolled = ref(false);

if (import.meta.client) {
  const handleScroll = () => {
    if (import.meta.client) {
      scrolled.value = window.scrollY > 0;
    }
  };
  onMounted(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Set initial state
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });
}
</script>

<style scoped>
.sticky {
  position: sticky;
  top: 0;
  z-index: 100;
  transition: padding 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sticky.scrolled {
  background: var(--pico-background-color);
  border-block-end: 1px solid var(--pico-muted-border-color);
  padding-inline: 1rem;
}
</style>
