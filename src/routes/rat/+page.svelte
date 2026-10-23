<script lang="ts">
  import PostGrid from "#lib/components/blocks/PostGrid.svelte";
  import MoreLink from "#lib/components/button/MoreLink.svelte";
  import Container from "#lib/components/layout/Container.svelte";
  import SubTitle from "#lib/components/typography/SubTitle.svelte";
  import Title from "#lib/components/typography/Title.svelte";

  export let data;
  let { posts = { results: [] } } = data;

  type Seat = {
    title: string;
    role: string;
    deputy?: boolean;
    description: string;
  };

  // Platzhalter, die Besetzung wird am 10.11. offiziell
  let committees: Seat[] = [
    { title: "Ausschuss 1", role: "Ordentliches Mitglied", description: "Platzhalter: Kurzbeschreibung der Zuständigkeiten des Ausschusses." },
    { title: "Ausschuss 2", role: "Ordentliches Mitglied", description: "Platzhalter: Kurzbeschreibung der Zuständigkeiten des Ausschusses." },
    { title: "Ausschuss 3", role: "Ordentliches Mitglied", description: "Platzhalter: Kurzbeschreibung der Zuständigkeiten des Ausschusses." },
    { title: "Ausschuss 4", role: "Stellvertretendes Mitglied", deputy: true, description: "Platzhalter: Kurzbeschreibung der Zuständigkeiten des Ausschusses." },
  ];

  let companies: Seat[] = [
    { title: "Gesellschaft 1", role: "Aufsichtsrat", description: "Platzhalter: Kurzbeschreibung der Gesellschaft." },
    { title: "Gesellschaft 2", role: "Aufsichtsrat", description: "Platzhalter: Kurzbeschreibung der Gesellschaft." },
    { title: "Gesellschaft 3", role: "Gesellschafterversammlung", description: "Platzhalter: Kurzbeschreibung der Gesellschaft." },
  ];
</script>

<Container padding>
  <Title>Im Rat</Title>
  <div class="mt-6 flex items-center gap-4 bg-white border-l-4 border-sun-600 shadow-lg rounded-md p-4">
    <img src="/Sonnenblume_RGB_gelb.svg" alt="" class="w-16 shrink-0" />
    <div>
      <p>
        Seit November 2026 sitze ich im Rat der Stadt Braunschweig als Ratsherr der <a class="font-bold underline hover:text-primary-500" href="https://gruene-braunschweig-ratsfraktion.de/" target="_blank" title="Gruppenwebseite (öffnet sich im neuen Tab)"
          >Gruppe BÜNDNIS 90/DIE GRÜNEN - Volt - Die Partei</a
        >.
      </p>
      <p class="mt-2">
        Meine inhaltlichen Schwerpunkte finden Sie unter <a class="font-bold underline hover:text-primary-500" href="/themen">Meine Themen</a>.
      </p>
    </div>
  </div>

  <SubTitle class="mt-12">Ausschüsse</SubTitle>
  <div class="grid gap-4 md:grid-cols-2 mt-6">
    {#each committees as seat}
      <div class="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-md p-4 border-l-4 border-secondary-600">
        <h3 class="font-gruene text-2xl">{seat.title}</h3>
        <span class={`inline-block mt-1 rounded-full px-3 py-1 text-xs font-bold ${seat.deputy ? "border border-secondary-600 text-secondary-600" : "bg-secondary-600 text-white"}`}>{seat.role}</span>
        <p class="mt-3">{seat.description}</p>
      </div>
    {/each}
  </div>

  <SubTitle class="mt-12">Aufsichtsräte & Gesellschafterversammlungen</SubTitle>
  <div class="grid gap-4 md:grid-cols-2 mt-6">
    {#each companies as seat}
      <div class="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-md p-4 border-l-4 border-secondary-600">
        <h3 class="font-gruene text-2xl">{seat.title}</h3>
        <span class={`inline-block mt-1 rounded-full px-3 py-1 text-xs font-bold ${seat.deputy ? "border border-secondary-600 text-secondary-600" : "bg-secondary-600 text-white"}`}>{seat.role}</span>
        <p class="mt-3">{seat.description}</p>
      </div>
    {/each}
  </div>

  <SubTitle class="mt-12">Anträge & Anfragen</SubTitle>
</Container>
{#if posts?.results?.length}
  <Container class="mt-6">
    <PostGrid posts={posts.results} layout="masonry" />
  </Container>
  <Container class="md:justify-center flex flex-col mt-12">
    <MoreLink href="/blog">Alle Beiträge lesen!</MoreLink>
  </Container>
{:else}
  <Container padding class="mt-6">
    <p class="bg-white border-l-4 border-sun-600 shadow-lg rounded-md p-4">Hier erscheinen meine Beiträge zu Anträgen und Anfragen, sobald es welche gibt.</p>
  </Container>
{/if}
