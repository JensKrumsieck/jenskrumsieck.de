<script context="module">
  import { base } from "$app/paths";

  export async function load({ params, fetch, session, stuff }) {
    const data = await fetch(`${base}/blog.json`);
    const posts = await data.json();
    return {
      props: posts,
      stuff: {
        title: "Blog",
      },
    };
  }
</script>

<script>
  import FirstBlog from "$lib/components/blocks/FirstBlog.svelte";
  import ListBlog from "$lib/components/blocks/ListBlog.svelte";
  import SecondBlogs from "$lib/components/blocks/SecondBlogs.svelte";
  import Hr from "$lib/components/deco/HR.svelte";
  import Rect from "$lib/components/deco/Rect.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import LargeTitle from "$lib/components/typography/LargeTitle.svelte";
  export let posts;
</script>

<Rect />
<Container padding class="mt-12">
  <LargeTitle>Was gibt's Neues?</LargeTitle>
  <div class="flex flex-wrap justify-between">
    <FirstBlog post={posts.results[0]} />
    {#each posts.results.slice(1, 5) as post}
      <SecondBlogs {post} />
    {/each}
  </div>
  <div class="my-12">
    <Hr />
    <div class="flex my-12 flex-wrap">
      {#each posts.results.slice(5) as post}
        <ListBlog {post} />
      {/each}
    </div>
  </div>
</Container>
