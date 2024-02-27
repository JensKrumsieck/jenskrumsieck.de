<script>
  import Social from "$lib/components/blocks/Social.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import CvItem from "$lib/components/blocks/CVItem.svelte";
  import BiggerTitle from "$lib/components/typography/BiggerTitle.svelte";
  import LargeTitle from "$lib/components/typography/LargeTitle.svelte";
  import Title from "$lib/components/typography/Title.svelte";
</script>

<div
  class="w-full bg-cover bg-no-repeat bg-top"
  style="background-image: url(lap.jpg);"
>
  <Container class="flex md:flex-row flex-col" padding nav>
    <div class="flex flex-col md:max-w-[50%] justify-end">
      <LargeTitle>Über Mich</LargeTitle>
      <div class="bg-white px-12 py-12 text-lg">
        <p class="font-bold text-xl">Hi, ich bin Jens!</p>
        <p class="my-3">
          Als Doktorand in <strong>Anorganischer Chemie</strong> an der
          Technischen Universität Braunschweig erforsche ich in der Arbeitsgruppe
          von <strong>Prof. Dr. Martin Bröring</strong> die faszinierende Welt der
          Porphyrinoide. Diese Strukturen, inspiriert von der Natur, stehen hinter
          lebenswichtigen Molekülen wie Häm, dem roten Blutfarbstoff, und Chlorophyll,
          dem grünen Pflanzenfarbstoff.
        </p>
        <p class="my-3">
          Neben der Wissenschaft gehört die <strong>Softwareentwicklung</strong>
          zu meinen Interessen. Meine Reise begann mit einer frühen Faszination für
          die Softwareentwicklung, die in der Schule mit dem programmierbaren Taschenrechner
          geweckt wurde. In meiner Zeit als Doktorand kombinierte ich meine Forschung
          mit der Entwicklung von Software, um wissenschaftliche Erkenntnisse voranzutreiben.
        </p>
        <div class="my-6">
          <Social />
        </div>
      </div>
    </div>
  </Container>
</div>
<Container padding class="my-12">
  <BiggerTitle>Lebenslauf</BiggerTitle>
  <Title>Praxiserfahrung</Title>
  <div class="my-12">
    <CvItem
      title="Wissenschaftlicher Mitarbeiter"
      institution="Institut für Anorganische und Analytische Chemie der Technischen Universität Braunschweig"
      times="Juni 2018 - März 2024"
      image="tubs.svg"
      tags={[
        "Anorganische Synthese",
        "UV/Vis-Spektroskopie",
        "NMR-Spektroskopie",
        "ESI-Massenspektrometrie",
        "Säulenchromatographie",
        "Cyclovoltammetrie",
        "Spektroelektrochemie",
        "Softwareentwicklung",
        "C#/.NET",
        "Data Science",
        "Python",
        "Dichtefunktionaltheorie (DFT)",
        "Quantenchemische Rechnungen",
        "Führungsverantwortung",
      ]}
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
      title="Wissenschaftliche Hilfskraft"
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
      times="November 2015 - Februar 2016<br/>April 2015 - Juli 2016<br/>November 2014 - Februar 2015"
      image="tubs.svg"
      tags={["Lehre", "Vermittlung von Inhalten", "Studierendenbetreuung"]}
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
  <Title>Akademischer Werdegang</Title>
  <div class="my-12">
    <CvItem
      title="Promotion im Fachbereich Anorganische Chemie"
      institution="Institut für Anorganische und Analytische Chemie der Technischen Universität Braunschweig"
      times="Juni 2018 - Januar 2024"
      image="tubs.svg"
    >
      <div>
        <p>
          <strong
            >Abschluss: summa cum laude (Mit Auszeichnung)
            PorphyStruct: Entwicklung einer Software zur quantitativen
            Bestimmung nicht-planarer Auslenkungen von porphyrinoiden
            Makrozyklen & Synthese neuer Metallkomplexe von
            Isoporphyrin-Liganden</strong
          >
        </p>
      </div>
    </CvItem>
    <CvItem
      title="Masterstudium in Chemie"
      institution="Technische Universität Braunschweig"
      times="April 2016 - April 2018"
      image="tubs.svg"
      tags={[
        "Elektrochemie",
        "Fortgeschrittene Anorganische Chemie",
        "Organometallchemie",
        "Spektroskopie an Paramagneten",
        "Theoretische Spektroskopie",
        "Biomolekulare Modellierungen",
        "Molekülspektroskopie",
      ]}
    >
      <div>
        <strong>
          Abschluss mit Auszeichung (1.3) - Kobaltkomplexe von
          Isoporphyrin-Liganden
        </strong><br />
      </div>
    </CvItem>

    <CvItem
      title="Bachelorstudium Lehramt Chemie und Mathematik"
      institution="Technische Universität Braunschweig"
      times="Oktober 2011 - April 2016"
      image="tubs.svg"
      tags={[
        "Sachkundenachweis",
        "Pädagogik",
        "Allgemeine Chemie",
        "Anorganische Chemie",
        "Organische Chemie",
        "Physikalische Chemie",
        "Computerchemie",
        "Physik",
        "Lineare Algebra",
        "Analysis",
        "Stochastik",
        "Statistik",
      ]}
    >
      <div>
        <strong>
          Abschluss (2.1) - Effiziente Eintopfsynthese neuer
          Metalloisoporphyrine
        </strong><br />
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
  <Title>Weitere Kompetenzen</Title>
  <div class="my-6">
    <div class="mt-3">
      <h2 class=" text-xl font-black italic tracking-tightest">
        IT-Fähigkeiten
      </h2>
      <p class="mt-2">
        <strong>Programmierung</strong> in C# (sehr gut, 7+ Jahre), Python
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
    <div class="my-3">
      <h2 class="text-xl font-black italic tracking-tightest">Sprachen</h2>
      <p class="my-2">
        <strong>Deutsch</strong> (Muttersprache), <strong>Englisch</strong>
        (B2), <strong>Latein</strong> (Latinum in der Schule)
      </p>
    </div>
    <div class="my-6">
      <h2 class="text-xl font-black italic tracking-tightest">Zertifikate</h2>
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
    <div class="my-6">
      <h2 class=" text-xl font-black italic tracking-tightest">
        Persönliche Interessen
      </h2>
      <p>
        Softwareentwicklung, Webdesign, Grafikdesign, Engagement in
        demokratischer Partei, Fahrrad fahren
      </p>
    </div>
    <div class="my-6">
      <h2 class=" text-xl font-black italic tracking-tightest">
        Mitgliedschaften
      </h2>
      <p>
        Gesellschaft Deutscher Chemiker (GdCh; seit 2018), BÜNDNIS 90/DIE
        GRÜNEN (seit 2021), Allgemeiner Deutscher Fahrradclub (ADFC; seit 2022),
        ver.di (seit 2023)
      </p>
    </div>
  </div>
</Container>
