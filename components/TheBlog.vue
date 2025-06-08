<script setup lang="ts">
const { data: blogPosts } = await useAsyncData("blog", () =>
  queryCollection("content").order("date", "DESC").all()
);
</script>

<template>
  <section v-for="post in blogPosts" :key="post.id">
    <article>
      <h4>{{ post.title }}</h4>
      <p>{{ post.description }}</p>
      <small>
        <NuxtLink :to="post.path"> Continue reading </NuxtLink> -
        {{ $dayjs(post.date).format("MMMM DD, YYYY") }}
      </small>
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
