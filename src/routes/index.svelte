<script>
  import Button from "$lib/components/button/Button.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import Rect from "$lib/components/deco/Rect.svelte";
  import Social from "$lib/components/blocks/Social.svelte";
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

