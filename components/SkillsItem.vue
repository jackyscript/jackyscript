<template>
  <section>
    <article>
      <details>
        <summary>
          <h4><slot name="type"/></h4>
        </summary>
        <slot name="skills"/>
      </details>
    </article>
  </section>
</template>

<style scoped>
article li:focus {
  outline: var(--pico-outline-width) solid var(--pico-primary-focus);
  outline-offset: calc(var(--pico-spacing, 1rem) * 0.5);
  color: var(--pico-primary);
}
</style>
