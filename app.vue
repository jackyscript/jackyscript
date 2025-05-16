<template>
  <div>
    <NuxtRouteAnnouncer />
    <header>
    <!--img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /-->
    
    <HeaderComponent></HeaderComponent>
    <MenuComponent></MenuComponent>
    <nav class="nav container">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/skills">Skills</NuxtLink>
      <NuxtLink to="/experience">Experience</NuxtLink>
      <NuxtLink to="/education">Education</NuxtLink>
      <NuxtLink to="/publication">Publications</NuxtLink>
    </nav>
  </header>

  <NuxtPage />

  <footer class="container">
    <a href="#top">Go to top</a>
  </footer>
  </div>
</template>

<style scoped>
.nav {
  padding: 20px;
  flex-wrap: wrap;
}
</style>

<style>
.router-link-exact-active {
  background-color: var(--pico-mark-background-color);
  color: var(--pico-mark-color);
}
</style>