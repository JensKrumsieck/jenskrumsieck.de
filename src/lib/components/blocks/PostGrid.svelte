<script lang="ts">
  import ListBlog from "./ListBlog.svelte";
  import Masonry from "../layout/Masonry.svelte";

  type Props = {
    posts: any[];
    layout?: "grid" | "masonry";
  };

  let { posts, layout = "grid" }: Props = $props();
</script>

{#if layout === "masonry"}
  <Masonry gridGap="1rem">
    {#each posts as post}
      <ListBlog {post} />
    {/each}
  </Masonry>
{:else}
  <div class="grid md:grid-cols-2 my-12 flex-wrap gap-4">
    {#each posts as post}
      <ListBlog {post} />
    {/each}
  </div>
{/if}
