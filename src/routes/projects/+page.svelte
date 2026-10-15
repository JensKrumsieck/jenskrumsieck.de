<script lang="ts">
  import Container from "$lib/components/layout/Container.svelte";
  import Title from "$lib/components/typography/Title.svelte";
  import Button from "$lib/components/button/Button.svelte";
  import IconLink from "$lib/components/button/IconLink.svelte";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import Projects from "$lib/components/blocks/Projects.svelte";
  // @ts-ignore
  import porphystruct from "$lib/assets/porphystruct.webp?enhanced&w=1200;800;400";
  // @ts-ignore
  import sciwinStudio from "$lib/assets/sciwin_studio.png?enhanced&w=1200;800;400";
  import { faDownload, faEarthEurope } from "@fortawesome/free-solid-svg-icons";
</script>

<Container padding>
  <div class="flex flex-col z-10">
    <Title>Projekte</Title>
    <Projects title="PorphyStruct" icon="ps_logo.svg" image={porphystruct}>
      <p>
        PorphyStruct ist ein innovatives digitales Werkzeug, das Wissenschaftlern die Möglichkeit gibt, die nicht-planaren Auslenkungen verschiedener Porphyrinoide zu analysieren. Durch die Verwendung der <em
          >normal-coordinate structure decomposition</em
        > (NSD) Methode und ihrer Erweiterung auf Corrole, Norcorrole, Porphycene und Corrphycene, ermöglicht PorphyStruct eine präzise und effiziente Analyse von Porphyrinoidstrukturen. PorphyStruct ist ein unverzichtbares Werkzeug für jeden, der in der
        Porphyrinforschung tätig ist.
      </p>
      <div class="flex md:flex-row flex-col flex-wrap md:space-x-5 my-8">
        <IconLink icon={faGithub} href="https://github.com/JensKrumsieck/PorphyStruct">GitHub Repository</IconLink>
        <IconLink icon={faDownload} href="https://github.com/JensKrumsieck/PorphyStruct/releases/latest">Download für Windows</IconLink>
        <IconLink icon={faEarthEurope} href="https://app.porphystruct.org">Webversion</IconLink>
      </div>
      <div class="flex">
        <Button href="https://porphystruct.org" external>porphystruct.org</Button>
      </div>
    </Projects>
    <Projects title="SciWIn" icon="fairagro.png" image={sciwinStudio}>
      <p>
        SciWIn, die Scientific Workflow Infrastructure von FAIRagro, hilft Forschenden, komplexe Datenverarbeitung als reproduzierbare Workflows zu beschreiben, auszuführen und zu veröffentlichen. Als Standard dient die „Common Workflow Language“ (CWL), damit
        Workflows plattformunabhängig laufen. SciWIn besteht aus zwei Werkzeugen, die zusammengehören:
      </p>
      <p class="mt-4">
        <strong>SciWIn-Client</strong> ist die Kommandozeile (CLI). Mit ihr werden CWL-Werkzeuge und Workflows erstellt, verwaltet und ausgeführt, und die Arbeitsschritte werden direkt beim Arbeiten aufgezeichnet. Sie eignet sich für Skripte, Server und alle, die
        gern im Terminal arbeiten.
      </p>
      <p class="mt-4">
        <strong>SciWIn-Studio</strong> ist die grafische Oberfläche (GUI) dazu. Workflows werden per Drag-and-Drop zusammengesetzt, das CWL lässt sich in einem Editor bearbeiten und die Ausführung startet auf Knopfdruck. Studio baut auf dem Client auf, und jedes Projekt
        ist ein normales SciWIn-Projekt. Deshalb lässt sich dasselbe Projekt abwechselnd in der Oberfläche und auf der Kommandozeile bearbeiten. Studio befindet sich derzeit in der Beta-Phase.
      </p>
      <div class="flex md:flex-row flex-col flex-wrap md:space-x-5 my-8">
        <IconLink icon={faGithub} href="https://github.com/FAIRagro/sciwin">GitHub: SciWIn-Client</IconLink>
        <IconLink icon={faGithub} href="https://github.com/FAIRagro/sciwin_studio">GitHub: SciWIn-Studio</IconLink>
        <IconLink icon={faDownload} href="https://fairagro.github.io/sciwin/getting-started/installation/">Download Client</IconLink>
        <IconLink icon={faDownload} href="https://github.com/FAIRagro/sciwin_studio/releases">Download Studio</IconLink>
      </div>
      <div class="flex">
        <Button href="https://fairagro.github.io/sciwin" external>Dokumentation</Button>
      </div>
    </Projects>
    <div class="md:grid md:grid-cols-2 md:gap-4 mt-8">
      <Projects title="CHN-Tool" icon="chn_logo.svg">
        <p>
          Das CHN-Tool ist ein digitales Werkzeug, das für die schnelle Berechnung der Zusammensetzung von Elementaranalysen (CHN) entwickelt wurde. Es berücksichtigt mögliche Verunreinigungen oder Lösungsmittel, die oft nach der Kristallisation in
          der Elementarzelle vorhanden sind, und ermöglicht es, diese einfach in die Summenformel aufzunehmen und an die experimentellen Elementaranalysedaten anzupassen.
        </p>
        <div class="flex flex-wrap md:space-x-5 my-8">
          <IconLink icon={faGithub} href="https://github.com/JensKrumsieck/CHN-Tool">GitHub Repository</IconLink>
        </div>

        <div class="flex">
          <Button href="https://chn.jenskrumsieck.de" external>chn.jenskrumsieck.de</Button>
        </div>
      </Projects>
      <Projects title="Braunschweig Wahlcheck" icon="wahlcheck_logo.svg">
        <p>
          Für die Kommunalwahl in Braunschweig am 13.09.2026 gibt es keinen Wahl-O-Mat, deshalb habe ich den Braunschweig Wahlcheck entwickelt. Die verfügbaren Wahlprogramme wurden mit künstlicher Intelligenz durchsucht, die 40
          kommunalpolitische Thesen beantwortet. Wer dieselben Thesen mit Ja, Nein oder Neutral beantwortet, sieht, wie gut die eigenen Positionen zu den einzelnen Parteien passen, inklusive Zitat und Seitenzahl als Beleg.
        </p>
        <div class="flex flex-wrap md:space-x-5 my-8">
          <IconLink icon={faGithub} href="https://github.com/JensKrumsieck/wahlcheck">GitHub Repository</IconLink>
        </div>
        <div class="flex">
          <Button href="https://bswahl.de" external>bswahl.de</Button>
        </div>
      </Projects>
      <Projects title="Wahlanalyse für Braunschweig" icon="wahlanalyse_logo.svg">
        <p>
          Wahlauswertung für Braunschweig, das war das Ziel dieses Projekts. Mit dem Wahlanalyse-Portal können nicht nur alte Wahlergebnisse der Stadt Braunschweig grafisch aufbereitet eingesehen werden, es wird auch eine Prognose für die kommende
          Wahl auf Basis des aktuellen Bundestrends berechnet.
        </p>
        <div class="flex flex-wrap md:space-x-5 my-8">
          <IconLink icon={faGithub} href="https://github.com/JensKrumsieck/wahlen_bs">GitHub Repository</IconLink>
        </div>

        <div class="flex">
          <Button href="https://wahl.jenskrumsieck.de" external>wahl.jenskrumsieck.de</Button>
        </div>
      </Projects>
      <Projects title="ChemSharp" icon="chemsharp_logo.svg">
        <p>
          ChemSharp ist eine .NET-Softwarebibliothek, die vor allem auf das prozessieren chemischer Dateiformate ausgelegt ist. Sowohl Strukturdaten als auch spektroskopische Dateien können geladen werden. Das Projekt wurde gestartet um meinen
          Projekten einen gemeinsame Code-Basis zu geben und wird z.B. von <em>PorphyStruct</em> benutzt.
        </p>
        <div class="flex flex-wrap md:space-x-5 my-8">
          <IconLink icon={faGithub} href="https://github.com/JensKrumsieck/ChemSharp">GitHub Repository</IconLink>
        </div>
      </Projects>
    </div>
  </div>
  <div class="my-6">
    <Button outlined href="/about">Über Mich</Button>
    <Button outlined href="/publications">Publikationsliste</Button>
  </div>
</Container>
