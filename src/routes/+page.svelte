<script lang="ts">
  import type { PageData } from "./$types";
  //@ts-ignore
  import hero from "#lib/assets/hero.jpg?enhanced&w=2160;1920;1080";
  import Button from "#lib/components/button/Button.svelte";
  import Container from "#lib/components/layout/Container.svelte";
  import PostGrid from "#lib/components/blocks/PostGrid.svelte";
  import MoreLink from "#lib/components/button/MoreLink.svelte";
  import InstagramPost from "#lib/components/blocks/InstagramPost.svelte";
  import Title from "#lib/components/typography/Title.svelte";
  import Masonry from "#lib/components/layout/Masonry.svelte";
  import Topics from "#lib/components/blocks/Topics.svelte";
  import Map from "#lib/components/blocks/Map.svelte";

  export let data: PageData;
  let { posts = { results: [] }, instagram = [] } = data;
</script>

<div class="relative w-full min-h-dvh overflow-hidden">
  <enhanced:img
    src={hero}
    fetchpriority="high"
    alt="Ein Foto von Dr. Jens Krumsieck"
    class="z-0 absolute md:left-24 top-0 h-full w-full object-cover xl:object-top-left"
    sizes="(min-width:1920px) 2160px, (min-width:1080px) 1920px, (min-width:768px) 1080px"
  />
  <div class="absolute top-0 z-0 h-full w-full bg-secondary-600/50 md:bg-transparent md:bg-linear-to-r from-secondary-600 from-25% to-secondary-600/20 to-50%"></div>
  <Container class="flex z-1" padding fullHeight nav>
    <div class="flex flex-col md:max-w-[70%] justify-center text-neutral-600 z-2">
      <img src="/Sonnenblume_RGB_gelb.svg" alt="Sonnenblumen Logo von BÜNDNIS 90/DIE GRÜNEN" class="w-48 mb-12" />
      <h1 class="font-gruene text-6xl">Dr. Jens Krumsieck</h1>
      <p class="text-3xl pt-2 font-bold">Mobilität | Klimaschutz | Zukunft</p>
      <p class="text-2xl pt-4">Ratsherr der Stadt Braunschweig</p>
      <div class="my-12 md:space-y-0 space-y-2">
        <Button href="/blog">Beiträge lesen</Button>
        <Button outlined href="/themen">Meine Themen</Button>
      </div>
    </div>
  </Container>
</div>

<Container padding class="md:justify-center flex flex-col mt-12">
  <Title tag="h2">Aktuelles</Title>
  <PostGrid posts={posts.results} />
  <MoreLink href="/blog">Weitere Artikel lesen!</MoreLink>
</Container>

<Container padding class="md:justify-center flex flex-col">
  <Title tag="h2">Meine Themen</Title>
  <Topics />
</Container>

<Container padding class="mt-12">
  <Title tag="h2">Mein Wahlbereich</Title>
  <h3 class="font-gruene text-lg">Wahlbereich 22 - Braunschweig-Südwest</h3>
  <p class="mt-2 mb-6">
    Als Ratsherr vertrete ich den Wahlbereich 22. Er umfasst die Stadtbezirke <em>221 Weststadt</em> und <em>222 Braunschweig-Südwest</em>, also die Weststadt, Broitzem, Timmerlah, Geitelde, Stiddien und Rüningen. Vielen Dank für Ihr Vertrauen bei
    der Kommunalwahl am 13.09.2026! Wenn Sie in einem dieser Stadtteile wohnen, sind Sie herzlich eingeladen, mich mit Ihren Anliegen anzusprechen.
  </p>
  <Map />
</Container>

<Container padding class="md:justify-center flex flex-col mt-12">
  <Title tag="h2">Instagram</Title>
</Container>
<Container class="md:justify-center flex flex-col">
  <Masonry gridGap="1rem">
    {#each instagram as post}
      <InstagramPost {post} />
    {/each}
  </Masonry>

  <MoreLink href="https://instagram.com/jens.ation">Zum Instagram Profil</MoreLink>
</Container>
