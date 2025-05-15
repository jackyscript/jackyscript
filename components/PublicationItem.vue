<template>
  <section>
    <article tabindex="0">
      <summary>
        <h4><slot name="title"></slot></h4>
        <h5><slot name="occupation"></slot></h5>
        <h6>
          <slot name="location"></slot>
        </h6>
        <footer>
          <small><slot name="date"></slot></small>
        </footer>
      </summary>
      <slot></slot>
    </article>
  </section>
</template>

<style scoped>
article:focus {
  outline: var(--pico-outline-width) solid var(--pico-primary-focus);
  outline-offset: calc(var(--pico-spacing, 1rem) * 0.5);
  color: var(--pico-primary);
}
</style>
