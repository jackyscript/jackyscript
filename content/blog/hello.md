---
date: 2025-05-28
updated: 2025-06-16
---

# Hello visitor!

Welcome to my first blog post! I finally spent some time and set up `Nuxt Content` for my personal website project to provide the tools I need for blogging.

It was more difficult than I expected, but I would like to share with you what I have found out.

I created my first page, which is the page you are looking at, in the directory `content` as described in the `Nuxt Content` [documentation](https://content.nuxt.com/docs/getting-started/installation).

At the time of writing (May 2025), unfortunately, the documentation is lacking specific explanations or examples on how to integrate markdown files in an existing page structure beyond the usual index, i.e. the path at `/`, page examples.

Basically, you have to go through the following steps:

- Create a subdirectory in your `content` directory in your repository. I used `blog`, because my blogs should be listed under that path.
- Put your markdown files there.
- Query your markdown files and use the `path` property to generate `NuxtLink` elements that will link to your blog posts like so:

```vue
<script setup>
const { data: blogPosts } = await useAsyncData("blog", () =>
  queryCollection("content").all()
);
</script>

<template>
  <section v-for="post in blogPosts">
    <article>
      <body>
        <h4>{{ post.title }}</h4>
        <p>{{ post.description }}</p>
        <small>
          <NuxtLink :to="post.path">Continue reading</NuxtLink> -
          {{ post.date }}
        </small>
      </body>
    </article>
  </section>
</template>
```

- In the `pages` directory, create a subdirectory called `[blog]`. The square brackets around the directory's name will make the route [dynamic](https://nuxt.com/docs/guide/directory-structure/pages#dynamic-routes) and accessible for `Nuxt`. Add a file `[...slug].vue` in the new `[blog]` directory, this is going to be a [catch-all route](https://nuxt.com/docs/guide/directory-structure/pages#catch-all-route), with the following content:
```vue
<script setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});
</script>

<template>
  <MainComponent>
    <ContentRenderer v-if="page" :value="page" />
    <template v-else>
      <div class="empty-page">
        <h1>Page Not Found</h1>
        <p>Oops! The content you're looking for doesn't exist.</p>
        <NuxtLink to="/">Go back home</NuxtLink>
      </div>
    </template>
  </MainComponent>
</template>
```
- Using the composable `useRoute`, you can query the markdown file corresponding to the name of the current path and render that using `ContentRenderer`.

- For instance, the underlying markdown file `hello.md` for this page is set up with this configuration at the path `blog/hello`.

In summary, we can create additional markdown files in our `content/blog` directory, and the application will automatically generate new blog posts on our blog overview page.

That should be it. Hopefully, this is helpful for anyone out there.

Happy coding!

~ jacky
