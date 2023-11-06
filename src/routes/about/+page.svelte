<script>
  import Social from "$lib/components/blocks/Social.svelte";
  import Button from "$lib/components/button/Button.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import CvItem from "$lib/components/blocks/CVItem.svelte";
  import BiggerTitle from "$lib/components/typography/BiggerTitle.svelte";
  import LargeTitle from "$lib/components/typography/LargeTitle.svelte";
</script>

<div
  class="wrapper bg-cover bg-no-repeat bg-top"
  style="background-image: url(lastenrad.jpg);"
>
  <Container class="flex md:flex-row flex-col" padding fullHeight nav>
    <div class="flex flex-col md:max-w-[40%] justify-end">
      <LargeTitle>Über Mich</LargeTitle>
      <div class="bg-white mt-12 px-12 py-24 text-lg">
        <p class="mt-12 font-bold text-xl">Hi, ich bin Jens!</p>
        <p class="my-6">
          Willkommen auf meiner Seite, wo Wissenschaft auf politisches
          Engagement trifft. Als Doktorand in <strong>Bioanorganischer Chemie</strong> an der
          renommierten Technischen Universität Braunschweig erforsche ich unter
          der Anleitung von <strong>Prof. Dr. Martin Bröring</strong> die faszinierende Welt der
          Porphyrinoide. Diese Strukturen, inspiriert von der Natur, stehen
          hinter lebenswichtigen Molekülen wie Häm, dem roten Blutfarbstoff, und
          Chlorophyll, dem grünen Pflanzenfarbstoff.
        </p>
        <p class="my-6">
          Neben der Wissenschaft gehört die <strong>Softwareentwicklung</strong>
          zu meinen Interessen. Meine akademische Reise begann mit einer frühen Faszination
          für die Softwareentwicklung, die in der 7. Klasse mit meinem ersten programmierbaren
          Taschenrechner geweckt wurde. In meiner Zeit als Doktorand kombinierte
          ich meine Forschung mit der Entwicklung von Software, um wissenschaftliche
          Erkenntnisse voranzutreiben.
        </p>
        <p class="my-6">
          Als aktives Mitglied von <strong>Bündnis 90/Die GRÜNEN</strong> seit 2021,
          bin ich zutiefst interessiert an Themen rund um Digitalisierung, Mobilität,
          Klimaschutz und die Energiewende.
        </p>
        <div class="my-12">
          <Social />
        </div>
      </div>
    </div>

    <div class="flex self-end ml-auto">
      <div class="bg-white rounded p-1 text-xs my-1 opacity-50">
        &copy; Leonore Köhler
      </div>
    </div>
  </Container>
</div>
<Container padding class="my-12">
  <BiggerTitle>Lebenslauf</BiggerTitle>
  <div class="my-12">
    <CvItem
      title="Wissenschaftlicher Mitarbeiter"
      institution="Institut für Anorganische und Analytische Chemie der Technischen Universität Braunschweig"
      times="seit Juni 2018"
      image="tubs.svg"
    >
      <div>
        <ul class="list-disc">
          <li>
            Synthese und Charakterisierung anorganischer Molekülverbindungen
            unter Verwendung der etablierten Methoden.
          </li>
          <li>Anfertigung und Auswertung quantenchemischer Berechnungen.</li>
          <li>Entwicklung von Software zur Struktur- und Datenanalyse.</li>
          <li>
            Publikation der Ergebnisse in einschlägigen wissenschaftlichen
            Fachzeitschriften sowie Präsentation auf Fachtagungen in Form von
            Posterbeiträgen oder Vorträgen.
          </li>
          <li>
            Betreuung von Abschlussarbeiten, Forschungspraktika sowie
            Saalpraktika.
          </li>
        </ul>
      </div>
    </CvItem>
    <CvItem
      title="Studentische Hilfskraft"
      institution="Institut für Anorganische und Analytische Chemie der Technischen Universität Braunschweig"
      times="Aug. 2017 - Mai 2018"
      image="tubs.svg"
    >
      <div>
        <ul class="list-disc">
          <li>
            Synthese und Charakterisierung anorganischer Molekülverbindungen
          </li>
        </ul>
      </div>
    </CvItem>
    <CvItem
      title="Studentische Hilfskraft"
      institution="Institut für Anorganische und Analytische Chemie der Technischen Universität Braunschweig"
      times="November 2015 – Februar 2016 & November 2014 – Februar 2015
      "
      image="tubs.svg"
    >
      <div>
        <ul class="list-disc">
          <li>
            Tutorien für Allgemeine und Anorganische Chemie für Chemiker,
            Lebensmittelchemiker, Lehramtsstudierende, Biotechnologen und
            Biologen.
          </li>
        </ul>
      </div>
    </CvItem>
  </div>
</Container>

<Container padding class="my-12">
  <BiggerTitle>Ausbildung</BiggerTitle>
  <div class="my-12">
    <CvItem
      title="Promotion im Fachbereich Anorganische Chemie"
      institution="Institut für Anorganische und Analytische Chemie der Technischen Universität Braunschweig"
      times="seit Oktober 2018"
      image="tubs.svg"
    >
      <div>
        <p>
          <strong
            >PorphyStruct: Entwicklung einer Software zur quantitativen
            Bestimmung nicht-planarer Auslenkungen von porphyrinoiden
            Makrozyklen & Synthese neuer Metallkomplexe von
            Isoporphyrin-Liganden</strong
          >; abgegeben Juli 2023.
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
        </strong><br />
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
        </strong><br />
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
    <div class="my-12">
      <h2 class=" text-3xl font-black italic tracking-tightest">
        IT-Fähigkeiten
      </h2>
      <p class="my-6">
        <strong>Programmierung in C#</strong> (sehr gut, 7+ Jahre),Python
        (fortgeschritten), TypeScript/JavaScript (fortgeschritten), GlSL
        (Grundkenntnisse), PHP (Grundkenntnisse), HTML/CSS
        <br /><strong>Arbeit mit Softwarebibliotheken und Frameworks</strong>:
        .NET, WPF, Blazor, SvelteKit, Jupyter Notebooks, pandas, scikit-learn,
        numpy, Vulkan
        <br /><strong>Softwarekenntnisse</strong>: Word (sehr gut), Excel (sehr
        gut), Powerpoint (sehr gut), ChemDraw (sehr gut), OriginPro
        (fortgeschritten), Affinity Designer (fortgeschritten), Affinity
        Publisher (fortgeschritten), Blender (Grundkenntnisse), Matlab
        (Grundkenntnisse)
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
      <h2 class=" text-3xl font-black italic tracking-tightest">Zertifikate</h2>
      <ul class="list-disc">
        <li>
          Machine Learning (Python) – Graduiertenakademie „GradTUBS“ – 2022
        </li>
        <li>
          Künstliche Intelligenz: Möglichkeiten und Grenzen
          (Einführungsworkshop) – Graduiertenakademie „GradTUBS“ – 2021
        </li>
        <li>
          Masterclass: Instagram und Twitter von A bis Z – Graduiertenakademie
          „GradTUBS“ – 2020
        </li>
      </ul>
    </div>
    <div class="my-12">
      <h2 class=" text-3xl font-black italic tracking-tightest">
        Persönliche Interessen
      </h2>
      <p>
        Softwareentwicklung, Engagement in demokratischer Partei, Fahrrad fahren
      </p>
    </div>
  </div>
</Container>