<script>
  import CvItem from "$lib/components/blocks/CVItem.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import BiggerTitle from "$lib/components/typography/BiggerTitle.svelte";
  import LargeTitle from "$lib/components/typography/LargeTitle.svelte";
</script>

<Container padding class="my-12">
  <LargeTitle>Lebenslauf</LargeTitle>
  <div class="my-12">
    <CvItem
      title="Wissenschaftlicher Mitarbeiter"
      institution="Technische Universität Braunschweig"
      times="seit Juni 2018"
      image="tubs.svg"
    >
      <div>
        <strong>Mitarbeit in Lehre und Forschung</strong>
        <p>
          Anorganische Synthese, UV/Vis-Spektroskopie, Massenspektrometrie,
          EPR-Spektroskopie, Quantenchemische Berechnungen,
          Software-Entwicklung, Cyclovoltammetrie und Spektroelektrochemie,
          NMR-Spektroskopie, Präsentation von Ergebnissen als Vortrag oder
          Poster, Teilnahme an zahlreichen Konferenzen
        </p>
        <br />
        <strong>Führungsverantwortung und Laborleitung</strong>
        <p>
          Betreuung von 2 Bachelorarbeiten und einem Forschungspraktikanten.
          Betreuung zahlreicher 1. und 2. Semesterlaborpraktika
        </p>
      </div>
    </CvItem>
    <CvItem
      title="Studentische Hilfskraft"
      institution="Technische Universität Braunschweig"
      times="Nov. 2014 - Feb. 2016 & Aug. 2017 - Mai 2018"
      image="tubs.svg"
    >
      <div>
        <strong>Mitarbeit in Lehre und Forschung</strong>
        <p>
          Tutor für Allgemeine und Anorganische Chemie und Chemie für Biologen
          (während den Vorlesungszeiten) Anorganische Synthese und
          Charakterisierung
        </p>
      </div>
    </CvItem>
  </div>
</Container>

<Container padding class="my-12">
  <BiggerTitle>Ausbildung</BiggerTitle>
  <div class="my-12">
    <CvItem
      title="Promotion im Fachbereich Bioanorganische Chemie"
      institution="Technische Universität Braunschweig"
      times="seit Oktober 2018"
      image="tubs.svg"
    >
      <div>
        <strong>Weiterbildungen im Rahmen des Graduiertenprogramms:</strong>
        <p>
          Machine Learning in Python, Machine Learning - Grenzen und
          Möglichkeiten, Social Media Kurs
        </p>
      </div>
    </CvItem>
    <CvItem
      title="Masterstudium in Chemie"
      institution="Technische Universität Braunschweig"
      times="April 2016 - Mai 2018"
      image="tubs.svg"
    >
      <div>
        <strong>
          Abschluss mit Auszeichung (1.3) - Kobaltkomplexe von
          Isoporphyrin-Liganden
        </strong>
        <strong> Belegte Wahlpflichtfächer: </strong>
        <p>
          Elektrochemie, Fortgeschrittene Anorganische Chemie und Spektroskopie
          an Paramagneten, Theoretische Spektroskopie, Biomolekulare
          Modellierungen
        </p>
      </div>
    </CvItem>

    <CvItem
      title="Bachelorstudium Lehramt Chemie und Mathematik"
      institution="Technische Universität Braunschweig"
      times="Oktober 2011 - April 2016"
      image="tubs.svg"
    >
      <div>
        <strong>
          Abschluss (2.1) - Effiziente Eintopfsynthese neuer
          Metalloisoporphyrine
        </strong>
        <strong> Belegte Wahlpflichtfächer: </strong>
        <p>Stochastik/Statistik</p>
        <p>
          Belegung der Voraussetzungen zur Zulassung in den Masterstudiengang
          Chemie (Studiengangswechsel) <br />Sachkundenachweis §11 ChemVerbotsV
        </p>
      </div>
    </CvItem>
    <CvItem
      title="Schulische Ausbildung mit Abitur"
      institution="Gymnasium Uslar, Orientierungsstufe Uslar, Grundschule Uslar"
      times="August 1998 - Juni 2011"
      image="gymUs.png"
    >
      <div>
        <strong> Abschluss (2.4) </strong>
      </div>
    </CvItem>
  </div>
</Container>

<Container padding class="my-12">
  <BiggerTitle>Weitere Kompetenzen</BiggerTitle>
  <div class="my-12">
    <div class="flex space-x-12">
      <img
        src="gruenebs.png"
        alt="logo"
        class="object-cover md:w-36 md:h-36 w-24 h-24 rounded-full"
      />
      <div class="flex flex-col space-y-2">
        <h2 class="text-3xl font-black italic tracking-tightest">
          Ehrenamtliches Engagement
        </h2>
        <p>
          <strong>Bündnis 90/Die GRÜNEN Braunschweig (seit 2021)</strong>
        </p>
        <p>
          Aktiv in Aktionsgruppe, Social Media Taskforce, AG Digitales, AG
          Mobilität, AG Energie
        </p>
      </div>
    </div>
    <div class="my-12">
      <h2 class=" text-3xl font-black italic tracking-tightest">
        IT-Fähigkeiten
      </h2>
      <p class="my-6">
        <strong>Programmierung in C#</strong> (10+ Jahre, seit 2018 intensiv),
        Python & Jupyter Notebooks (~1 Jahr), Typescript/Javascript (~1 Jahr) ,
        PHP (seit 2015 nicht mehr, 3+ Jahre Erfahrung), HTML/(S)CSS/XML
        <br /><strong>Arbeit mit Softwarebibliotheken und Frameworks</strong>:
        .NET(-Framework), Blazor, WPF, SvelteKit, scikit-learn, pandas, numpy,
        NextJS, WoltLab Community Framework (seit 2015 nicht mehr)
        <br /><strong>Langjährige Erfahrung mit MS-Office und Windows</strong>
        (bereits 2008 durch ECDL Zertifikat nachgewiesen)
        <br /><strong>Nutzererfahrung mit vielen Softwares</strong>: ChemDraw,
        MatLab, OriginPro, Citavi, Affinity Designer/Publisher/Photo, Visual
        Studio (Code), JetBrains Rider, git, Blender, Adobe XD, Unity
      </p>
    </div>
    <div class="my-12">
      <h2 class=" text-3xl font-black italic tracking-tightest">Sprachen</h2>
      <p class="my-6">
        <strong>Deutsch</strong> (Muttersprache), <strong>Englisch</strong>
        (fließend), <strong>Latein</strong> (Latinum in der Schule)
      </p>
    </div>
    <div class="my-12">
      <h2 class="text-3xl font-black italic tracking-tightest">Hobbys</h2>
      <p class="my-6">
        <strong>Veranstaltungen organisieren</strong> (B'90/GRÜNE),
        <strong>Lastenrad-/Fahrradfahren</strong>
        (insb. Critical Mass),
        <strong>Programmierung/Webentwicklung und Grafikdesign</strong>
      </p>
    </div>
  </div>
</Container>

<Container padding class="my-12">
  <BiggerTitle>Mitgliedschaften</BiggerTitle>
  <div class="my-6">
    <ul>
      <li>Gesellschaft Deutscher Chemiker (<em>seit 2018</em>)</li>
      <li>Bündnis 90/Die GRÜNEN (<em>seit 2021</em>)</li>
      <li>ADFC (<em>seit 2022</em>)</li>
    </ul>
  </div>
</Container>
