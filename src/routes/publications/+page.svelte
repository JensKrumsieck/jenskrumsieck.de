<script>
  // @ts-nocheck

  import Badge from "$lib/components/typography/Badge.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import Image from "$lib/components/layout/Image.svelte";
  import Title from "$lib/components/typography/Title.svelte";
  import * as prismic from "@prismicio/client";
  import dayjs from "dayjs";
  import PrismicImage from "$lib/components/prismic/PrismicImage.svelte";
  export let data;
  let { publications } = data;
</script>

<Container padding class="mt-12">
  <Title>Veröffentlichungen</Title>
  <h2 class="py-4 text-4xl font-gruene">Bücher</h2>
  <div
    class="bg-white rounded-md shadow-lg p-4 prose max-w-none! flex space-x-4"
  >
    <figure class="max-w-96 md:max-w-32">
      <Image
        src="/buch.png"
        thumbSrc="/buch_thumb.png"
        alt="Dissertation Jens Krumsieck"
      />
    </figure>
    <div>
      <h3>
        PorphyStruct: Entwicklung einer Software zur quantitativen Bestimmung
        nicht-planarer Auslenkungen von porphyrinoiden Makrozyklen & Synthese
        neuer Metallkomplexe von Isoporphyrin-Liganden
      </h3>
      <p>
        Jens Krumsieck, Dissertation an der TU Braunschweig, Verlag Dr. Hut,
        München, 2024, ISBN: <a
          href="https://www.dr.hut-verlag.de/9783843954464.html"
          target="_blank"
          aria-label="International Standard Book Number"
        >
          978-3-8439-5446-4
        </a>
      </p>
    </div>
  </div>
  <h2 class="py-4 text-4xl font-gruene">
    Beiträge in Publikationsorganen mit wissenschaftlicher Qualitätsprüfung
  </h2>

  {#each publications.papers.results as paper}
    <div
      class="bg-white rounded-md shadow-lg p-4 prose max-w-none! flex space-x-4"
    >
      <div>
        <h3>{prismic.asText(paper.data.title)}</h3>
        <p class="text-lg">
          <span>{paper.data.authors}</span>,
          <span class="italic">{paper.data.journal}</span>,
          <span class="font-bold">
            {prismic.asDate(paper.data.year).getFullYear()}
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
        </p>
      </div>
    </div>
  {/each}
</Container>

<Container padding>
  <Title>Tagungsbeiträge</Title>
  {#each publications.posters.results as poster}
    <div class="flex md:space-x-3 my-8 md:flex-row flex-col">
      {#if prismic.isFilled.image(poster.data.hero_image)}
        <figure class="md:max-w-[8rem]">
          <PrismicImage image={poster.data.hero_image} />
        </figure>
      {/if}
      <div class="flex flex-col space-y-1 text-lg">
        <div class="flex">
          <Title class="md:my-0 hover:text-dark-green">
            <a href={"/publications/" + poster.uid}>
              {prismic.asText(poster.data.title)}
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
              {dayjs(prismic.asDate(presentation.start_date)).format(
                "DD.MM.YYYY",
              )}
              {#if prismic.isFilled.date(presentation.end_date)}
                -
                {dayjs(prismic.asDate(presentation.end_date)).format(
                  "DD.MM.YYYY",
                )}
              {/if}
            </span>
            <span>in {presentation.location}</span>.
          </p>
        {/each}
      </div>
    </div>
  {/each}
</Container>
