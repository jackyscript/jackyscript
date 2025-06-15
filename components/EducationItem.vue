<template>
  <section>
    <article>
      <summary tabindex="0">
        <h4><slot name="institution" /></h4>
        <h5><slot name="degree" /></h5>
        <h6>
          <slot name="location" />
        </h6>
        <footer>
          <small><slot name="date" /></small>
        </footer>
      </summary>
    </article>
  </section>
</template>
