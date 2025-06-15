<script setup lang="ts">
import { computed } from "vue";
function darken() {
  currentTheme.value = "dark";
  document.documentElement.setAttribute("data-theme", "dark");
}
function brighten() {
  currentTheme.value = "light";
  document.documentElement.setAttribute("data-theme", "light");
}

const preferredTheme = computed(() => {
  if (import.meta.client) {
    // Check if the client supports prefers-color-scheme
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light"; // Default to light if not in client context
});

const currentTheme = ref(preferredTheme.value);

if (import.meta.client) {
  watchEffect(() => {
    document.documentElement.setAttribute("class", currentTheme.value);
  });
}
</script>

<template>
  <nav class="container">
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li><NuxtLink to="/blog">Blog</NuxtLink></li>
    </ul>
    <ul>
      <li>
        <details class="dropdown">
          <summary>About</summary>
          <ul dir="rtl">
            <li><NuxtLink to="/experience">Experience</NuxtLink></li>
            <li><NuxtLink to="/publication">Publication</NuxtLink></li>
            <li><NuxtLink to="/volunteering">Volunteering</NuxtLink></li>
          </ul>
        </details>
      </li>
      <li v-if="currentTheme === 'light'">
        <button role="button" title="Darken" @click="darken">
          <svgo-darken aria-hidden="true" class="logo" alt="Darken" />
          <span hidden>Darken</span>
        </button>
      </li>
      <li v-else>
        <button role="button" title="Brighten" @click="brighten">
          <svgo-brighten aria-hidden="true" class="logo" alt="Brighten" />
          <span hidden>Brighten</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.logo {
  width: 1rem;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  min-height: 2rem;
  border-radius: 1rem;
}
</style>
