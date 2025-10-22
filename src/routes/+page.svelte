<script>
  import Button from "$lib/components/button/Button.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import Rect from "$lib/components/deco/Rect.svelte";
  import Social from "$lib/components/blocks/Social.svelte";
  import FirstBlog from "$lib/components/blocks/FirstBlog.svelte";
  import Hr from "$lib/components/deco/HR.svelte";
  import ListBlog from "$lib/components/blocks/ListBlog.svelte";
  import LargeTitle from "$lib/components/typography/LargeTitle.svelte";
  import Projects from "$lib/components/blocks/Projects.svelte";
  import IconLink from "$lib/components/button/IconLink.svelte";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import { faDownload, faEarthEurope } from "@fortawesome/free-solid-svg-icons";
  export let data;
  let { posts } = data;
</script>

<Rect class="flex flex-col">
  <img src="/hero.webp" alt="Jens in seinem Labor" class="mix-blend-multiply max-h-full w-auto align-bottom mt-auto" />
</Rect>
<Container class="flex" padding fullHeight nav>
  <div class="flex flex-col md:max-w-[70%] justify-center">
    <span class="font-light md:text-xl text-lg">Entdecken, Entwickeln, Gestalten.</span>
    <h1 class="font-bold md:text-5xl text-3xl tracking-tighter">Dr. Jens Krumsieck.</h1>
    <span class="font-light md:text-xl text-lg mt-6">An der Schnittstelle von </span>
    <h1 class="font-black md:text-6xl text-4xl tracking-tighter">Wissenschaft & Softwareinnovation.</h1>
    <div class="my-12 md:space-y-0 space-y-2">
      <Button href="/blog">Beiträge lesen</Button>
      <Button outlined href="/publications">Meine Veröffentlichungen</Button>
    </div>
    <Social class="mt-12" />
  </div>
</Container>

<Container padding fullHeight class="md:justify-center flex flex-col">
  <FirstBlog post={posts.results[0]} />
  <Hr />
  <div class="flex my-12 flex-wrap">
    {#each posts.results.slice(1) as post}
      <ListBlog {post} />
    {/each}
  </div>
  <Hr />
  <a href="/blog" class="justify-end self-end mt-4 font-bold text-xl"> Weitere Artikel lesen! &rArr; </a>
</Container>
<Container padding fullHeight class="md:justify-center flex flex-col relative">
  <div class="flex flex-col z-10">
    <LargeTitle>Projekte</LargeTitle>
    <Projects title="PorphyStruct" icon="/ps_logo.svg" image="https://porphystruct.org/_astro/screenshot_hero.odwWJrsE_2f64sO.webp">
      <p>
        PorphyStruct ist ein innovatives digitales Werkzeug, das Wissenschaftlern die Möglichkeit gibt, die nicht-planaren Auslenkungen verschiedener Porphyrinoide zu analysieren. Durch die Verwendung der <em
          >normal-coordinate structure decomposition</em
        > (NSD) Methode nd ihrer Erweiterung auf Corrole, Norcorrole, Porphycene und Corrphycene, ermöglicht PorphyStruct eine präzise und effiziente Analyse von Porphyrinoidstrukturen. PorphyStruct ist ein unverzichtbares Werkzeug für jeden, der in der
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
    <Projects title="SciWIn-Client" icon="fairagro.png">
      <p>
        SciWIn-Client unterstützr Forschende, komplexe und mehrstufige Verfahren für die automatisierte Verarbeitung von Daten zu beschreiben. Dabei wird der Standard "Common Workflow Language" (CWL) verwendet, um die Workflows plattformunabhängig
        und reproduzierbar zu gestalten. Der SciWIn-Client bietet eine benutzerfreundliches Commandline Interfae zur Erstellung, Verwaltung und Ausführung von CWL-Workflows, wodurch die Effizienz und Genauigkeit in der wissenschaftlichen
        Datenverarbeitung erheblich verbessert wird.
      </p>
      <div class="flex md:flex-row flex-col flex-wrap md:space-x-5 my-8">
        <IconLink icon={faGithub} href="https://github.com/FAIRagro/m4.4_sciwin_client">GitHub Repository</IconLink>
        <IconLink icon={faDownload} href="https://fairagro.github.io/m4.4_sciwin_client/getting-started/installation/">Download</IconLink>
      </div>
      <div class="flex">
        <Button href="https://fairagro.github.io/m4.4_sciwin_client" external>Dokumentation</Button>
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
      <Projects title="ChemSharp" icon="chemsharp_logo.svg">
        <p>
          ChemSharp ist eine .NET-Softwarebibliothek, die vor allem auf das prozessieren chemischer Dateiformate ausgelegt ist. Sowohl Strukturdaten als auch spektroskopische Dateien können geladen werden. Das Projekt wurde gestartet um meinen
          Projekten einen gemeinsame Code-Basis zu geben und wird z.B. von <em>PorphyStruct</em> benutzt.
        </p>
        <div class="flex flex-wrap md:space-x-5 my-8">
          <IconLink icon={faGithub} href="https://github.com/JensKrumsieck/ChemSharp">GitHub Repository</IconLink>
        </div>
      </Projects>
      <Projects title="Profilbegrünung" icon="https://profilbegruenung.jenskrumsieck.de/logo.png">
        <p>
          Profilbegrünung ist ein Wahlkampf-Tool, das zur <em>Landtagswahl 2022 in Niedersachsen</em>
          am 9. Oktober insbesondere für den KV Braunschweig von
          <strong>Bündnis 90/Die GRÜNEN</strong>
          erstellt wurde, aber problemlos anpassbar auf weitere Wahlen ist. Mit der Profilbegrünung ist es kinderleicht möglich das eigene Profilbild mit Parteilogo, Claim und Wahlhinweis zu versetzen. Es ist möglich zwischen verschiedenen Logos und Optionen
          zu wählen.
        </p>

        <div class="flex flex-wrap md:space-x-5 my-8">
          <IconLink icon={faGithub} href="https://github.com/JensKrumsieck/Profilbegruenung">GitHub Repository</IconLink>
        </div>

        <div class="flex">
          <Button href="https://profilbegruenung.jenskrumsieck.de" external>profilbegruenung.jenskrumsieck.de</Button>
        </div>
      </Projects>
    </div>
  </div>
</Container>
