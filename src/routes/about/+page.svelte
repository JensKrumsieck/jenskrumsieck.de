<script lang="ts">
  import Social from "$lib/components/blocks/Social.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import CvItem from "$lib/components/blocks/CVItem.svelte";
  import BiggerTitle from "$lib/components/typography/BiggerTitle.svelte";
  import LargeTitle from "$lib/components/typography/LargeTitle.svelte";
  import Title from "$lib/components/typography/Title.svelte";
</script>

<div class="w-full bg-cover bg-no-repeat bg-top" style="background-image: url(/lap.jpg);">
  <Container class="flex md:flex-row flex-col" padding nav>
    <div class="flex flex-col md:max-w-[50%] justify-end">
      <LargeTitle>Über Mich</LargeTitle>
      <div class="bg-white px-12 py-12 text-lg">
        <p class="font-bold text-xl">Hi, ich bin Jens!</p>
        <p class="my-3">
          Ich bin promovierter Chemiker mit einer Leidenschaft für <strong>Softwareentwicklung</strong> und <strong>nachhaltiger Mobilität</strong>.
        </p>
        <p class="my-3">
          Während meiner Promotion in Anorganischer Chemie an der Technischen Universität Braunschweig habe ich in der Arbeitsgruppe von Prof. Dr. Martin Bröring die Struktur-Eigenschafts-Beziehungen von Porphyrinoiden untersucht – Molekülen, die als
          Vorbilder für Häm und Chlorophyll fungieren. Während der Forschung habe ich gezielte Softwarelösungen für wissenschaftliche Fragestellungen entwickelt - so entstand <strong>PorphyStruct</strong>, ein Open-Source-Tool zur quantitativen
          Analyse nicht-planarer Verzerrungen in Porphyrinoiden.
        </p>
        <p class="my-3">
          Aktuell entwickle ich im NFDI-Konsortium <a href="https://fairagro.net">FAIRagro</a> maßgeblich die <em>Scientific Workflow Infrastructure</em> (kurz: SciWIn). Der SciWIn-Client ist eine Kommandozeilenapplikation zur Erstellung reproduzierbarer
          Workflows auf Basis des CWL-Standards. Ziel ist es damit, wissenschaftliche Software benutzerfreundlicher, nachvollziehbarer und langfristig nutzbar zu gestalten.
        </p>
        <p class="my-3">Neben der Wissenschaft engagiere ich mich für nachhaltige Mobilität – sowohl privat als überzeugter Radfahrer als auch politisch als Mitglied der Grünen in Braunschweig, wo ich aktuell Mitglied des Vorstands bin.</p>
        <div class="my-6">
          <Social />
        </div>
      </div>
    </div>
  </Container>
