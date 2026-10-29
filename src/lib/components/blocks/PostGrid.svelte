<script lang="ts">
  import ListBlog from "./ListBlog.svelte";
  import Masonry from "../layout/Masonry.svelte";

  type Props = {
    posts: any[];
    layout?: "grid" | "masonry";
    // number of leading posts visible without scrolling: their images skip lazy loading, the first one is fetched with high priority (LCP)
    eager?: number;
    headingTag?: string;
  };

  let { posts, layout = "grid", eager = 0, headingTag }: Props = $props();
</script>

{#snippet item(post: any, i: number)}
  <ListBlog {post} {headingTag} loading={i < eager ? "eager" : "lazy"} fetchpriority={i === 0 && eager > 0 ? "high" : undefined} />
{/snippet}

{#if layout === "masonry"}
  <Masonry gridGap="1rem">
    {#each posts as post, i}
      {@render item(post, i)}
    {/each}
  </Masonry>
{:else}
  <div class="grid md:grid-cols-2 my-12 flex-wrap gap-4">
    {#each posts as post, i}
      {@render item(post, i)}
    {/each}
  </div>
{/if}
