<script setup lang="ts">
interface Props {
  id: string
  value?: string
}

withDefaults(defineProps<Props>(), {
  value: undefined,
})
</script>
<template>
  <section>
    <article>
      <slot name="icon"/>
      <h3><slot name="heading"/></h3>
      <p v-if="value !== undefined" />
      <slot name="link">{{ value }}</slot>
    </article>
  </section>
</template>

<style scoped>
h3 {
  line-height: 1.2;
  padding: 0;
  background: var(--pico-mark-gradient);
  background-clip: text;
}
</style>
