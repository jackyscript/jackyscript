<template>
  <div>
    <NuxtRouteAnnouncer />
    <header>
    <!--img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /-->
    
    <HeaderComponent></HeaderComponent>
    <MenuComponent></MenuComponent>
    <nav class="nav container">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/skills">Skills</RouterLink>
      <RouterLink to="/experience">Experience</RouterLink>
      <RouterLink to="/education">Education</RouterLink>
      <RouterLink to="/publication">Publications</RouterLink>
    </nav>
  </header>

  <RouterView />

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