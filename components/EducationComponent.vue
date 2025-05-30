<script setup lang="ts">
import EducationItem from './EducationItem.vue'
</script>

<template>
  <EducationItem>
    <template #institution> TUM (Technical University of Munich) </template>
    <template #location>Munich</template>
    <template #degree> M. Sc. Geodäsie und Geoinformation </template>
    <template #date>Okt. 2013 ‑ Sep. 2016</template>
  </EducationItem>
  <EducationItem>
    <template #institution> TUM (Technical University of Munich) </template>
    <template #location>Munich</template>
    <template #degree> B. Sc. Geodäsie und Geoinformation </template>
    <template #date>Okt. 2010 ‑ Sep. 2013</template>
  </EducationItem>
  <EducationItem>
    <template #institution> Werner‑Heisenberg‑Gymnasium </template>
    <template #location>Garching</template>
    <template #degree> Abitur </template>
    <template #date>Aug. 2001 ‑ Jun. 2010</template>
  </EducationItem>
</template>
