<script setup lang="ts">
const { data: blogEntries } = await useAsyncData("blog", () =>
  queryCollection("content").all()
);

</script>

<template>
  <section v-for="entry in blogEntries" :key="entry.id">
    <article>
      <body>
        <h4>{{ entry.title }}</h4>
        <p>{{ entry.description }}</p>
        <small>
          <NuxtLink :to="entry.path"> Continue reading </NuxtLink> -
          {{ entry.date }}</small
        >
      </body>
    </article>
  </section>
</template>

<style scoped>
p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
