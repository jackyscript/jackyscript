<template>
  <section>
    <article>
      <details>
        <summary tabindex="0">
          <slot name="icon" />
          <h4><slot name="degree" /></h4>
          <h5><slot name="institution" /></h5>
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
