<script>
  import Date from "../blocks/Date.svelte";
  import * as ph from "@prismicio/helpers";
  import { getExcerpt } from "$lib/util/text-helpers";
  import Subtitle from "../typography/Subtitle.svelte";
  export let post;
</script>

<a href={"/blog/" + post.uid} sveltekit:prefetch class="flex w-full md:w-[49%] my-4">
  <div>
    <div class="bg-white px-2">
      <Subtitle dense>{ph.asText(post.data.title)}</Subtitle>
      <p>
        {@html getExcerpt(ph.asHTML(post.data.body[0].primary.content), 100)}
      </p>
    </div>
    <p class="uppercase italic text-xs mt-auto pt-2 bg-white px-2">
      von {ph.asText(post.data.author.data.name)} -
      <Date date={ph.asDate(post.data.publish_date)} />
    </p>
  </div>
  <img
    loading="lazy"
    src={ph.asImageSrc(post.data.hero_image) + "&w=150"}
    alt={ph.asText(post.data.title)}
    class="w-auto max-h-[6rem] ml-auto h-auto object-cover"
  />
</a>
