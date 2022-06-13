<script>
  import Gallery from "$lib/components/prismic/Gallery.svelte";
  import RichText from "$lib/components/prismic/RichText.svelte";
  import Title from "$lib/components/typography/Title.svelte";
  import LargeTitle from "$lib/components/typography/LargeTitle.svelte";
  import Subtitle from "$lib/components/typography/Subtitle.svelte";
  import Container from "$lib/components/layout/Container.svelte";
import Date from "$lib/components/blocks/Date.svelte";

  import * as ph from "@prismicio/helpers";
  import { SliceZone } from "@prismicio/svelte";


  export let post;

  const components = {
    text: RichText,
    galerie: Gallery,
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
    <LargeTitle>{ph.asText(post.data.title)}</LargeTitle>
    <p class="text-white uppercase my-10">
      von {ph.asText(post.data.author.data.name)}
      -
      <Date date={ph.asDate(post.data.publish_date)}/>
    </p>
  </Container>
</section>

<section>
  <Container class="p-6 bg-white relative shadow-lg">
    <img
      src={hero_image}
      class="float-right w-96 ml-8 mb-8"
      alt={post.data.hero_image.alt ? post.data.hero_image.alt : "Hero Image"}
    />
    <Title>{ph.asText(post.data.title)}</Title>
    <SliceZone slices={post.data.body} {components} />
  </Container>
</section>

<section>
  <Container class="my-8 p-6 flex md:flex-row flex-col">
    <div>
      <Subtitle>Über {ph.asText(post.data.author.data.name)}</Subtitle>
      <p>
        {@html ph.asHTML(post.data.author.data.about)}
      </p>
    </div>
    <div class="ml-6">
      <img
        class="rounded-full md:w-[48rem] w-36 m-auto"
        src={ph.asImageSrc(post.data.author.data.avatar)}
        alt={post.data.author.data.avatar
          ? post.data.author.data.avatar
          : "Avatar"}
      />
    </div>
  </Container>
</section>
