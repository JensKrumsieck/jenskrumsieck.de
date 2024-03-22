<script>
  import Badge from "$lib/components/typography/Badge.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import Image from "$lib/components/layout/Image.svelte";
  import LargeTitle from "$lib/components/typography/LargeTitle.svelte";
  import Title from "$lib/components/typography/Title.svelte";
  import * as ph from "@prismicio/helpers";
  import dayjs from "dayjs";
  import PrismicImage from "$lib/components/prismic/PrismicImage.svelte";
  import BiggerTitle from "$lib/components/typography/BiggerTitle.svelte";
  export let data;
  let { publications } = data;
</script>
<Container padding class="mt-12">
  <LargeTitle>Veröffentlichungen</LargeTitle>
  <BiggerTitle>Bücher</BiggerTitle>
  <div class="flex md:space-x-3 my-8 md:flex-row flex-col">
    <figure class="md:max-w-[8rem]">
      <Image
        src="/buch.png"
        thumbSrc="/buch_thumb.png"
        alt="Dissertation Jens Krumsieck"
      />
    </figure>
    <div class="flex flex-col space-y-0 prose-a:text-dark-green hover:text-black">
        <Title class="md:my-0">PorphyStruct: Entwicklung einer Software zur quantitativen Bestimmung nicht-planarer Auslenkungen von porphyrinoiden Makrozyklen & Synthese neuer Metallkomplexe von Isoporphyrin-Liganden</Title>
         <p class="text-lg">Jens Krumsieck, Dissertation an der TU Braunschweig, Verlag Dr. Hut, München, 2024, ISBN: <a
              href="https://www.dr.hut-verlag.de/9783843954464.html"
              class="font-bold underline text-dark-green hover:text-black"
              target="_blank"
              aria-label="International Standard Book Number"
            >
              978-3-8439-5446-4
            </a><p>
      </div>
  </div>
  <BiggerTitle>Beiträge in Publikationsorganen mit wissenschaftlicher Qualitätsprüfung</BiggerTitle>
  {#each publications.papers.results as paper}
    <div class="flex md:space-x-3 my-8 md:flex-row flex-col">
      {#if ph.isFilled.image(paper.data.cover_image)}
        <figure class="md:max-w-[8rem]">
          <PrismicImage image={paper.data.cover_image} />
        </figure>
      {/if}
      <div class="flex flex-col space-y-0 prose-a:text-dark-green hover:text-black">
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
              aria-label="Digital Object Identifier"              
              target="_blank"
            >
              {paper.data.doi}.
            </a>
          </span>
          {@html ph.asHTML(paper.data.content)}
        </p>
      </div>
    </div>
  {/each}
</Container>

<Container padding>
  <BiggerTitle>Tagungsbeiträge</BiggerTitle>
  {#each publications.posters.results as poster}
    <div class="flex md:space-x-3 my-8 md:flex-row flex-col">
      {#if ph.isFilled.image(poster.data.hero_image)}
        <figure class="md:max-w-[8rem]">
          <PrismicImage image={poster.data.hero_image} />
        </figure>
      {/if}
      <div class="flex flex-col space-y-1 text-lg">
        <div class="flex">
          <Title class="md:my-0 hover:text-dark-green">
            <a href={"/publications/" + poster.uid}>
              {ph.asText(poster.data.title)}
            </a>
          </Title>
          <Badge>{poster.data.type}</Badge>
        </div>
        <p class="italic">
          {poster.data.authors}
        </p>
        {#each poster.data.presentations as presentation}
          <p>
            <span class="italic">{presentation.conference}</span>,
            <span class="font-bold">
              {dayjs(ph.asDate(presentation.start_date)).format("DD.MM.YYYY")}
              {#if ph.isFilled.date(presentation.end_date)}
                -
                {dayjs(ph.asDate(presentation.end_date)).format("DD.MM.YYYY")}
              {/if}
            </span>
            <span>in {presentation.location}</span>.
          </p>
        {/each}
      </div>
    </div>
  {/each}
</Container>
