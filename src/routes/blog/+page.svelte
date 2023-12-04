<script>
  import FirstBlog from "$lib/components/blocks/FirstBlog.svelte";
  import ListBlog from "$lib/components/blocks/ListBlog.svelte";
  import Hr from "$lib/components/deco/HR.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import LargeTitle from "$lib/components/typography/LargeTitle.svelte";
  export let data;
  let { posts } = data;
</script>

<Container padding class="mt-12">
  <LargeTitle>Was gibt's Neues?</LargeTitle>
  <div class="flex flex-wrap justify-between">
    <FirstBlog post={posts.results[0]} />
  </div>
  <div class="my-12">
    <Hr />
    <div class="flex my-12 flex-wrap">
      {#each posts.results.slice(1) as post}
        <ListBlog {post} />
      {/each}
    </div>
  </div>
</Container>
