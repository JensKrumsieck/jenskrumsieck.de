<script>
  import ListBlog from "#lib/components/blocks/ListBlog.svelte";
  import Container from "#lib/components/layout/Container.svelte";
  import Title from "#lib/components/typography/Title.svelte";
  import Button from "#lib/components/button/Button.svelte";
  export let data;
  $: ({ posts } = data);
</script>

<Container padding class="mt-12">
  <Title>Aktuelles</Title>
  <div class="grid md:grid-cols-2 my-12 flex-wrap gap-4">
    {#each posts.results as post}
      <ListBlog {post} />
    {/each}
  </div>
  {#if posts.total_pages > 1}
    <div class="flex justify-center items-center gap-4 mb-12">
      {#if posts.page > 1}
        <Button outlined href="/blog?page={posts.page - 1}">&larr; Neuer</Button>
      {/if}
      <span class="font-semibold">{posts.page} / {posts.total_pages}</span>
      {#if posts.page < posts.total_pages}
        <Button outlined href="/blog?page={posts.page + 1}">Älter &rarr;</Button>
      {/if}
    </div>
  {/if}
</Container>
