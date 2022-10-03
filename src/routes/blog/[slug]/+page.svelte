<script>
  import Gallery from "$lib/components/prismic/slices/Gallery.svelte";
  import RichText from "$lib/components/prismic/slices/RichText.svelte";
  import PrismicSliceImage from "$lib/components/prismic/slices/PrismicImage.svelte";
  import PrismicImage from "$lib/components/prismic/PrismicImage.svelte";
  import Link from "$lib/components/prismic/slices/Link.svelte";
  import HTML from "$lib/components/prismic/slices/HTML.svelte";
  import Title from "$lib/components/typography/Title.svelte";
  import LargeTitle from "$lib/components/typography/LargeTitle.svelte";
  import Subtitle from "$lib/components/typography/Subtitle.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import Date from "$lib/components/blocks/Date.svelte";
  import ShareButtons from "$lib/components/blocks/ShareButtons.svelte";

  import * as ph from "@prismicio/helpers";
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
    embed: Embed
  };
  const hero_image = ph.asImageSrc(post.data.hero_image);
</script>

<div
  class="background absolute min-h-full -z-50 w-full bg-cover bg-center bg-no-repeat"
  style="background-image: url({hero_image})"
/>
<div
  class="tint absolute min-h-full -z-50 w-full bg-green mix-blend-multiply"
/>
<section class="hero px-2 lg:px-0">
  <Container class="min-h-[50vh] py-20" padding>
    <LargeTitle white>{ph.asText(post.data.title)}</LargeTitle>
    <p class="text-white uppercase my-10">
      von {ph.asText(post.data.author.data.name)}
      -
      <Date date={ph.asDate(post.data.publish_date)} />
    </p>
  </Container>
</section>

<section>
  <Container class="p-6 bg-white relative shadow-lg">
    <div class="float-right w-95 ml-8 mb-8 relative">
      <PrismicImage
        image={post.data.hero_image}
        class="float-right w-96 ml-8 mb-8"
      />
      {#if post.data.hero_image.copyright != undefined}
        <div class="absolute right-2 bottom-10">
          <div class="bg-white rounded p-1 text-xs my-1 opacity-50">
            &copy; {post.data.hero_image.copyright}
          </div>
        </div>
      {/if}
    </div>
    <Title>{ph.asText(post.data.title)}</Title>
    <SliceZone slices={post.data.body} {components} />
    <ShareButtons title={ph.asText(post.data.title)} image={hero_image} />
  </Container>
</section>

<section>
  <Container class="my-8 p-6 flex md:flex-row flex-col md:space-x-12">
    <div>
      <Subtitle>Über {ph.asText(post.data.author.data.name)}</Subtitle>
      {@html ph.asHTML(post.data.author.data.about)}
    </div>
    <div class="max-w-[12rem] mx-auto">
      <img
        loading="lazy"
        class="rounded-full"
        src={ph.asImageSrc(post.data.author.data.avatar)}
        alt={post.data.author.data.avatar
          ? post.data.author.data.avatar
          : "Avatar"}
      />
    </div>
  </Container>
</section>