</div>
<Container padding class="my-12">
  <BiggerTitle>Lebenslauf</BiggerTitle>
  <Title>Praktische Erfahrung</Title>
  <div class="my-6">
    <CvItem
      title="Research Software Engineer / Wissenschaftlicher Mitarbeiter"
      institution="Johann Heinrich von Thünen-Institut, Zentrum für Informationsmanagement"
      times="seit Mai 2024"
      image="thuenen.svg"
      tags={["Softwareentwicklung", "Forschungsdatenmanagement", "Rust", "Python", "CI/CD", "Common Workflow Language", "Linux"]}
    >
      <div>
        <ul class="list-disc">
          <li>
            Planung und Entwicklung einer Software zur automatisierten Erstellung von Datenpipelines/Workflows (<a href="https://fairagro.github.io/m4.4_sciwin_client/">SciWIn Client</a>) als Kommandozeilenapplikation in <strong>Rust</strong>.
          </li>
          <li>
            Aufbau automatisierter CI/CD-Pipelines (<strong>GitHub Actions</strong>, <strong>Docker</strong>), Nutzung von Git für Versionskontrolle.
          </li>
          <li>Projektmanagement in GitHub Projects und Erstellung von technischen Dokumentationen.</li>
          <li>Entwicklung eines Notfallkanal-Systems basierend auf der Webex API in <strong>Python</strong>.</li>
          <li>Administration von virtuellen Maschinen (Linux/Ubuntu) zur Remote-Entwicklung via SSH</li>
          <li>Mitarbeit im NFDI-Konsortium <a href="https://fairagro.net">FAIRagro</a>.</li>
        </ul>
      </div>
    </CvItem>
    <CvItem
      title="Wissenschaftlicher Mitarbeiter (Doktorand)"
      institution="Technische Universität Braunschweig, Institut für Anorganische und Analytische Chemie"
      times="Juni 2018 - März 2024"
      image="tubs.svg"
      tags={["Softwareentwicklung", "C#", ".NET", "Data Science", "Python", "CI/CD", "Quantenchemische Rechnungen", "Anorganische Synthese", "Spektroskopie"]}
    >
      <div>
        <ul class="list-disc">
          <li>
            Entwicklung einer Software (<a href="https://porphystruct.org">PorphyStruct</a>) zur Analyse komplexer 3D-Molekülstrukturdaten für Windows-Desktop und Web (<strong>C#</strong>, <strong>.NET</strong>, <strong>WPF</strong>,
            <strong>Blazor</strong>).
          </li>
          <li>Implementierung von Algorithmen zur strukturellen Analyse (inkl. "hardwarenaher" Optimierung mittels Spans)</li>
          <li>Entwicklung von Integration-Tests und Continuous Integration (GitHub Actions).</li>
          <li>Erstellen eines Tools zur Analyse von Verunreinigungen in Elementaranalysen (<a href="https://chn.jenskrumsieck.de/">CHN-Tool</a>) in C#/Blazor.</li>
          <li>Anfertigung und Auswertung quantenchemischer Berechnungen auf einem SLURM System.</li>
          <li>Analyse erhobener Forschungsdaten (z.B. spektroskopische Daten) mit Data Science Methoden in <strong>Python</strong>.</li>
          <li>Synthese und Charakterisierung anorganischer Molekülverbindungen unter Verwendung der etablierten Methoden.</li>
          <li>Publikation der Ergebnisse in einschlägigen wissenschaftlichen Fachzeitschriften sowie Präsentation auf Fachtagungen in Form von Posterbeiträgen oder Vorträgen.</li>
          <li>Betreuung von Abschlussarbeiten, Forschungspraktika sowie Saalpraktika.</li>
        </ul>
      </div>
    </CvItem>
  </div>
</Container>

<Container padding class="my-12">
  <Title>Akademischer Werdegang</Title>
  <div class="my-6">
    <CvItem title="Promotion in Anorganischer Chemie" institution="Technische Universität Braunschweig, Institut für Anorganische und Analytische Chemie" times="Juni 2018 - Januar 2024" image="tubs.svg">
      <div>
        <p>
          <strong
            >Abschluss mit Auszeichnung (summa cum laude) -
            <em>PorphyStruct: Entwicklung einer Software zur quantitativen Bestimmung nicht-planarer Auslenkungen von porphyrinoiden Makrozyklen & Synthese neuer Metallkomplexe von Isoporphyrin-Liganden</em></strong
          >
        </p>
      </div>
    </CvItem>
    <CvItem
      title="Masterstudium in Chemie"
      institution="Technische Universität Braunschweig"
      times="April 2016 - April 2018"
      image="tubs.svg"
      tags={["Theoretische Spektroskopie", "Biomolekulare Modellierungen", "Spektroskopie an Paramagneten", "Molekülspektroskopie", "Elektrochemie", "Fortgeschrittene Anorganische Chemie", "Organometallchemie"]}
    >
      <div>
        <strong>
          Abschluss mit Auszeichung (1.3) - <em>Kobaltkomplexe von Isoporphyrin-Liganden</em>
        </strong><br />
      </div>
    </CvItem>

    <CvItem title="Bachelorstudium Lehramt Chemie und Mathematik" institution="Technische Universität Braunschweig" times="Oktober 2011 - April 2016" image="tubs.svg">
      <div>
        <strong>
          Abschluss (2.1) - <em>Effiziente Eintopfsynthese neuer Metalloisoporphyrine</em>
        </strong><br />
        <p>
          Belegung der Voraussetzungen zur Zulassung in den Masterstudiengang Chemie <br />Sachkundenachweis §11 ChemVerbotsV
        </p>
      </div>
    </CvItem>
    <CvItem title="Allgemeine Hochschulreife (Abitur)" institution="Gymnasium Uslar" times="Juni 2011" image="gymUs.png">
      <div>
        <strong> Abschluss (2.4) </strong>
      </div>
    </CvItem>
  </div>
