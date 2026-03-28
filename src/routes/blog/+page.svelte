<script>
  import ListBlog from "$lib/components/blocks/ListBlog.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import Title from "$lib/components/typography/Title.svelte";
  export let data;
  let { posts } = data;
</script>

<Container padding class="mt-12">
  <Title>Aktuelles</Title>
  <div class="grid md:grid-cols-2 my-12 flex-wrap gap-4">
    {#each posts.results as post}
      <ListBlog {post} />
    {/each}
  </div>
</Container>
