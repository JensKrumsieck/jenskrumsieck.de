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
    <div class="mt-12">
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
        PorphyStruct, a new digital tool for the analysis of non-planar
        distortion modes of different porphyrinoids - The program makes use of
        the normal-coordinate structure decomposition technique (NSD) and
        employs sets of normal modes equivalent to those established for
        porphyrins in order to describe the out-of-plane dislocation pattern of
        perimeter atoms from corroles, norcorroles, porphycenes and other
        porphyrinoids quantitatively and in analogy to the established
        terminology.
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
          Download for Windows
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
          The CHN-Tool recalculates the composition of elemental analysis (CHN)
          by taking possible impurities or solvents into account. Organic
          solvents are often found in the unit cell after crystallization. These
          can be easily included in the molecular formula with this tool and
          adjusted to the experimental elemental analysis data.
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
          A Library for processing of chemistry related files (aiming at
          spectroscopy and structural files) - To give multiple projects a
          single codebase
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
