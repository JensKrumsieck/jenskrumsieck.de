<script>
  import PostGrid from "#lib/components/blocks/PostGrid.svelte";
  import Page from "#lib/components/layout/Page.svelte";
  import Button from "#lib/components/button/Button.svelte";
  export let data;
  $: ({ posts } = data);
</script>

<Page title="Aktuelles" class="mt-12">
  <PostGrid posts={posts.results} eager={2} />
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
</Page>
