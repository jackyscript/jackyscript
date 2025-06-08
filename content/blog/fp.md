---
date: 2025-06-08
updated: 2025-06-08
---

# Functional programming in action - Side effects

Recently, I encountered something puzzling while working with the Nuxt framework and `useAsyncData`.

I had a page where I wanted to display information about the current page out of a total number of pages. Strangely, it only worked if I refreshed the page, but would break when navigating to it from another page.

That was when I recalled a lesson from my journey into functional programming: avoid relying on side effects whenever possible.

In this case, applying a basic principle of functional programming fortunately fixed my program.

But before I begin let's start slowly with some basic explanations.

## What is Functional Programming?

Functional programming is a way of writing software where you focus on using functions to transform data, rather than changing variables or the state of your program. In functional programming, you try to avoid changing things directly (called "mutating state") and instead create new values from old ones. This makes your code easier to understand and less likely to have hidden bugs.

For example, instead of updating a variable as you go, you might write a function that takes some input and returns a new result, without changing anything outside the function.

This goes hand in hand with the concept of "immutability," where instead of changing variables, you use values that do not change once assigned. Immutability ensures that you can rely more on what the code is actually doing, without having to track its execution using a debugger or your "mental runtime environment" when reading the code.

## Nuxt and `useAsyncData`

Nuxt is a web framework built on top of Vue.js that helps developers by taking care of many things behind the scenes, like setting up pages, handling navigation, and enabling search-engine optimization (SEO). 

Nuxt does this by providing a set of conventions and built-in features that automate common tasks. For example, it automatically generates routes based on your file structure, manages server-side rendering (SSR) for better SEO, and handles data fetching in a way that works seamlessly for both client-side and server-side environments.

While you can build applications with Vue.js alone, you would need to manually configure routing, SSR, and other advanced features. Nuxt streamlines this process, letting you focus on building your app's features rather than its infrastructure.

One of the tools Nuxt provides is called `useAsyncData`. Imagine you want your website to show information from the internet, like posts or weather. The composable `useAsyncData` helps you fetch that information and display it on your page, even if it takes a little time to load. It makes sure your website waits for the data and shows it to users as soon as it's ready, without them having to refresh the page.

> In Vue and Nuxt, "composables" are special functions that help you reuse logic across different parts of your app. `useAsyncData` is one such composable. What sets a composable apart from a general utility function is its statefulness and that it handles reactive data or contains another composable.

## Set or return?

### Overwriting variables

In programming, a common pattern is to overwrite a variable with a new value as your program runs. For example, you might start with a variable called `count` set to `0`, and then update it as you process data:

```js
let count = 0;
for (const item of items) {
  count = count + 1;
}
```

This approach is straightforward and works well in many cases. However, it means the variable's value changes over time, which can sometimes make it harder to track what your program is doing, especially as things get more complex.

Admittedly this code example is very simple, you could easily replace it with the following, which would be equivalent:

```js
const count = items.length;
```

But it should serve as a simple enough example to demonstrate its side effect:

> When you change a variable's value, that's called a "side effect." Side effects can make your code harder to debug, because it's not always clear when or why a value changed.

### Example: Overwriting variables with `useAsyncData`

Now imagine a case where you take `useAsyncData` and, while doing so, you overwrite some variables—for instance, a variable displaying some paging information.

Suppose you want to fetch a list of posts and keep track of the total pages and the total number of posts. You might be tempted to overwrite those variables like this:

```vue
<template>
  <div>Found {{ totalItems }} posts | Page {{ page }} of {{ totalPages }}</div>
  <div v-for="post in posts.items">{{ post }}</div>
</template>

<script setup lang="ts">
const page = ref(1)
const totalPages = ref(0)
const totalItems = ref(0)
const { data: posts } = await useAsyncData(
  'posts',
  () => {
    const response = $fetch('https://fakeApi.com/posts/', {
      params: {
        page: page.value
      }
    })
    totalPages = response.headers.get('x-total-pages')
    totalItems = response.headers.get('x-total-count')
    return response
  }
)
</script>
```
When doing so, the page most likely will not work reliably, or generally speaking, its behavior will not be deterministic. For example, the page info could stay at its initial value, or only after doing a full page refresh might it seem to start working again.

### Returning values

In functional programming, overwriting variables is frowned upon. Preferably, values should always be returned, and new computations should be based on that output.

In this particular case, when looking into the respective [documentation](https://nuxt.com/docs/api/composables/use-async-data#params) section of Nuxt, this is the recommended method:

> The handler function should be side-effect free to ensure predictable behavior during SSR and CSR hydration. If you need to trigger side effects, use the [callOnce](https://nuxt.com/docs/api/utils/call-once) utility to do so.

### Example: Returning values with `useAsyncData`

When changing the code as shown in the example below:

```vue
<template>
  <div>Found {{ posts.totalItems }} posts | Page {{ page }} of {{ posts.totalPages }}</div>
  <div v-for="post in posts.items">{{ post }}</div>
</template>

<script setup lang="ts">
const page = ref(1)
const { data: posts } = await useAsyncData(
  'posts',
  () => {
    const response = $fetch('https://fakeApi.com/posts/', {
      params: {
        page: page.value
      }
    })
    return {
      items: response.items,
      totalPages: response.headers.get('x-total-pages'),
      totalItems: response.headers.get('x-total-count'),
    };
  }
)
</script>
```

From my perspective, this approach looks more readable; you can clearly track where the data is coming from. More importantly, after that change, the paging will work without issues and the page info will be displayed correctly.

Thanks for checking in. See you next time!

~ jacky

