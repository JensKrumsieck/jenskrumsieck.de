<script>
  import Date from "../blocks/Date.svelte";
  import * as ph from "@prismicio/helpers";
  import { getExcerpt } from "$lib/util/text-helpers";
  import Subtitle from "../typography/Subtitle.svelte";
  export let post;
</script>

<a
  href={"/blog/" + post.uid}
  sveltekit:prefetch
  class="flex flex-col md:w-auto w-full lg:max-w-[25%] md:max-w-[50%]  mt-6 self-stretch"
>
  <img
    src={ph.asImageSrc(post.data.hero_image)}
    srcset={ph.asImageWidthSrcSet(post.data.hero_image).srcset}
    alt={ph.asText(post.data.title)}
    loading="lazy"
    class="w-full max-h-[15rem] ml-auto h-auto object-cover"
  />

  <div class="bg-white px-2">
    <Subtitle>{ph.asText(post.data.title)}</Subtitle>
    <p>
      {@html getExcerpt(ph.asHTML(post.data.body[0].primary.content), 175)}
    </p>
  </div>
  <p class="uppercase italic text-xs mt-auto pt-2 bg-white px-2">
    von {ph.asText(post.data.author.data.name)} -
    <Date date={ph.asDate(post.data.publish_date)} />
  </p>
</a>
