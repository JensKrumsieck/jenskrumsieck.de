<script>
  import Gallery from "$lib/components/prismic/slices/Gallery.svelte";
  import RichText from "$lib/components/prismic/slices/RichText.svelte";
  import PrismicSliceImage from "$lib/components/prismic/slices/PrismicImage.svelte";
  import PrismicImage from "$lib/components/prismic/PrismicImage.svelte";
  import Link from "$lib/components/prismic/slices/Link.svelte";
  import HTML from "$lib/components/prismic/slices/HTML.svelte";
  import Title from "$lib/components/typography/Title.svelte";
  import Code from "$lib/components/prismic/slices/Code.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import Date from "$lib/components/blocks/Date.svelte";

  import * as prismic from "@prismicio/client";
  import { SliceZone } from "@prismicio/svelte";
  import Embed from "$lib/components/prismic/slices/Embed.svelte";
  export let data;
  let { post } = data;
  const components = {
    text: RichText,
    galerie: Gallery,
    image: PrismicSliceImage,
    linker: Link,
    html: HTML,
    embed: Embed,
    code: Code,
  };
  const hero_image = prismic.asImageSrc(post.data.hero_image);
</script>

<div class=" bg-secondary-600">
  <section class="hero px-2 lg:px-0">
    <Container class="py-16" padding>
      <Title class="text-neutral-600">{prismic.asText(post.data.title)}</Title>
      <p class="text-white uppercase">
        <Date date={prismic.asDate(post.data.publish_date)} />
      </p>
    </Container>
  </section>

  <section>
    <Container class="p-6 bg-white relative shadow-lg">
      <div class="float-right w-95 ml-8 mb-8 relative">
        <PrismicImage image={post.data.hero_image} class="float-right w-96 ml-8 mb-8" />
      </div>
      <Title>{prismic.asText(post.data.title)}</Title>
      <SliceZone slices={post.data.body} {components} />
      <div class="flex flex-wrap gap-2 mt-4">
        {#each post.tags as tag}
          <span class="text-sm md:rounded-full md:bg-primary-50 border-primary-500 text-black md:border-1 md:px-1.5 md:py-0.5">{tag}</span>
        {/each}
      </div>
    </Container>
  </section>
</div>
