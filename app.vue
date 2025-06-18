<template>
  <NuxtRouteAnnouncer />
  <HeaderComponent> <MenuComponent /><hr ></HeaderComponent>

  <NuxtPage />

  <footer class="container">
    <a href="#top">Go to top</a>
    <hr >
    <section>
      <small
        >This website is made with care using
        <a href="https://nuxt.com" target="_blank" rel="noopener">Nuxt</a> and
        <a href="https://picocss.com" target="_blank" rel="noopener"
          >Pico CSS <svgo-spark aria-hidden="true" alt="Spark icon" /></a
        >. Learn more about it in the
        <a
          href="https://github.com/jackyscript/jackyscript"
          target="_blank"
          rel="noopener"
          >code repository</a
        >.
      </small>
    </section>
  </footer>
</template>

<style scoped>
svg {
  width: 1rem;
}
</style>
