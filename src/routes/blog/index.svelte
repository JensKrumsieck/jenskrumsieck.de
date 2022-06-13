<script>
  import FirstBlog from "$lib/components/blocks/FirstBlog.svelte";
  import SecondBlogs from "$lib/components/blocks/SecondBlogs.svelte";
  import Rect from "$lib/components/deco/Rect.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import BiggerTitle from "$lib/components/typography/BiggerTitle.svelte";
  export let posts;
</script>

<Rect />
<Container padding class="mt-12">
  <BiggerTitle>Was gibt's Neues?</BiggerTitle>

  <div class="flex flex-wrap justify-between">
    {#each posts.results as post, i}
      {#if i == 0}
        <FirstBlog {post} />
      {:else if i < 4}
        <SecondBlogs {post} />
      {:else}
        not prepared
      {/if}
    {/each}
  </div>
</Container>
