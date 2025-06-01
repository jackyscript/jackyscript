<script setup lang="ts">
import SkillsItem from "./SkillsItem.vue";
</script>

<template>
  <SkillsItem>
    <template #type> Programming languages </template>
    <template #skills>
      <p>Currently working with:</p>
      <ul>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>Python</li>
      </ul>
      <p>Previously worked with:</p>
      <ul>
        <li>Java</li>
        <li>Scala</li>
        <li>MATLAB</li>
        <li>C++</li>
      </ul>
      <p>
        These are the languages I am interested in or with which I have been
        dabbling:
      </p>
      <ul>
        <li>Rust</li>
        <li>Go</li>
      </ul>
    </template>
  </SkillsItem>

  <SkillsItem>
    <template #type> Frameworks </template>
    <template #skills>
      <p>
        Currently, I mainly work with Vue.js/Nuxt on the frontend and PocketBase
        or FastAPI on the backend.
      </p>
      <p>
        In the past, I worked with Angular on the frontend and Spring Boot on the
        backend.
      </p>
      <p>I have also worked for quite a while in desktop application programming using Java Swing.</p>
    </template>
  </SkillsItem>
  <SkillsItem>
    <template #type> SQL & NoSQL </template>
    <template #skills>
      <ul>
        <li>PostgreSQL</li>
        <li>Oracle</li>
        <li>SQL Server</li>
        <li>Neo4j</li>
        <li>SPARQL</li>
        <li>Solr</li>
      </ul>
    </template>
  </SkillsItem>
  <SkillsItem>
    <template #type> Geospatial </template>
    <template #skills>
      <ul>
        <li>OGC Standards</li>
        <li>QGIS</li>
        <li>PostGIS</li>
        <li>OpenLayers</li>
        <li>Geotools</li>
      </ul>
    </template>
  </SkillsItem>
  <SkillsItem>
    <template #type> Tools </template>
    <template #skills>
      <ul>
        <li>Docker</li>
        <li>Maven</li>
        <li>Ant</li>
        <li>Jenkins CI/CD</li>
        <li>git</li>
        <li>SVN</li>
        <li>Eclipse</li>
        <li>Visual Studio Code</li>
        <li>NetBeans</li>
        <li>Swagger/OpenAPI</li>
        <li>Selenium</li>
        <li>PocketBase</li>
        <li>Ansible</li>
        <li>Terraform</li>
      </ul>
    </template>
  </SkillsItem>

  <SkillsItem>
    <template #type> Other </template>
    <template #skills>
      <ul>
        <li>GitLab</li>
        <li>Gitea</li>
        <li>Bugzilla</li>
        <li>MS Office</li>
        <li>Linux</li>
        <li>LaTeX</li>
      </ul>
    </template>
  </SkillsItem>
  <SkillsItem>
    <template #type> Languages </template>
    <template #skills>
      <ul>
        <li>German (native)</li>
        <li>English (fluent)</li>
        <li>Chinese (good)</li>
      </ul>
    </template>
  </SkillsItem>
</template>

<style scoped>
ul li {
  list-style: circle;
}
</style>
