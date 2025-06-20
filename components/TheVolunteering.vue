<script setup lang="ts">
const title = "Volunteering";
const description = "Causes I support.";

useSeoMeta({
  title: title,
  description: description,
});
</script>

<template>
  <h1>{{ title }}</h1>
  <p>
    {{ description }}
  </p>
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