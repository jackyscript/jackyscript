<template>
  <section>
    <article>
      <details>
        <summary>
          <slot name="icon" />
          <h4><slot name="role"/></h4>
          <h5><slot name="organisation"/></h5>
          <footer>
            <small><slot name="date"/></small>
          </footer>
        </summary>
        <slot/>
      </details>
    </article>
  </section>
</template>
