<script setup lang="ts">
import ContactItem from "./ContactItem.vue";
</script>

<template>
  <h1>Hello 👋</h1>
  <p>
    My name is Jacky Fu (pronouns "he/him"). I have a passion for reactive and
    functional programming and I care for accessibility, user and developer
    experience.
  </p>
  <p>
    I'm an engineer in the field of geodesy and geospatial information by
    training.
  </p>
  <p>
    I work as a software developer at
    <a href="https://www.and-effect.com/" target="_blank" rel="noopener"
      >&effect</a
    >
    in Berlin. Some tools I am working with are listed below:
  </p>
  <ul>
    <li>
      <small data-tooltip="Vue"
        ><svgo-logo aria-hidden="true" alt="Vue Logo"
      /></small>
    </li>
    <li>
      <small data-tooltip="Nuxt"
        ><svgo-icon-green aria-hidden="true" alt="Nuxt Logo"
      /></small>
    </li>
    <li>
      <small data-tooltip="TypeScript"
        ><svgo-ts-logo-128 aria-hidden="true" alt="TS Logo"
      /></small>
    </li>
    <li>
      <small data-tooltip="JS"
        ><svgo-js aria-hidden="true" alt="JS Logo"
      /></small>
    </li>
    <li>
      <small data-tooltip="Python"
        ><svgo-python-logo-only aria-hidden="true" alt="Python Logo"
      /></small>
    </li>
  </ul>

  <ContactItem id="github">
    <template #icon><svgo-code aria-hidden="true" alt="Code icon" /> </template>
    <template #heading>Projects</template>

    <template #link>
      <a href="https://github.com/jackyscript" target="_blank" rel="noopener"
        >Go here to see my personal projects on github</a
      ></template
    >
  </ContactItem>
</template>

<style scoped>
svg {
  width: 2rem;
}

ul li {
  list-style: circle;
}

ul:focus {
  outline: var(--pico-outline-width) solid var(--pico-primary-focus);
  outline-offset: calc(var(--pico-spacing, 1rem) * 0.5);
}
</style>
