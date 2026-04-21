<script lang="ts">
  import hero from "$lib/assets/hero.jpg";
  import Button from "$lib/components/button/Button.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import ListBlog from "$lib/components/blocks/ListBlog.svelte";
  import Title from "$lib/components/typography/Title.svelte";
  import Masonry from "$lib/components/layout/Masonry.svelte";
  import Topics from "$lib/components/blocks/Topics.svelte";
  import Map from "$lib/components/blocks/Map.svelte";

  export let data;
  let { posts = { results: [] }, instagram = { posts: [] } } = data;
</script>

<div class="relative w-full min-h-dvh overflow-hidden">
  <img src={hero} alt="Ein Foto von Dr. Jens Krumsieck" class="z-0 absolute md:left-24 top-0 h-full w-full object-cover xl:object-top-left" />
  <div class="absolute top-0 z-0 h-full w-full bg-secondary-600/50 md:bg-transparent md:bg-linear-to-r from-secondary-600 from-25% to-secondary-600/20 to-50%"></div>
  <Container class="flex z-1" padding fullHeight nav>
    <div class="flex flex-col md:max-w-[70%] justify-center text-neutral-600 z-2">
      <img src="/Sonnenblume_RGB_gelb.svg" alt="Sonnenblumen Logo von BÜNDNIS 90/DIE GRÜNEN" class="w-48 mb-12" />
      <h1 class="font-gruene text-6xl">Dr. Jens Krumsieck</h1>
      <p class="text-3xl pt-2 font-bold">Mobilität | Gerechtigkeit | Zukunft</p>
      <p class="text-2xl pt-4">Kandidat für den Stadtrat in Braunschweig-Südwest</p>
      <div class="my-12 md:space-y-0 space-y-2">
        <Button href="/blog">Beiträge lesen</Button>
        <Button outlined href="/themen">Meine Themen</Button>
      </div>
    </div>
  </Container>
</div>

<Container padding class="md:justify-center flex flex-col mt-12">
  <Title tag="h2">Aktuelles</Title>
  <div class="grid md:grid-cols-2 my-12 flex-wrap gap-4">
    {#each posts.results as post}
      <ListBlog {post} />
    {/each}
  </div>
  <a href="/blog" class="justify-end self-end mt-4 font-bold text-xl hover:text-secondary-500"> Weitere Artikel lesen! &rArr; </a>
</Container>

<Container padding class="md:justify-center flex flex-col">
  <Title tag="h2">Meine Themen</Title>
  <Topics />
</Container>

<Container padding class="mt-12">
  <Title tag="h2">Mein Wahlbereich</Title>
  <h3 class="font-gruene text-lg">Wahlbereich 22 - Braunschweig-Südwest</h3>
  <p class="mt-2 mb-6">
    Wahlbereich 22 umfasst die Stadtbezirke <em>221 Weststadt</em> und <em>222 Braunschweig-Südwest</em>. Damit fallen die Weststadt, Broitzem, Timmerlah, Geitelde, Stiddien und Rüningen in meinen Wahlbereich. Das heißt, wenn Sie in einem der
    genannten Teile von Braunschweig wohnen, können Sie mir bzw. der Liste von BÜNDNIS 90/DIE GRÜNEN bei der Kommunalwahl am 13.09.2026 bis zu drei Stimmen geben.
  </p>
  <Map />
</Container>

<Container padding class="md:justify-center flex flex-col mt-12">
  <Title tag="h2">Instagram</Title>
</Container>
<Container class="md:justify-center flex flex-col">
  <Masonry gridGap="1rem">
    {#each instagram.posts as post}
      <a href={post.permalink} target="_blank" class="block break-inside-avoid hover:opacity-80 transition-opacity">
        <img class="w-full rounded-lg shadow-lg" src={post.sizes.medium.mediaUrl} alt={post.prunedCaption} />
      </a>
    {/each}
  </Masonry>

  <a href="https://instagram.com/jens.ation" class="justify-end self-end mt-4 font-bold text-xl hover:text-secondary-500"> Zum Instagram Profil &rArr; </a>
</Container>
