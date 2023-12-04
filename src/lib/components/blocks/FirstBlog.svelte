<script>
  import Title from "../typography/Title.svelte";
  import Date from "../blocks/Date.svelte";
  import * as ph from "@prismicio/helpers";
  import { getExcerpt } from "$lib/util/text-helpers";
  export let post;
</script>

<div class="my-8 w-full">
  <a href={"/blog/" + post.uid} class="flex md:flex-row flex-col">
    <img
      src={ph.asImageSrc(post.data.hero_image) + "&w=850"}
      alt={ph.asText(post.data.title)}
      loading="lazy"
      class="md:w-[40%] w-full max-h-[90rem] ml-auto h-auto object-cover rounded-md"
    />
    <div class="pl-8">
      <Title>{ph.asText(post.data.title)}</Title>
      <p>
        {@html getExcerpt(ph.asHTML(post.data.body[0].primary.content), 1000)}
      </p>
      <div class="py-2">
        {#each post.tags as tag}
          <span
            class="inline-flex items-center justify-center px-2 py-1 mr-1 text-xs font-bold leading-none text-white bg-dark-green rounded-full"
            >{tag}</span
          >
        {/each}
      </div>
      <p class="uppercase mt-3 text-dark text-sm">
        {ph.asText(post.data.author.data.name)} - <Date
          date={ph.asDate(post.data.publish_date)}
        />
      </p>
    </div>
  </a>
</div>
