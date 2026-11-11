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

  // Besetzung wird am 10.11. offiziell
  let committees: Seat[] = [
    { title: "Ausschuss für Wirtschaft, Mobilität und Tiefbau", role: "Ordentliches Mitglied", description: "Wirtschaftsförderung, Verkehrsplanung und ÖPNV, Rad- und Fußverkehr sowie Straßen- und Brückenbau." },
    { title: "Ausschuss für Klima, Umwelt, Sport und Grünflächen", role: "Ordentliches Mitglied", description: "Klimaschutz und Klimaanpassung, Natur- und Umweltschutz, Parks und Stadtgrün sowie Sportförderung und städtische Sportanlagen." },
    { title: "Ausschuss für Feuerwehr, Katastrophenschutz und Ordnung", role: "Ordentliches Mitglied", description: "Berufs- und Freiwillige Feuerwehr, Rettungsdienst, Bevölkerungsschutz sowie öffentliche Sicherheit und Ordnung." },
    { title: "Ausschuss für Planung, Hochbau und Auftragsvergaben", role: "Stellvertretendes Mitglied", deputy: true, description: "Stadtplanung und Bebauungspläne, städtische Hochbauprojekte wie Schulen und Kitas sowie die Vergabe städtischer Aufträge." },
  ];

  let companies: Seat[] = [
    { title: "Braunschweiger Verkehrs GmbH (BSVG)", role: "Aufsichtsrat", description: "Das städtische Verkehrsunternehmen betreibt Stadtbahn und Busse in Braunschweig und ist Eigentümerin der Stadtbahn-Infrastruktur." },
    { title: "Kraftverkehr Mundstock GmbH (KVM)", role: "Aufsichtsrat", description: "Städtisches Busunternehmen, das der BSVG Fahrzeuge und Fahrpersonal für den Linienverkehr bereitstellt." },
    { title: "Bellis GmbH", role: "Beirat", description: "Betreibt im Auftrag der Stadt die öffentliche Straßenbeleuchtung, das Verkehrsmanagement sowie Ampeln und Verkehrszeichen." },
    { title: "Stadtentwässerung Braunschweig GmbH (SE|BS)", role: "Beirat", description: "Betreibt im Auftrag der Stadt das Kanalnetz und das Klärwerk Steinhof und sorgt so für die Abwasserentsorgung in Braunschweig." },
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
