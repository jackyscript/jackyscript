<script setup lang="ts">
const title = "Experience";
const description = "A timeline of past and present experiences.";

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
  <div class="timeline">
    <VolunteeringItem class="circle right">
      <template #icon>
        <svgo-volunteer
          aria-hidden="true"
          alt="A open hand holding a heart icon representing a volunteering position"
        />
      </template>
      <template #organisation> Labdoo.org </template>
      <template #role>Volunteer @ Dropping Hub</template>
      <template #date>since Feb. 2025</template>
      <p>
        Labdoo is a non-profit global platform where people around the world
        collaborate to bring secondhand laptops loaded with educational software
        to schools and people in need using CO2-neutral means.
      </p>
      <p>
        I maintain a dropping hub, manage donated devices, and forward them
        accordingly.
      </p>
    </VolunteeringItem>
    <ExperienceItem class="circle right">
      <template #icon>
        <svgo-rocket
          aria-hidden="true"
          alt="Rocket icon representing a job position"
        />
      </template>
      <template #company> &effect data solutions GmbH </template>
      <template #location>Berlin</template>
      <template #position> Software Developer </template>
      <template #date>since Jan. 2025</template>
      <ul tabindex="0">
        <li>
          Developing a networking platform for stakeholders in the German‑Czech
          border region.
        </li>
        <li>
          Developing a participation platform for citizens in the
          Treptow‑Köpenick district of Berlin.
        </li>
        <li>
          Developing a webapp to leverage IT infrastructure documentation.
        </li>
      </ul>
    </ExperienceItem>
    <VolunteeringItem class="circle right">
      <template #icon>
        <svgo-volunteer
          aria-hidden="true"
          alt="A open hand holding a heart icon representing a volunteering position"
        />
      </template>
      <template #organisation> codebar </template>
      <template #role>Volunteer</template>
      <template #date>since Oct. 2024</template>
      <p>
        codebar is a charity that enables the growth of a diverse tech community
        by providing a mutual exchange platform and running free programming
        workshops for fellow people aspiring and engaging in tech.
      </p>
      <p>
        I answer questions about programming and related topics, and offer
        advice on the community platform.
      </p>
    </VolunteeringItem>
    <ExperienceItem class="circle right">
      <template #icon>
        <svgo-rocket
          aria-hidden="true"
          alt="Rocket icon representing a job position"
        />
      </template>
      <template #company>
        SRP ‑ Systementwicklung für Raumbezogene Planung GmbH (f.k.a
        Gesellschaft für Stadt‑ und Regionalplanung mbH)
      </template>
      <template #location>Berlin</template>
      <template #position> Project Lead </template>
      <template #date>Sep. 2018 - Dec. 2024</template>
      <ul tabindex="0">
        <li>
          Guided the technical and operational development of one of the
          company's products.
        </li>
        <li>
          Acted as main point of contact regarding the development and
          maintenance of said product.
        </li>
      </ul>
    </ExperienceItem>

    <ExperienceItem class="circle right">
      <template #icon>
        <svgo-rocket
          aria-hidden="true"
          alt="Rocket icon representing a job position"
        />
      </template>
      <template #company>
        SRP ‑ Systementwicklung für Raumbezogene Planung GmbH (f.k.a
        Gesellschaft für Stadt‑ und Regionalplanung mbH)
      </template>
      <template #location>Berlin</template>
      <template #position> Software Developer </template>
      <template #date>Oct. 2016 - Dec. 2024</template>
      <ul tabindex="0">
        <li>
          Continued developing a geospatial metadata information system, used by
          multiple governmental administrations of Berlin.
        </li>
        <li>
          Developed a REST‑API for said system, enabling the integration of
          externally developed applications.
        </li>
        <li>
          Continued developing a desktop application to enhance and ensure
          metadata conformity of the geospatial infrastructure of Berlin,
          improved the UI to facilitate a readable appearance and functional
          user experience for visually impaired users.
        </li>
        <li>
          Conducted trainings for said desktop application, conveying
          fundamental knowledge for metadata creation.
        </li>
        <li>
          Developed a system to support decision making in the field of urban
          planning by creating a digital representation of Berlin, which
          collects heterogeneous data in SQL und NoSQL databases and
          interconnected those meaningfully for stakeholders using a graph
          database, enriched the latter using data of the Wikidata SPARQL query
          service, built an SPA client to enable retrieval and presentation of
          the data.
        </li>
        <li>
          Developed and maintained an application to improve and automate
          in‑house workflows, which previously were done manually.
        </li>
        <li>
          Developed a web application for a charitable foundation for capturing
          and monitoring data about endangered plant species in Berlin and to
          highlight which protective measures for which plant should be
          prioritized.
        </li>
        <li>
          Continued developing a web application to enable management of
          compensation areas for governmental administrations in Berlin and
          stakeholders, developed an import application to enable data
          integration by external users.
        </li>
        <li>
          Developed a SaaS hosting solution to enable autonomous management and
          configuration of software components and geodata for administrations
          of the districts of Berlin.
        </li>
        <li>
          Developed a new metadata management system as successor of the
          currently in multiple municipalities deployed system.
        </li>
      </ul>
    </ExperienceItem>

    <ExperienceItem class="circle right">
      <template #icon>
        <svgo-rocket
          aria-hidden="true"
          alt="Rocket icon representing a job position"
        />
      </template>
      <template #company
        >SRP ‑ Gesellschaft für Stadt‑ und Regionalplanung mbH
      </template>
      <template #location>Berlin</template>
      <template #position> Working Student Application Development </template>
      <template #date>Sep. 2016 ‑ Oct. 2016</template>
      <ul tabindex="0">
        <li>
          Implemented an archive functionality for a metadata information
          system, which is used by multiple governmental administrations of
          Berlin.
        </li>
        <li>
          Created a feature to enable user defined configuration of archived and
          non‑archived datasets.
        </li>
      </ul>
    </ExperienceItem>

    <PublicationItem class="circle right">
      <template #icon>
        <svgo-publish
          aria-hidden="true"
          alt="Books icon representing a publication"
        />
      </template>
      <template #title>
        Development of a telemetry system for capturing process data in the
        field
      </template>
      <template #location>Berlin</template>
      <template #occupation>
        Master's student, master's thesis (German)
      </template>
      <template #date>Feb. 2016 ‑ Sep. 2016</template>
      <ul>
        <li>
          Designed and developed a low cost data logger using a CAN‑BUS and GNSS
          interface to capture tractor data and store the data using an OGC
          Sensor Observation Service; evaluated the OGC standard Moving Features
          for this field of application; examined and assessed the current state
          of client applications for presenting mobile sensor data.
        </li>
        <li>
          <a href="https://mediatum.ub.tum.de/node?id=1352970" target="_blank"
            >Get the thesis here</a
          >
        </li>
        <li>
          <a
            href="https://github.com/jackyscript/telemetry-client"
            target="_blank"
            >Click here to go to the revised CAN-BUS git repo on github</a
          >
        </li>
      </ul>
    </PublicationItem>
    <ExperienceItem class="circle right">
      <template #icon>
        <svgo-rocket
          aria-hidden="true"
          alt="Rocket icon representing a job position"
        />
      </template>
      <template #company>GoLocal GmbH & Co. KG</template>
      <template #location>Munich</template>
      <template #position> Working Student Test Automation </template>
      <template #date>Aug. 2015 ‑ Dec. 2015</template>
      <ul tabindex="0">
        <li>
          Designed and developed automatic UI tests for the main product of the
          company and set up a test suite using the selenium framework.
        </li>
        <li>
          Worked on knowledge transfer for team members, presented a comparison
          of two side by side placed video recordings of tests done manually and
          automatically by the test suite in the final project review,
          showcasing the latter tests are reducing test time, consistent in
          their execution and more complete.
        </li>
      </ul>
    </ExperienceItem>

    <ExperienceItem class="circle right">
      <template #icon>
        <svgo-rocket
          aria-hidden="true"
          alt="Rocket icon representing a job position"
        />
      </template>
      <template #company
        >Chair of Geoinformatics, Technical University of Munich</template
      >
      <template #location>Munich</template>
      <template #position> Tutor Java Programming </template>
      <template #date>Apr. 2015 ‑ Aug. 2015</template>
      <ul tabindex="0">
        <li>
          Taught students programming using the Java language in the following
          topics: Implement linked lists, B‑trees, heaps and the Dijkstra
          algorithm, develop a chat program using sockets and process XML files
          using the JDOM library.
        </li>
        <li>Assisted and mentored the students in tutorials.</li>
      </ul>
    </ExperienceItem>

    <ExperienceItem class="circle right">
      <template #icon>
        <svgo-rocket
          aria-hidden="true"
          alt="Rocket icon representing a job position"
        />
      </template>
      <template #company
        >Institute of Astronomical and Physical Geodesy, Technical University of
        Munich</template
      >
      <template #location>Munich</template>
      <template #position>
        Tutor Global Geodetic Observation System and GNSS
      </template>
      <template #date>Nov. 2013 ‑ Mar. 2015</template>
      <ul tabindex="0">
        <li>
          Created and conducted practical tutorial lessons: Computing and
          modeling GRACE satellite data using the example of ice mass changes of
          greenland using MATLAB and Python/NumPy.
        </li>
        <li>
          Revised tutorial assignments, provided feedback to students and
          lecturers.
        </li>
      </ul>
    </ExperienceItem>
    <ExperienceItem class="circle right">
      <template #icon>
        <svgo-rocket
          aria-hidden="true"
          alt="Rocket icon representing a job position"
        />
      </template>
      <template #company
        >Chair of Remote Sensing Technology, Technical University of
        Munich</template
      >
      <template #location>Munich</template>
      <template #position> Tutor Image Understanding </template>
      <template #date>Oct. 2014 ‑ Mar 2015</template>
      <ul tabindex="0">
        <li>
          Conducted practical tutorial lessons in addition to the lectures,
          provided introductory lessons for students about algorithms for
          feature detection in orthoimagery using HALCON/HDevelop.
        </li>
        <li>
          Revised tutorial assignments, provided feedback to students and
          lecturers.
        </li>
      </ul>
    </ExperienceItem>
    <ExperienceItem class="circle right">
      <template #icon>
        <svgo-rocket
          aria-hidden="true"
          alt="Rocket icon representing a job position"
        />
      </template>
      <template #company
        >Chair of Geoinformatics, Technical University of Munich</template
      >
      <template #location>Munich</template>
      <template #position> Research Assistant </template>
      <template #date>Feb. 2014 ‑ Aug. 2014</template>
      <ul>
        <li>
          Participated on creating a process chain to convert a AutoCAD 3D model
          of the TUM to a IndoorGML format based one in the context of a thesis
          of a Ph.D student.
        </li>
        <li>
          Supported on preprocessing the AutoCAD 3D model to enable
          transformation to CityGML.
        </li>
      </ul>
    </ExperienceItem>

    <EducationItem class="circle right">
      <template #icon>
        <svgo-university
          aria-hidden="true"
          alt="Academic cap icon representing education"
        />
      </template>
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
    <ExperienceItem class="circle right">
      <template #icon>
        <svgo-rocket
          aria-hidden="true"
          alt="Rocket icon representing a job position"
        />
      </template>
      <template #company
        >Chair of Geoinformatics, Technical University of Munich</template
      >
      <template #location>Munich</template>
      <template #position> Tutor Geoinformatics </template>
      <template #date>Jun. 2013 ‑ Feb. 2014</template>
      <ul tabindex="0">
        <li>
          Created tutorial lessons for students to learn using ArcGIS for the
          topics of 3D modeling of a city model of Munich, visualization and
          interpolation of particulate matter data published by the UBA
          (Umweltbundesamt).
        </li>
        <li>
          Conducted the tutorial lessons, advised the students during their
          assignments.
        </li>
      </ul>
    </ExperienceItem>
    <ExperienceItem class="circle right">
      <template #icon>
        <svgo-rocket
          aria-hidden="true"
          alt="Rocket icon representing a job position"
        />
      </template>
      <template #company
        >Chair of Photogrammetry, Technical University of Munich</template
      >
      <template #location>Munich</template>
      <template #position> Tutor Photogrammetry </template>
      <template #date>Jun. 2013 ‑ Jul. 2013</template>
      <ul tabindex="0">
        <li>
          Conducting camera calibration of amateur cameras for industrial
          applications.
        </li>
        <li>
          Conducted the tutorial lessons, advised the students during their
          assignments.
        </li>
      </ul>
    </ExperienceItem>
    <EducationItem class="circle right">
      <template #icon>
        <svgo-university
          aria-hidden="true"
          alt="Academic cap icon representing education"
        />
      </template>
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
        From the third to the sixth semester, the focus shifted to the
        scientific knowledge of engineering in core areas of geodesy and
        geoinformation. These are sensors used in engineering surveys,
        photogrammetry and remote sensing, higher geodesy and satellite geodesy,
        as well as the procedures undertaken in assessing the data recorded.
      </p>
      <p>
        The aim of the bachelor's thesis was the study of different models of
        interior orientation and lens distortion in camera calibration to allow
        transferability of results of one model to another model.
      </p>
    </EducationItem>
  </div>
</template>

<style scoped>
/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  margin: 0 auto;
}
/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: "";
  position: absolute;
  width: 2px;
  background-color: var(--pico-primary-background);
  top: 0;
  bottom: 0;
  left: 2%;
  margin-left: -3px;
}
/* Container around content */
.circle {
  padding: 0px 40px;
  position: relative;
  background-color: inherit;
}

/* The circles on the timeline */
.circle::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: var(--pico-background-color);
  border: 4px solid var(--pico-primary-border);
  bottom: 50%;
  border-radius: 50%;
  z-index: 1;
  box-shadow: var(--pico-box-shadow);
}

/* Place the container to the right */
.right {
  left: 2%;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: "";
  position: absolute;
  bottom: 50%;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid var(--pico-primary-border);
  border-width: 10px 10px 10px 0;
  border-color: transparent var(--pico-primary-border) transparent transparent;
}
/* Fix the circle for containers on the right side */
.right::after {
  left: -12px;
}

svg {
  width: 1.5rem;
}
</style>
