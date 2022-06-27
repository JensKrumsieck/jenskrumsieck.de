<script>
  import Button from "$lib/components/button/Button.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import Rect from "$lib/components/deco/Rect.svelte";
  import Social from "$lib/components/blocks/Social.svelte";
  import FirstBlog from "$lib/components/blocks/FirstBlog.svelte";
  import Hr from "$lib/components/deco/HR.svelte";
  import ListBlog from "$lib/components/blocks/ListBlog.svelte";
  import LargeTitle from "$lib/components/typography/LargeTitle.svelte";
  import Hex from "$lib/components/deco/Hex.svelte";
  import Projects from "$lib/components/blocks/Projects.svelte";
  import IconLink from "$lib/components/button/IconLink.svelte";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import { faDownload, faEarthEurope } from "@fortawesome/free-solid-svg-icons";

  export let posts;
</script>

<Rect class="flex flex-col">
  <img
    src="hero.webp"
    alt="Jens in seinem Labor"
    class="mix-blend-multiply max-h-full w-auto align-bottom mt-auto"
  />
</Rect>
<Container class="flex" padding fullHeight nav>
  <div class="flex flex-col md:max-w-[70%] justify-center">
    <span class="font-light md:text-xl text-lg">Hallo ich bin</span>
    <h1 class="font-bold md:text-5xl text-3xl tracking-tighter">
      Jens Krumsieck.
    </h1>
    <span class="font-light md:text-xl text-lg mt-6">Meine Themen sind</span>
    <h1 class="font-black md:text-7xl text-4xl tracking-tighter">
      Wissenschaft, Softwareentwicklung und Politik.
    </h1>
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
  <a href="/blog" class="justify-end self-end mt-4 font-bold text-xl">
    Mehr davon! &rArr;
  </a>
</Container>
<Container padding fullHeight class="md:justify-center flex flex-col relative">
  <div class="flex flex-col z-10">
    <LargeTitle>Projekte</LargeTitle>
    <Projects
      title="PorphyStruct"
      icon="/ps_logo.svg"
      image="https://porphystruct.org/_app/assets/screenshot_hero-1a3d8352.webp"
    >
      <p>
        PorphyStruct, ein neues digitales Werkzeug zur Analyse der
        nicht-planaren Auslenkungen verschiedener Porphyrinoide. Das Programm
        nutzt die <em>normal-coordinate structure decomposition</em> (NSD) Methode
        und erweitert sie auf Corrole, Norcorrole, Porphycene und Corrphycene.
      </p>
      <div class="flex md:flex-row flex-col flex-wrap md:space-x-5 my-8">
        <IconLink
          icon={faGithub}
          href="https://github.com/JensKrumsieck/PorphyStruct"
        >
          GitHub Repository
        </IconLink>
        <IconLink
          icon={faDownload}
          href="https://github.com/JensKrumsieck/PorphyStruct/releases/latest"
        >
          Download für Windows
        </IconLink>
        <IconLink icon={faEarthEurope} href="https://app.porphystruct.org">
          Webversion
        </IconLink>
      </div>
      <div class="flex">
        <Button href="https://porphystruct.org" external>
          porphystruct.org
        </Button>
      </div>
    </Projects>
    <div class="md:grid md:grid-cols-2 md:gap-4 mt-8">
      <Projects title="CHN-Tool" icon="chn_logo.svg">
        <p>
          Das CHN-Tool berechnet die Zusammensetzung von Elementaranalysen (CHN)
          neu, indem es mögliche Verunreinigungen oder Lösungsmittel
          berücksichtigt. Organische Lösungsmittel befinden sich nach der
          Kristallisation oft in der Elementarzelle. Diese können mit diesem
          Tool einfach in die Summenformel aufgenommen und an die
          experimentellen Elementaranalysedaten angepasst werden.
        </p>
        <div class="flex flex-wrap md:space-x-5 my-8">
          <IconLink
            icon={faGithub}
            href="https://github.com/JensKrumsieck/CHN-Tool"
          >
            GitHub Repository
          </IconLink>
        </div>

        <div class="flex">
          <Button href="https://chn.jenskrumsieck.de" external>
            chn.jenskrumsieck.de
          </Button>
        </div>
      </Projects>
      <Projects title="ChemSharp" icon="chemsharp_logo.svg">
        <p>
          ChemSharp ist eine .NET-Softwarebibliothek, die vor allem auf das
          prozessieren chemischer Dateiformate ausgelegt ist. Sowohl
          Strukturdaten als auch spektroskopische Dateien können geladen werden.
          Das Projekt wurde gestartet um meinen Projekten einen gemeinsame
          Code-Basis zu geben und wird z.B. von <em>PorphyStruct</em> benutzt.
        </p>
        <div class="flex flex-wrap md:space-x-5 my-8">
          <IconLink
            icon={faGithub}
            href="https://github.com/JensKrumsieck/ChemSharp"
          >
            GitHub Repository
          </IconLink>
        </div>
      </Projects>
    </div>
  </div>
  <div><Hex opaque right /></div>
</Container>
