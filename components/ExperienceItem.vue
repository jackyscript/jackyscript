<template>
  <section>
    <article>
      <details>
        <summary>
          <slot name="icon" />
          <h4><slot name="position"/></h4>
          <h5><slot name="company"/></h5>
          <h6>
            <slot name="location"/>
          </h6>
          <footer>
            <small><slot name="date"/></small>
          </footer>
        </summary>
        <slot/>
      </details>
    </article>
  </section>
</template>
