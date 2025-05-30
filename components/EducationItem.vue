<template>
  <section>
    <article>
      <summary tabindex="0">
        <h4><slot name="institution"/></h4>
        <h5><slot name="degree"/></h5>
        <h6>
          <slot name="location"/>
        </h6>
        <footer>
          <small><slot name="date"/></small>
        </footer>
      </summary>
    </article>
  </section>
</template>

<style scoped>
article summary:focus {
  outline: var(--pico-outline-width) solid var(--pico-primary-focus);
  outline-offset: calc(var(--pico-spacing, 1rem) * 0.5);
  color: var(--pico-primary);
}
</style>
