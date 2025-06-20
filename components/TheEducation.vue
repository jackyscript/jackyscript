<script setup lang="ts">
import EducationItem from "./EducationItem.vue";
const title = "Education";
const description = "More about my educational background.";

useSeoMeta({
  title: title,
  description: description,
});
</script>

<template>
  <h1>{{ title }}</h1>
  <p>
    {{ description }}
  </p>
  <PublicationItem>
    <template #title>
      Development of a telemetry system for capturing process data in the field
    </template>
    <template #location>Berlin</template>
    <template #occupation> Master's student, master's thesis (German) </template>
    <template #date>Feb. 2016 ‑ Sep. 2016</template>
    <ul>
      <li>
        Designed and developed a low cost data logger using a CAN‑BUS and GNSS interface to capture
        tractor data and store the data using an OGC Sensor Observation Service; evaluated the OGC
        standard Moving Features for this field of application; examined and assessed the current
        state of client applications for presenting mobile sensor data.
      </li>
      <li>
        <a href="https://mediatum.ub.tum.de/node?id=1352970" target="_blank">Get the thesis here</a>
      </li>
      <li>
        <a href="https://github.com/jackyscript/telemetry-client" target="_blank"
          >Click here to go to the revised CAN-BUS git repo on github</a
        >
      </li>
    </ul>
  </PublicationItem>
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
