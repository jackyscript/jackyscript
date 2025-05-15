<script setup>
import PublicationItem from './PublicationItem.vue'
</script>

<template>
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
</template>

<style scoped>
ul li {
  list-style: circle;
}
</style>
