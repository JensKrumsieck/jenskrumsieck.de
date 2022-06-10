<script>
  import Gallery from "$lib/components/prismic/Gallery.svelte";
  import RichText from "$lib/components/prismic/RichText.svelte";
  import Title from "$lib/components/typography/Title.svelte";
  import LargeTitle from "$lib/components/typography/LargeTitle.svelte";

  import * as ph from "@prismicio/helpers";
  import { SliceZone } from "@prismicio/svelte";

  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import "dayjs/locale/de";
  import Subtitle from "$lib/components/typography/Subtitle.svelte";
  dayjs.extend(relativeTime);
  dayjs.locale("de");

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
  <div class="container mx-auto min-h-[50vh] py-20">
    <LargeTitle>{ph.asText(post.data.title)}</LargeTitle>
    <p class="text-white uppercase my-10">
      von {ph.asText(post.data.author.data.name)}
      -
      <span
        class="cursor-pointer"
        title={dayjs(ph.asDate(post.data.publish_date)).format("DD.MM.YYYY")}
        >{dayjs(ph.asDate(post.data.publish_date)).fromNow()}</span
      >
    </p>
  </div>
</section>

<section>
  <div class="container mx-auto p-6 bg-white relative shadow-lg">
    <img
      src={hero_image}
      class="float-right w-96 ml-8 mb-8"
      alt={post.data.hero_image.alt ? post.data.hero_image.alt : "Hero Image"}
    />
    <Title>{ph.asText(post.data.title)}</Title>
    <SliceZone slices={post.data.body} {components} />
  </div>
</section>

<section>
  <div class="container mx-auto my-8 p-6 flex">
    <div>
      <Subtitle>Über {ph.asText(post.data.author.data.name)}</Subtitle>
      <p>
        {@html ph.asHTML(post.data.author.data.about)}
      </p>
    </div>
    <div class="ml-6">
      <img
        class="rounded-full w-[48rem]"
        src={ph.asImageSrc(post.data.author.data.avatar)}
        alt={post.data.author.data.avatar
          ? post.data.author.data.avatar
          : "Avatar"}
      />
    </div>
  </div>
</section>
