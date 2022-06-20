<script context="module">
  import { base } from "$app/paths";

  export async function load({ params, fetch, session, stuff }) {
    const data = await fetch(`${base}/publications/${params.slug}.json`);
    const post = await data.json();
    if (!post.researchItem) return {};
    return {
      props: post,
      stuff: {
        title: ph.asText(post.researchItem.data.title),
        description: getDesc(
          ph.asText(post.researchItem.data.body[0].primary.content),
          250
        ),
        keywords: post.researchItem.tags.join(", ") + ", " + website.keywords,
        image: ph.asImageSrc(post.researchItem.data.hero_image),
      },
    };
  }
</script>

<script>
  import ShareButtons from "$lib/components/blocks/ShareButtons.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import BiggerTitle from "$lib/components/typography/BiggerTitle.svelte";
  import Button from "$lib/components/button/Button.svelte";
  import Badge from "$lib/components/typography/Badge.svelte";
  import * as ph from "@prismicio/helpers";
  import Fa from "svelte-fa/src/fa.svelte";
  import dayjs from "dayjs";
  import { faDownload } from "@fortawesome/free-solid-svg-icons";
  import Hex from "$lib/components/deco/Hex.svelte";
  import { SliceZone } from "@prismicio/svelte";
  import RichText from "$lib/components/prismic/RichText.svelte";
  import Gallery from "$lib/components/prismic/Gallery.svelte";
  import { getDesc } from "$lib/util/text-helpers";
  import website from "$lib/util/website";
  export let researchItem;

  const components = {
    text: RichText,
    galerie: Gallery,
  };
</script>

<Container padding class="my-12 relative">
  <div class="flex flex-col">
    <BiggerTitle>{ph.asText(researchItem.data.title)}</BiggerTitle>
    <p class="italic mt-8">
      {researchItem.data.authors}
      <Badge>{researchItem.data.type}</Badge>
    </p>
    {#each researchItem.data.presentations as presentation}
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
  <div class="flex md:space-x-24 my-12 md:flex-row flex-col">
    {#if ph.isFilled.image(researchItem.data.hero_image)}
      <figure class="md:max-w-[30rem]">
        <img
          src={ph.asImageSrc(researchItem.data.hero_image)}
          alt={researchItem.data.hero_image.alt ?? "cover image"}
        />
      </figure>
    {/if}
    <div class="flex flex-col md:mt-0 mt-6">
      <SliceZone slices={researchItem.data.body} {components} />
      <div class="flex mt-8">
        <Button href={ph.asLink(researchItem.data.file)}>
          <div class="flex items-center space-x-4">
            <Fa icon={faDownload} />
            <span> Herunterladen </span>
          </div>
        </Button>
      </div>
      <span class="text-xs italic mt-2">
        This File is licensed under
        <a
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode"
          class="underline hover:text-green hover:font-bold"
        >
          Creative Commons CC BY-NC-ND!
        </a>
      </span>
      <span class="text-xs italic">
        Violation <strong>WILL</strong> be punished!
      </span>
    </div>
  </div>
  <ShareButtons
    title={ph.asText(researchItem.data.title)}
    image={ph.asImageSrc(researchItem.data.hero_image)}
  />
  <Hex right class="z-[-1] right-0" />
</Container>
