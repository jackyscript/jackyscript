<template>
  <h1>Hello</h1>
  <p>
    My name is Jacky Fu (pronouns "he/him"). I have a passion for reactive and
    functional programming and I care for accessibility, user and developer
    experience.
  </p>
  <p>
    I'm an engineer in the field of geodesy and geospatial information by
    training.
  </p>
  <p>
    I work as a software developer at
    <a href="https://www.and-effect.com/" target="_blank" rel="noopener"
      >&effect</a
    >
    in Berlin.
  </p>

  <hr >
  <ContactItem id="github">
    <template #icon><svgo-code aria-hidden="true" alt="Code icon" /> </template>
    <template #heading>Projects</template>

    <template #link>
      <a href="https://github.com/jackyscript" target="_blank" rel="noopener"
        >Go here to see my personal projects on github</a
      ></template
    >
  </ContactItem>

  <ContactItem id="mail">
    <template #icon><svgo-mail aria-hidden="true" alt="Mail icon" /> </template>
    <template #heading>Get in touch</template>
    <template #description>dezhijacky.fu [ at ] gmail.com</template>
    >
  </ContactItem>

  <ContactItem id="base">
    <template #icon><svgo-pin aria-hidden="true" alt="Map icon" /> </template>
    <template #heading>Based in</template>
    <template #description>Berlin, Germany</template>
    >
  </ContactItem>
</template>

<style scoped>
svg {
  width: 1.5rem;
}

.grid {
  justify-items: center;
}
</style>
