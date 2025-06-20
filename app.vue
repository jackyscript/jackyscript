<template>
  <NuxtRouteAnnouncer />
  <HeaderComponent> <MenuComponent /></HeaderComponent>

  <NuxtPage />

  <footer class="container">
    <a href="#top">Go to top</a>
    <hr >
    <section class="grid">
      <small
        >This website is made with care using
        <a href="https://nuxt.com" target="_blank" rel="noopener">Nuxt</a> and
        <a href="https://picocss.com" target="_blank" rel="noopener"
          >Pico CSS <svgo-spark aria-hidden="true" alt="Spark icon" /></a
        >.
      </small>
    </section>
    <section>
      <small
        >Learn more about it in the
        <a
          href="https://github.com/jackyscript/jackyscript"
          target="_blank"
          rel="noopener"
          >code repository</a
        >.
      </small>
    </section>
    <section>
      <small>
        © {{ $dayjs().format("YYYY") }} Dezhi Jacky Fu.
        <a
          href="https://creativecommons.org/licenses/by-sa/4.0/"
          target="_blank"
          rel="noopener"
          >CC BY-SA 4.0</a
        >
      </small>
    </section>
  </footer>
</template>

<style scoped>
svg {
  width: 1rem;
}

footer.container section {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
