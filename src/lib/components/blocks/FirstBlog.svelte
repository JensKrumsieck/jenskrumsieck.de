<script>
  import Title from "../typography/Title.svelte";
  import Date from "../blocks/Date.svelte";

  import * as ph from "@prismicio/helpers";
  import { getExcerpt } from "$lib/util/text-helpers";
  import Hex from "../deco/Hex.svelte";
  export let post;
</script>

<div class="bg-dark my-8 relative text-white w-full">
  <a
    sveltekit:prefetch
    href={"/blog/" + post.uid}
    class="flex md:flex-row flex-col-reverse relative z-10"
  >
    <div class="p-6">
      <Title>{ph.asText(post.data.title)}</Title>
      <p>
        {@html getExcerpt(ph.asHTML(post.data.body[0].primary.content), 650)}
      </p>
      <p class="mt-8 uppercase italic">
        von {ph.asText(post.data.author.data.name)} - <Date
          date={ph.asDate(post.data.publish_date)}
        />
      </p>
    </div>
    <img
      src={ph.asImageSrc(post.data.hero_image)}
      srcset={ph.asImageWidthSrcSet(post.data.hero_image).srcset}
      alt={ph.asText(post.data.title)}
      loading="lazy"
      class="md:max-w-[33%] w-full max-h-[30rem] ml-auto h-auto object-cover"
    />
  </a>
  <Hex />
</div>
