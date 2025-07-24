<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});

const { data: otherPosts } = await useAsyncData(
  `surround-${route.path}`,
  () => {
    return queryCollectionItemSurroundings("content", route.path).order(
      "date",
      "DESC"
    );
  }
);

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
  articlePublishedTime: page.value?.date,
  articleModifiedTime: page.value?.updated,
});
</script>

<template>
  <MainComponent>
    <template v-if="page">
      <div>
        <small :data-tooltip="$dayjs(page.date).format('MMMM DD, YYYY')">
          Created {{ $dayjs(page.date).fromNow() }}
        </small>
      </div>
      <div>
        <small
          :data-tooltip="$dayjs(page.updated).format('MMMM DD, YYYY')"
          data-placement="bottom"
        >
          Last changed {{ $dayjs(page.updated).fromNow() }}
        </small>
      </div>
      <hr >
    </template>
    <ContentRenderer v-if="page" :value="page" />
    <template v-else>
      <div class="empty-page">
        <h1>Page Not Found</h1>
        <p>Oops! The content you're looking for doesn't exist.</p>
        <NuxtLink to="/">Go back home</NuxtLink>
      </div>
    </template>
    <footer>
      <nav>
        <ul>
          <li>
            <NuxtLink v-if="otherPosts?.[1]" :to="otherPosts[1].path">
              Previous post: {{ otherPosts[1].title }}
            </NuxtLink>
          </li>
        </ul>
        <ul>
          <li>
            <NuxtLink v-if="otherPosts?.[0]" :to="otherPosts[0].path">
              Next post: {{ otherPosts[0].title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </footer>
  </MainComponent>
</template>
