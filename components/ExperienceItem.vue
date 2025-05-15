<template>
  <section>
    <article>
      <details>
        <summary>
          <h4><slot name="company"></slot></h4>
          <h5><slot name="position"></slot></h5>
          <h6>
            <slot name="location"></slot>
          </h6>
          <footer>
            <small><slot name="date"></slot></small>
          </footer>
        </summary>
        <slot></slot>
      </details>
    </article>
  </section>
</template>

<style scoped></style>
