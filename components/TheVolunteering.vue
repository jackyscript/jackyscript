<script setup lang="ts">
import VolunteeringItem from './VolunteeringItem.vue'
</script>

<template>
  <VolunteeringItem>
    <template #organisation>
      codebar
    </template>
    <template #role>Volunteer</template>
    <template #date>since Oct. 2024</template>
    <p>codebar is a charity that enables the growth of a diverse tech community by providing a mutual exchange platform and running free programming workshops for fellow people aspiring and engaging in tech.</p>
    <p>I answer questions about programming and related topics, and offer advice on the community platform.</p>
  </VolunteeringItem>

  <VolunteeringItem>
    <template #organisation>
      Labdoo.org
    </template>
    <template #role>Volunteer @ Dropping Hub</template>
    <template #date>since Feb. 2025</template>
    <p>Labdoo is a non-profit global platform where people around the world collaborate to bring secondhand laptops loaded with educational software to schools and people in need using CO2-neutral means.</p>
    <p>I maintain a dropping hub, manage donated devices, and forward them accordingly.</p>
  </VolunteeringItem>
</template>

<style scoped>
ul li {
  list-style: circle;
}

ul:focus {
  outline: var(--pico-outline-width) solid var(--pico-primary-focus);
  outline-offset: calc(var(--pico-spacing, 1rem) * 0.5);
}
</style>
