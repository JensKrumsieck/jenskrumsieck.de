<script lang="ts">
  import Date from "../blocks/Date.svelte";
  import * as prismic from "@prismicio/client";
  import { getExcerpt } from "#lib/util/text-helpers.js";

  type Props = {
    post: any;
    loading?: "lazy" | "eager";
    fetchpriority?: "high";
    // h3 below a section h2, h2 when the list sits directly below the page h1 (/blog)
    headingTag?: string;
  };

  let { post, loading = "lazy", fetchpriority, headingTag = "h3" }: Props = $props();
</script>

<a href={"/blog/" + post.uid} class="flex flex-col w-full hover:text-secondary-600 gap-4 bg-white rounded-lg shadow-md hover:bg-neutral-500">
  <img {loading} {fetchpriority} src={prismic.asImageSrc(post.data.hero_image) + "&w=800"} alt={prismic.asText(post.data.title)} class="h-72 shrink-0 rounded-t-lg object-cover object-top" />
  <div class="px-2 pb-2 flex flex-col gap-2">
    <svelte:element this={headingTag} class="text-2xl font-gruene">{prismic.asText(post.data.title)}</svelte:element>
    <p>
      {@html getExcerpt(prismic.asHTML(post.data.body[0]?.primary.content) ?? "", 250)}
    </p>
    <p class="uppercase text-xs items-end text-secondary-500">
      <Date date={prismic.asDate(post.data.publish_date)} />
    </p>
  </div>
</a>
