<script setup lang="ts">
const { data: blogPosts } = await useAsyncData("blog", () =>
  queryCollection("content").order("date", "DESC").all()
);

const title = "Jacky's Blog";
const description =
  "Recent learnings and thoughts on various topics, most often related to programming.";
const totalPageDescription = computed(
  () => `There are currently ${blogPosts?.value?.length ?? 0} posts in total.`
);

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
  <small>{{ totalPageDescription }}</small>
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
