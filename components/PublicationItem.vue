<template>
  <section>
    <article tabindex="0">
      <summary>
        <h4><slot name="title"/></h4>
        <h5><slot name="occupation"/></h5>
        <h6>
          <slot name="location"/>
        </h6>
        <footer>
          <small><slot name="date"/></small>
        </footer>
      </summary>
      <slot/>
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
