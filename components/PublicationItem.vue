<template>
  <section>
    <article>
      <details>
        <summary>
          <h4><slot name="title" /></h4>
          <h5><slot name="occupation" /></h5>
          <h6>
            <slot name="location" />
          </h6>
          <footer>
            <small><slot name="date" /></small>
          </footer>
        </summary>
      <slot />
      </details>
    </article>
  </section>
</template>
