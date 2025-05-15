<script setup>
function darken() {
  document.documentElement.setAttribute('data-theme', 'dark')
}
function brighten() {
  document.documentElement.setAttribute('data-theme', 'light')
}
</script>

<template>
  <nav class="container">
    <ul>
      <li><strong>Menu</strong></li>
    </ul>
    <ul>
      <li>
        <button role="button" title="Darken" @click="darken">
          <svgo-darken aria-hidden="true" class="logo" alt="Darken" />
          <span hidden>Darken</span>
        </button>
      </li>
      <li>
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
  width: 20px;
}
</style>
