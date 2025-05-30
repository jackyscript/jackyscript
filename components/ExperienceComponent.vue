<script setup lang="ts">
import ExperienceItem from './ExperienceItem.vue'
</script>

<template>
  <ExperienceItem>
    <template #company>
      &effect data solutions GmbH
    </template>
    <template #location>Berlin</template>
    <template #position> Sofware Developer </template>
    <template #date>since Jan. 2025</template>
    <ul tabindex="0">
      <li>
        Developing a networking platform for stakeholders in the German‑Czech border region.
      </li>
      <li>
        Developing a participation platform for citizens in the Treptow‑Köpenick district of Berlin.
      </li>
      <li>
        Developing a webapp to leverage IT infrastructure documentation.
      </li>
    </ul>
  </ExperienceItem>

  <ExperienceItem>
    <template #company>
      SRP ‑ Systementwicklung für Raumbezogene Planung GmbH (f.k.a Gesellschaft für Stadt‑ und
      Regionalplanung mbH)
    </template>
    <template #location>Berlin</template>
    <template #position> Project Lead </template>
    <template #date>Sep. 2018 - Dec. 2024</template>
    <ul tabindex="0">
      <li>
        Guided the technical and operational development of one of the company's products.
      </li>
      <li>
        Acted as main point of contact regarding the development and maintenance of said product.
      </li>
    </ul>
  </ExperienceItem>

  <ExperienceItem>
    <template #company>
      SRP ‑ Systementwicklung für Raumbezogene Planung GmbH (f.k.a Gesellschaft für Stadt‑ und
      Regionalplanung mbH)
    </template>
    <template #location>Berlin</template>
    <template #position> Software Developer </template>
    <template #date>Oct. 2016 - Dec. 2024</template>
    <ul tabindex="0">
      <li>
        Continued developing a geospatial metadata information system, used by multiple governmental administrations of
        Berlin.
      </li>
      <li>
        Developed a REST‑API for said system, enabling the integration of externally developed applications.
      </li>
      <li>Continued developing a desktop application to enhance and ensure metadata conformity
        of the geospatial infrastructure of Berlin, improved the UI to facilitate a readable appearance and functional
        user experience for visually impaired users.
      </li>
      <li>Conducted trainings for said desktop application, conveying fundamental knowledge for metadata creation.</li>
      <li>Developed a system to support decision making in the field of urban planning by creating a digital
        representation of Berlin, which
        collects heterogeneous data in SQL und NoSQL databases and interconnected those meaningfully for stakeholders
        using a graph
        database, enriched the latter using data of the Wikidata SPARQL query service, built an SPA client to enable
        retrieval and presentation of the data.</li>
      <li>Developed and maintained an application to improve and automate in‑house workflows, which previously were done
        manually.
      </li>
      <li>Developed a web application for a charitable foundation for capturing and monitoring data about endangered
        plant
        species in Berlin and to highlight which protective measures for which plant should be prioritized.
      </li>
      <li>Continued developing a web application to enable management of compensation areas for governmental
        administrations in Berlin and stakeholders, developed an import application to enable data integration by
        external
        users.
      </li>
      <li>Developed a SaaS hosting solution to enable autonomous management and configuration of software components and
        geodata for administrations of the districts of Berlin.</li>
      <li>Developed a new metadata management system as successor of the currently in multiple municipalities deployed
        system.</li>
    </ul>
  </ExperienceItem>

  <ExperienceItem>
    <template #company>SRP ‑ Gesellschaft für Stadt‑ und Regionalplanung mbH </template>
    <template #location>Berlin</template>
    <template #position> Working Student Application Development </template>
    <template #date>Sep. 2016 ‑ Oct. 2016</template>
    <ul tabindex="0">
      <li>
        Implemented an archive functionality for a metadata information system, which is used by multiple governmental
        administrations of Berlin.
      </li>
      <li>
        Created a feature to enable user defined configuration of archived and non‑archived datasets.
      </li>
    </ul>
  </ExperienceItem>

  <ExperienceItem>
    <template #company>GoLocal GmbH & Co. KG</template>
    <template #location>Munich</template>
    <template #position> Working Student Test Automation </template>
    <template #date>Aug. 2015 ‑ Dec. 2015</template>
    <ul tabindex="0">
      <li>
        Designed and developed automatic UI tests for the main product of the company and set up a
        test suite using the selenium framework.
      </li>
      <li>
        Worked on knowledge transfer for team members, presented a comparison of two side by side
        placed video recordings of tests done manually and automatically by the test suite in the
        final project review, showcasing the latter tests are reducing test time, consistent in
        their execution and more complete.
      </li>
    </ul>
  </ExperienceItem>

  <ExperienceItem>
    <template #company>Chair of Geoinformatics, Technical University of Munich</template>
    <template #location>Munich</template>
    <template #position> Tutor Java Programming </template>
    <template #date>Apr. 2015 ‑ Aug. 2015</template>
    <ul tabindex="0">
      <li>
        Taught students programming using the Java language in the following topics: Implement
        linked lists, B‑trees, heaps and the Dijkstra algorithm, develop a chat program using
        sockets and process XML files using the JDOM library.
      </li>
      <li>Assisted and mentored the students in tutorials.</li>
    </ul>
  </ExperienceItem>

  <ExperienceItem>
    <template #company>Institute of Astronomical and Physical Geodesy, Technical University of Munich</template>
    <template #location>Munich</template>
    <template #position> Tutor Global Geodetic Observation System and GNSS </template>
    <template #date>Nov. 2013 ‑ Mar. 2015</template>
    <ul tabindex="0">
      <li>
        Created and conducted practical tutorial lessons: Computing and modeling GRACE satellite
        data using the example of ice mass changes of greenland using MATLAB and Python/NumPy.
      </li>
      <li>Revised tutorial assignments, provided feedback to students and lecturers.</li>
    </ul>
  </ExperienceItem>
  <ExperienceItem>
    <template #company>Chair of Remote Sensing Technology, Technical University of Munich</template>
    <template #location>Munich</template>
    <template #position> Tutor Image Understanding </template>
    <template #date>Oct. 2014 ‑ Mar 2015</template>
    <ul tabindex="0">
      <li>
        Conducted practical tutorial lessons in addition to the lectures, provided introductory
        lessons for students about algorithms for feature detection in orthoimagery using
        HALCON/HDevelop.
      </li>
      <li>Revised tutorial assignments, provided feedback to students and lecturers.</li>
    </ul>
  </ExperienceItem>
  <ExperienceItem>
    <template #company>Chair of Geoinformatics, Technical University of Munich</template>
    <template #location>Munich</template>
    <template #position> Research Assistant </template>
    <template #date>Feb. 2014 ‑ Aug. 2014</template>
    <ul>
      <li>
        Participated on creating a process chain to convert a AutoCAD 3D model of the TUM to a
        IndoorGML format based one in the context of a thesis of a Ph.D student.
      </li>
      <li>Supported on preprocessing the AutoCAD 3D model to enable transformation to CityGML.</li>
    </ul>
  </ExperienceItem>
  <ExperienceItem>
    <template #company>Chair of Geoinformatics, Technical University of Munich</template>
    <template #location>Munich</template>
    <template #position> Tutor Geoinformatics </template>
    <template #date>Jun. 2013 ‑ Feb. 2014</template>
    <ul tabindex="0">
      <li>
        Created tutorial lessons for students to learn using ArcGIS for the topics of 3D modeling of
        a city model of Munich, visualization and interpolation of particulate matter data published
        by the UBA (Umweltbundesamt).
      </li>
      <li>Conducted the tutorial lessons, advised the students during their assignments.</li>
    </ul>
  </ExperienceItem>
  <ExperienceItem>
    <template #company>Chair of Photogrammetry, Technical University of Munich</template>
    <template #location>Munich</template>
    <template #position> Tutor Photogrammetry </template>
    <template #date>Jun. 2013 ‑ Jul. 2013</template>
    <ul tabindex="0">
      <li>
        Conducting camera calibration of amateur cameras for industrial applications.
      </li>
      <li>Conducted the tutorial lessons, advised the students during their assignments.</li>
    </ul>
  </ExperienceItem>
</template>

<style scoped>
ul li {
  list-style: circle;
}

ul:focus {
  outline: var(--pico-outline-width) solid var(--pico-primary-focus);
  outline-offset: calc(var(--pico-spacing, 1rem) * 0.5);
}
</style>
