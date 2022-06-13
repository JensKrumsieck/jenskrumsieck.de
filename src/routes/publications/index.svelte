<script>
  import Container from "$lib/components/layout/Container.svelte";
  import LargeTitle from "$lib/components/typography/LargeTitle.svelte";
  import Title from "$lib/components/typography/Title.svelte";
  import * as ph from "@prismicio/helpers";
  import dayjs from "dayjs";
  export let publications;
</script>

<Container padding>
  <LargeTitle>Fachzeitschriften</LargeTitle>
  {#each publications.papers.results as paper}
    <div class="flex md:space-x-8 my-16 md:flex-row flex-col">
      {#if ph.isFilled.image(paper.data.cover_image)}
        <figure class="md:max-w-[10rem]">
          <img
            src={ph.asImageSrc(paper.data.cover_image)}
            alt={paper.data.cover_image.alt}
          />
        </figure>
      {/if}
      <div class="flex flex-col space-y-4">
        <Title class="md:my-0">{ph.asText(paper.data.title)}</Title>
        <p class="text-lg">
          <span>{paper.data.authors}</span>,
          <span class="italic">{paper.data.journal}</span>,
          <span class="font-bold">
            {ph.asDate(paper.data.year).getFullYear()}
          </span>,
          <span class="italic">{paper.data.issue}</span>,
          <span>{paper.data.pages}</span>,
          <span
            >DOI:
            <a
              href={"https://doi.org/" + paper.data.doi}
              class="font-bold underline text-dark-green hover:text-black"
            >
              {paper.data.doi}.
            </a>
          </span>
        </p>
        <div
          class="prose prose-lg prose-a:text-dark-green hover:prose-a:text-black"
        >
          {@html ph.asHTML(paper.data.content)}
        </div>
      </div>
    </div>
  {/each}
</Container>

<Container padding>
  <LargeTitle>Poster & Vorträge</LargeTitle>
  {#each publications.posters.results as poster}
    <div class="flex md:space-x-8 my-16 md:flex-row flex-col">
      {#if ph.isFilled.image(poster.data.hero_image)}
        <figure class="md:max-w-[10rem]">
          <img
            src={ph.asImageSrc(poster.data.hero_image)}
            alt={poster.data.hero_image.alt ?? "cover image"}
          />
        </figure>
      {/if}
      <div class="flex flex-col space-y-2 text-lg">
        <div class="flex">
          <Title class="md:my-0 hover:text-dark-green">
            <a href={"/publications/" + poster.uid}>
              {ph.asText(poster.data.title)}
            </a>
          </Title>
          <span
            class="rounded-full bg-dark-green text-md inline-flex items-center justify-center px-2 py-1 max-h-8 mx-3 text-white font-bold"
          >
            {poster.data.type}
          </span>
        </div>

        {#each poster.data.presentations as presentation}
          <p>
            <span class="italic">{presentation.conference}</span>,
            <span class="font-bold">
              {dayjs(ph.asDate(presentation.start_date)).format("DD.MM.YYYY")}
              {#if ph.isFilled.date(presentation.end_date)}
                -
                {dayjs(ph.asDate(presentation.end_date)).format("DD.MM.YYYY")}
              {/if}
            </span>,
            <span>{presentation.location}</span>.
          </p>
        {/each}
      </div>
    </div>
  {/each}
</Container>
