<template>
  <div>
    <NuxtRouteAnnouncer />
    <header>
      <!--img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /-->

      <HeaderComponent></HeaderComponent>
      <MenuComponent></MenuComponent>
      <nav class="nav container">
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        </ul>
        <ul>
          <li>
            <details class="dropdown">
              <summary>About me</summary>
              <ul dir="rtl">
                <li><NuxtLink to="/skills">Skills</NuxtLink></li>
                <li><NuxtLink to="/experience">Experience</NuxtLink></li>
                <li><NuxtLink to="/education">Education</NuxtLink></li>
                <li><NuxtLink to="/publication">Publications</NuxtLink></li>
              </ul>
            </details>
          </li>
        </ul>
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
