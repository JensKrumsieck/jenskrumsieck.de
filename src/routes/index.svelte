<script>
  import Button from "$lib/components/button/Button.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import Rect from "$lib/components/deco/Rect.svelte";
  import Social from "$lib/components/blocks/Social.svelte";
  import FirstBlog from "$lib/components/blocks/FirstBlog.svelte";
  import SecondBlogs from "$lib/components/blocks/SecondBlogs.svelte";
  import Hr from "$lib/components/deco/HR.svelte";
  import ListBlog from "$lib/components/blocks/ListBlog.svelte";

  export let posts;
</script>

<Rect class="flex flex-col">
  <img
    src="hero.png"
    alt="Jens in seinem Labor"
    class="mix-blend-multiply max-h-full w-auto align-bottom mt-auto"
  />
</Rect>
<Container class="flex" padding fullHeight nav>
  <div class="flex flex-col md:max-w-[70%] justify-center">
    <span class="font-light md:text-xl text-lg">Hallo ich bin</span>
    <h1 class="font-bold md:text-5xl text-3xl tracking-tighter">
      Jens Krumsieck.
    </h1>
    <span class="font-light md:text-xl text-lg mt-6">Meine Themen sind</span>
    <h1 class="font-black md:text-7xl text-4xl tracking-tighter">
      Wissenschaft, Softwareentwicklung und Politik.
    </h1>
    <div class="mt-12">
      <Button href="/blog">Beiträge lesen</Button>
      <Button outlined href="/publications">Meine Veröffentlichungen</Button>
    </div>
    <Social class="mt-12" />
  </div>
</Container>

<Container padding fullHeight class="justify-center flex flex-col">
  <FirstBlog post={posts.results[0]} />
  <Hr />
  <div class="flex my-12 flex-wrap">
    {#each posts.results.slice(1) as post}
      <ListBlog {post} />
    {/each}
  </div>
  <Hr />
  <a href="/blog" class="justify-end self-end mt-4 font-bold text-xl">Mehr davon! &rArr;</a>
</Container>