</Container>

<Container padding class="my-6">
  <Title>Tätigkeiten während des Studiums</Title>
  <div class="my-6">
    <CvItem title="Wissenschaftliche Hilfskraft in der Forschung" institution="Technische Universität Braunschweig, Institut für Anorganische und Analytische Chemie" times="August 2017 - Mai 2018" image="tubs.svg">
      <div>
        <ul class="list-disc">
          <li>Synthese und Charakterisierung anorganischer Molekülverbindungen</li>
        </ul>
      </div>
    </CvItem>
    <CvItem
      title="Studentische Hilfskraft in der Hochschullehre"
      institution="Technische Universität Braunschweig, Institut für Anorganische und Analytische Chemie"
      times="November 2015 - Februar 2016<br/>April 2015 - Juli 2016<br/>November 2014 - Februar 2015"
      image="tubs.svg"
      tags={["Lehre", "Vermittlung von Inhalten", "Studierendenbetreuung"]}
    >
      <div>
        <ul class="list-disc">
          <li>Tutorien für Allgemeine und Anorganische Chemie für Chemiker, Lebensmittelchemiker, Lehramtsstudierende, Biotechnologen und Biologen.</li>
        </ul>
      </div>
    </CvItem>
  </div>
</Container>
<Container padding class="my-">
  <Title>Ehrenamt</Title>
  <div class="my-6">
    <CvItem title="Mitglied des Kreisvorstands" institution="BÜNDNIS 90/DIE GRÜNEN Braunschweig" times="seit März 2024" image="gruene.svg" tags={["Moderation", "Projektmanagement", "Wahlanalyse", "Wahlkampfplanung"]}>
      <ul class="list-disc">
        <li>
          Wahlkampfmanager für die Europawahl 2024 und Bundestagswahl 2025
          <ul class="list-disc ml-6">
            <li>Material- und Kostenplanung</li>
            <li>Planen und Durchführen von Wahlkampfaktionen (Plakatieren, Stände, Haustürwahlkampf)</li>
            <li>Aktivierung von (Neu-)Mitgliedern</li>
            <li>Planung des Wahlkampfverlaufs</li>
            <li>Wahlanalyse und Bericht</li>
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
  </div>
</Container>
<Container padding class="my-6">
  <Title>Weitere Kompetenzen</Title>
  <div class="my-6">
    <div class="mt-3">
      <h2 class=" text-xl font-black italic tracking-tightest">IT-Fähigkeiten</h2>
      <ul class="mt-2">
        <li><strong>Programmierung</strong>: C#, Rust, Python, (etwas TypeScript/JavaScript für private Projekte).</li>
        <li><strong>Markup/Datenformate</strong>: HTML, CSS, XML/XAML, YAML, JSON, SQL, ...</li>
        <li><strong>DevOps</strong>: Git, GitHub Actions CI, Docker</li>
        <li><strong>Betriebssysteme</strong>: Windows, Linux (Ubuntu)</li>
      </ul>
    </div>
    <div class="my-3">
      <h2 class="text-xl font-black italic tracking-tightest">Sprachen</h2>
      <p class="my-2">
        <strong>Deutsch</strong> (Muttersprache), <strong>Englisch</strong>
        (B2/C1)
      </p>
    </div>
    <div class="my-6">
      <h2 class=" text-xl font-black italic tracking-tightest">Mitgliedschaften</h2>
      <ul>
        <li>Gesellschaft Deutscher Chemiker (GdCh; seit 2018)</li>
        <li>BÜNDNIS 90/DIE GRÜNEN (seit 2021)</li>
        <li>Allgemeiner Deutscher Fahrradclub (ADFC; seit 2022)</li>
        <li>ver.di (seit 2023)</li>
        <li>Verkehrsclub Deutschland (VCD; seit 2024)</li>
      </ul>
    </div>
  </div>
</Container>
