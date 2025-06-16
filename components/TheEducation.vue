<script setup lang="ts">
import EducationItem from "./EducationItem.vue";
</script>

<template>
  <EducationItem>
    <template #institution> TUM (Technical University of Munich) </template>
    <template #location>Munich</template>
    <template #degree> M. Sc. Geodäsie und Geoinformation </template>
    <template #date>Oct. 2013 ‑ Sep. 2016</template>
    <ul tabindex="0">
      <li>Specialization: Physical and Satellite geodesy</li>
      <li>
        Elected module of different specialization: Image Understanding And
        Estimation Theory
      </li>
    </ul>
  </EducationItem>
  <EducationItem>
    <template #institution> TUM (Technical University of Munich) </template>
    <template #location>Munich</template>
    <template #degree> B. Sc. Geodäsie und Geoinformation </template>
    <template #date>Oct. 2010 ‑ Sep. 2013</template>
    <p>
      During the first and second semesters, focus was placed on mathematical,
      physical and legal foundations, as well as the techniques required for
      conducting surveys and subsequent data processing/visualization.
    </p>
    <p>
      From the third to the sixth semester, the focus shifted to the scientific
      knowledge of engineering in core areas of geodesy and geoinformation.
      These are sensors used in engineering surveys, photogrammetry and remote
      sensing, higher geodesy and satellite geodesy, as well as the procedures
      undertaken in assessing the data recorded.
    </p>
    <p>
      The aim of the bachelor's thesis was the study of different models of
      interior orientation and lens distortion in camera calibration to allow
      transferability of results of one model to another model.
    </p>
  </EducationItem>
</template>
