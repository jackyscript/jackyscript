<script setup lang="ts">
import SkillsItem from './SkillsItem.vue'
</script>

<template>
  <SkillsItem>
    <template #type> Programming languages </template>
    <template #skills>
      <ul>
        <li>Typescript/Javascript</li>
        <li>Java</li>
        <li>Python</li>
        <li>Scala</li>
        <li>MATLAB</li>
        <li>C++</li>
      </ul>
    </template>
  </SkillsItem>

  <SkillsItem>
    <template #type> Web </template>
    <template #skills>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>HTTP</li>
        <li>Apache Tomcat</li>
        <li>REST</li>
        <li>OpenLayers</li>
        <li>JWT</li>
      </ul>
    </template>
  </SkillsItem>
  <SkillsItem>
    <template #type> Frameworks </template>
    <template #skills>
      <ul>
        <li>Vue</li>
        <li>Spring</li>
        <li>Angular</li>
        <li>GWT</li>
      </ul>
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
        <li>Netbeans</li>
        <li>Swagger/OpenAPI</li>
        <li>Selenium</li>
        <li>Pocketbase</li>
        <li>Ansible</li>
        <li>Terraform</li>
      </ul>
    </template>
  </SkillsItem>

  <SkillsItem>
    <template #type> Other </template>
    <template #skills>
      <ul>
        <li>Gitlab</li>
        <li>Gitea</li>
        <li>Bugzilla</li>
        <li>MS Office</li>
        <li>Linux</li>
        <li>LaTex</li>
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
