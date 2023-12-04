<script>
  import Date from "../blocks/Date.svelte";
  import * as ph from "@prismicio/helpers";
  import { getExcerpt } from "$lib/util/text-helpers";
  import Subtitle from "../typography/Subtitle.svelte";
  export let post;
</script>

<a
  href={"/blog/" + post.uid}
  class="flex w-full md:w-[48%] my-4 hover:text-dark-green"
>
  <img
    loading="lazy"
    src={ph.asImageSrc(post.data.hero_image) + "&w=300"}
    alt={ph.asText(post.data.title)}
    class="w-[150px] h-[150px] shrink-0 rounded-lg object-cover"
  />
  <div class="pl-4">
    <div>
      <Subtitle dense>{ph.asText(post.data.title)}</Subtitle>
      <p>
        {@html getExcerpt(ph.asHTML(post.data.body[0].primary.content), 250)}
      </p>
    </div>
    <p class="uppercase text-xs mt-2 items-end">
      {ph.asText(post.data.author.data.name)} -
      <Date date={ph.asDate(post.data.publish_date)} />
    </p>
  </div>
</a>
