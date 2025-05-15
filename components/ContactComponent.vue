<script setup>
import ContactItem from './ContactItem.vue'
</script>

<template>
  <p tabindex="0">
    Hello, my name is Jacky (pronouns "he/him"). I have a passion for reactive and functional
    programming and I care for a11y, UX and DX. I am an engineer in the field of geodesy and
    geospatial information by training. Currently, I work as a software developer at
    <a href="https://www.and-effect.com/" target="_blank" rel="noopener">&effect</a> in Berlin.
  </p>
  <ContactItem id="address" value="Berlin">
    <template #icon>
      <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <title>An address icon</title>
        <path
          d="M60.5-.12c-24.778 0-44.865 20.087-44.865 44.865 0 41.91 44.865 75.405 44.865 75.405s44.865-33.494 44.865-75.405c0-24.78-20.083-44.866-44.86-44.865zm0 64.688c-10.947 0-19.822-8.875-19.822-19.823S49.553 24.922 60.5 24.922s19.824 8.875 19.824 19.823S71.45 64.568 60.5 64.568"
        />
      </svg>
    </template>
    <template #heading>Address</template>
  </ContactItem>

  <ContactItem id="mail" value="dezhijacky.fu [ at ] gmail.com">
    <template #icon>
      <svg role="img" xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 100 75.422">
        <title>A mail icon</title>
        <path
          d="M100 75.422H0V0h100zm-88.167-6.977h76.333L63.048 42.73l-4.756 4.787c-2.06 2.058-5.007 3.236-8.105 3.236l-.052-.003c-3.11-.013-6.067-1.216-8.115-3.304l-4.835-4.895-25.352 25.896zM6.977 11.973v51.46L32.282 37.59zM67.964 37.78l25.06 25.65V12.55zM11.85 6.98l35.14 35.57c.76.774 1.916 1.218 3.174 1.22h.02c1.24 0 2.422-.437 3.162-1.18L88.722 6.978H11.85z"
        />
      </svg>
    </template>
    <template #heading>E-Mail</template>
  </ContactItem>
  <ContactItem id="github">
    <template #icon
      ><svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <title>An icon denoting code syntax</title>
        <path d="m7 8-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" />
      </svg>
    </template>
    <template #heading>Projects</template>

    <template #link>
      <a href="https://github.com/jackyscript" target="_blank" rel="noopener"
        >Go here to see my projects on github</a
      ></template
    >
  </ContactItem>
</template>

<style scoped>
svg {
  width: 24px;
  height: 1.125rem;
  margin-bottom: calc(var(--pico-spacing) * 0.25);
  color: var(--pico-primary);
}
</style>
