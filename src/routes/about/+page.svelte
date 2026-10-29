<script lang="ts">
  import Page from "#lib/components/layout/Page.svelte";
  import SectionTitle from "#lib/components/typography/SectionTitle.svelte";
  import CvItem from "#lib/components/blocks/CVItem.svelte";
  import Button from "#lib/components/button/Button.svelte";
  import SubTitle from "#lib/components/typography/SubTitle.svelte";
  import website from "#lib/util/website.js";

  // marks this page as the profile of the Person node defined in +layout.svelte
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: website.siteUrl + "/about",
    mainEntity: { "@type": "Person", "@id": website.personId, name: website.author },
  };
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>`}
</svelte:head>

<Page>
  <SubTitle tag="h1">Lebenslauf</SubTitle>
  <SectionTitle primary class="mt-3">Berufserfahrung</SectionTitle>
  <CvItem
    title="Wissenschaftlicher Mitarbeiter (FAIRagro)"
    institution="Johann Heinrich von Thünen-Institut, Team Forschungs- und Geodaten"
    times="seit Mai 2024"
    image="thuenen.svg"
    tags={["Datenanalyse", "Forschungsdatenmanagement", "Datenpipelines", "Softwareentwicklung", "Reproduzierbarkeit"]}
  >
    <div>
      <ul class="list-disc">
        <li>Entwicklung einer Software zur automatisierten Erstellung von Datenpipelines und Workflows (Anwendungen in Rust).</li>
        <li>Konzeption und Implementierung reproduzierbarer Datenverarbeitungs- und Analyseprozesse</li>
        <li>Analyse und Strukturierung komplexer Forschungsdaten im Kontext landwirtschaftlicher und umweltbezogener Fragestellungen</li>
        <li>Mitarbeit im NFDI-Konsortium <a href="https://fairagro.net">FAIRagro</a> zur Förderung von FAIR-Datenprinzipien in der Agrarforschung.</li>
        <li>Entwicklung datengetriebener Tools (u. a. Python, Webex API) zur Unterstützung wissenschaftlicher Arbeitsprozesse.</li>
        <li>Betrieb und Nutzung Linux-basierter Entwicklungs- und Ausführungsumgebungen</li>
      </ul>
    </div>
  </CvItem>
  <CvItem
    title="Wissenschaftlicher Mitarbeiter (Doktorand)"
    institution="Technische Universität Braunschweig, Institut für Anorganische und Analytische Chemie"
    times="Juni 2018 - März 2024"
    image="tubs.svg"
    tags={["Datenanalyse", "Modellierung", "wissenschaftliches Rechnen", "Anorganische Synthese", "Spektroskopie"]}
  >
    <div>
      <ul class="list-disc">
        <li>Entwicklung von Software zur Analyse komplexer dreidimensionaler Molekülstrukturen (Desktop & Web)</li>
        <li>Implementierung numerischer und geometrischer Analyseverfahren für wissenschaftliche Datensätze</li>
        <li>Durchführung und Auswertung quantenchemischer Simulationen (DFT) auf Hochleistungsrechnern (SLURM)</li>
        <li>Statistische Analyse experimenteller Daten (u. a. spektroskopische Datensätze) mit Python.</li>
        <li>Synthese und Charakterisierung anorganischer Molekülverbindungen mittels ESI-MS, UV/Vis-, NMR- und EPR-Spektroskopie.</li>
        <li>Publikation wissenschaftlicher Ergebnisse sowie Präsentation auf Konferenzen</li>
        <li>Betreuung von Studierenden und Anleitung wissenschaftlicher Arbeiten</li>
      </ul>
    </div>
  </CvItem>
  <CvItem title="Wissenschaftliche Hilfskraft in der Forschung" institution="Technische Universität Braunschweig, Institut für Anorganische und Analytische Chemie" times="August 2017 - Mai 2018" image="tubs.svg">
    <div>
      <ul class="list-disc">
        <li>Synthese und Charakterisierung anorganischer Molekülverbindungen</li>
      </ul>
    </div>
  </CvItem>
  <CvItem title="Studentische Hilfskraft in der Hochschullehre" institution="Technische Universität Braunschweig, Institut für Anorganische und Analytische Chemie" times="November 2014 - Februar 2016" image="tubs.svg">
    <div>
      <ul class="list-disc">
        <li>Tutorien für Allgemeine und Anorganische Chemie für Chemiker, Lebensmittelchemiker, Lehramtsstudierende, Biotechnologen und Biologen.</li>
      </ul>
    </div>
  </CvItem>

  <SectionTitle primary class="mt-3">Ausbildung</SectionTitle>
  <CvItem title="Promotion in Anorganischer Chemie" institution="Technische Universität Braunschweig, Institut für Anorganische und Analytische Chemie" times="Juni 2018 - Januar 2024" image="tubs.svg">
    <div>
      <p><strong>Abschluss mit Auszeichnung (summa cum laude)</strong></p>
      <p>Dissertation: <em>PorphyStruct: Entwicklung einer Software zur quantitativen Bestimmung nicht-planarer Auslenkungen von porphyrinoiden Makrozyklen & Synthese neuer Metallkomplexe von Isoporphyrin-Liganden</em></p>
    </div>
  </CvItem>
  <CvItem
    title="Masterstudium in Chemie"
    institution="Technische Universität Braunschweig"
    times="April 2016 - April 2018"
    image="tubs.svg"
    tags={["Theoretische und experimentelle Spektroskopie", "Molekulare Modellierungen", "Datenanalyse physikalisch-chemischer Systeme"]}
  >
    <div>
      <p><strong>Abschluss mit Auszeichung (1.3)</strong></p>
      <p>Masterarbeit: <em>Kobaltkomplexe von Isoporphyrin-Liganden</em></p>
    </div>
  </CvItem>

  <CvItem title="Bachelorstudium Lehramt Chemie und Mathematik" institution="Technische Universität Braunschweig" times="Oktober 2011 - April 2016" image="tubs.svg">
    <div>
      <p><strong>Abschluss (2.1)</strong></p>
      <p>Bachelorarbeit: <em>Effiziente Eintopfsynthese neuer Metalloisoporphyrine</em></p>
    </div>
  </CvItem>
  <CvItem title="Allgemeine Hochschulreife (Abitur)" institution="Gymnasium Uslar" times="Juni 2011" image="gymUs.png">
    <div>
      <strong> Abschluss (2.4) </strong>
    </div>
  </CvItem>
  <SectionTitle primary class="mt-3">Kommunalpolitik und Gremien</SectionTitle>
  <CvItem title="Ratsmitglied (Ratsherr der Stadt Braunschweig)" institution="Gruppe BÜNDNIS 90/DIE GRÜNEN - Volt - Die PARTEI" times="seit November 2026" image="gruene.svg" tags={[]}>
    <strong>Sprecher für A, B, C und die 6</strong>
    <ul class="list-disc">
      <li>Ordentliches Mitglied im Auschuss 1</li>
      <li>Ordentliches Mitglied im Auschuss 2</li>
      <li>Ordentliches Mitglied im Auschuss 3</li>
      <li>Stellvertretendes Mitglied im Auschuss 4</li>
    </ul>
  </CvItem>
  <CvItem title="Aufsichtsratsmitglied" institution="???" times="seit November 2026" image="bsvg.jpg" tags={[]}></CvItem>
  <CvItem title="Aufsichtsratsmitglied" institution="???" times="seit November 2026" image="kvm.webp" tags={[]}></CvItem>
  <CvItem title="Beiratsmitglied" institution="???" times="seit November 2026" image="bellis.png" tags={[]}></CvItem>
  <CvItem title="Beiratsmitglied" institution="???" times="seit November 2026" image="sebs.svg" tags={[]}></CvItem>
  <SectionTitle primary class="mt-3">Ehrenamt</SectionTitle>
  <CvItem title="Mitglied des Kreisvorstands" institution="BÜNDNIS 90/DIE GRÜNEN Braunschweig" times="März 2024 - Oktober 2026" image="gruene.svg" tags={["Moderation", "Projektmanagement", "Wahlanalyse", "Wahlkampfplanung"]}>
    <ul class="list-disc">
      <li>
        Wahlkampfmanager für die Europawahl 2024 und Bundestagswahl 2025
        <ul class="list-disc ml-6">
          <li>Material- und Kostenplanung</li>
          <li>Organisation von Wahlkampfaktionen</li>
          <li>Mitgliederaktivierung</li>
          <li>Wahlkampfanalyse und Berichterstattung</li>
        </ul>
      </li>
      <li>
        Mitgliederbeauftragter
        <ul class="list-disc ml-6">
          <li>Onboarding von Neumitgliedern</li>
          <li>Erstellung von Schulungsmaterial</li>
          <li>Organisation regelmäßiger Treffen/Veranstaltungen</li>
        </ul>
      </li>
    </ul>
  </CvItem>
  <SectionTitle primary class="mt-3">Fortbildungen</SectionTitle>
  <div class="mt-3">
    <ul class="list-disc ml-6">
      <li>Kommunizieren & Kooperieren – Bundesakademie für öffentliche Verwaltung (BAköV), 2026</li>
      <li>Machine Learning (Python) – Graduiertenakademie „GradTUBS“ – 2022</li>
      <li>Künstliche Intelligenz: Möglichkeiten und Grenzen (Einführungsworkshop) – Graduiertenakademie „GradTUBS“ – 2021</li>
      <li>Masterclass: Instagram und Twitter von A bis Z – Graduiertenakademie „GradTUBS“ – 2020</li>
      <li>Sachkundenachweis §11 ChemVerbotsV, bis 2017 §5 Abs. 1 Nr. 7 - TU Braunschweig, (im Rahmen des B.Sc.) 2016</li>
    </ul>
  </div>

  <SectionTitle primary class="mt-3">Kompetenzen</SectionTitle>
  <div class="mt-3">
    <h3 class=" text-xl font-black italic">IT-Fähigkeiten</h3>
    <ul>
      <li><strong>Programmierung</strong>: Rust, C#, Python, (etwas TypeScript/JavaScript für private Projekte).</li>
      <li><strong>DevOps</strong>: Git, GitHub Actions CI, Docker</li>
      <li><strong>Betriebssysteme</strong>: Windows, Linux (Ubuntu)</li>
    </ul>
  </div>
  <div class="my-3">
    <h3 class="text-xl font-black italic">Sprachen</h3>
    <p>
      <strong>Deutsch</strong> (Muttersprache), <strong>Englisch</strong>
      (C1)
    </p>
  </div>

  <SectionTitle primary class="mt-3">Mitgliedschaften</SectionTitle>
  <ul class="mt-3">
    <li>Gesellschaft Deutscher Chemiker (GdCh; seit 2018)</li>
    <li>BÜNDNIS 90/DIE GRÜNEN (seit 2021)</li>
    <li>Allgemeiner Deutscher Fahrradclub (ADFC; seit 2022)</li>
    <li>ver.di (seit 2023)</li>
    <li>Verkehrsclub Deutschland (VCD; seit 2024)</li>
    <li>Kommunalpolitische Vereinigung GRÜNE Niedersachsen (KPVGrüN, seit 2026)</li>
  </ul>

  <div class="my-6">
    <Button outlined href="/publications">Publikationsliste</Button>
    <Button outlined href="/projects">Projekte</Button>
  </div>
</Page>
