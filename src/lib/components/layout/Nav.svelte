<script>
  import Container from "./Container.svelte";
  import NavLink from "./NavLink.svelte";

  import { page } from "$app/stores";
  import OpenClose from "../button/OpenClose.svelte";
  import Button from "../button/Button.svelte";
  let open = false;

  $: {
    open = false;
    let url = $page;
  }
</script>

<nav class="lg:bg-transparent bg-white z-20">
  <Container padding class="flex flex-wrap justify-between py-5">
    <div class="logo">
      <a href="/" class="flex block">
        <img src="/logo.svg" alt="Logo" />
        <span class="text-5xl font-black italic mx-3 tracking-tightest sm:flex hidden"
          >Jens Krumsieck</span
        >
      </a>
    </div>
    <button
      data-collapse-toggle="main-menu"
      type="button"
      class="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2"
      aria-controls="main-menu"
      aria-expanded="false"
      on:click={() => (open = !open)}
    >
      <span class="sr-only">Open main menu</span>
      <OpenClose {open} />
    </button>
    <div
      class:hidden={!open}
      class="font-semibold w-full items-center md:w-auto text-xl md:flex md:relative absolute md:bg-transparent bg-white left-0 md:top-0 top-20 z-20 md:py-0 py-4"
      id="mainMenu"
    >
      <ul class="flex navbar md:flex-row flex-col">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/publications">Veröffentlichungen</NavLink>
        <NavLink href="/about">Über Mich</NavLink>
        <NavLink button href="/contact"><Button span>Kontakt</Button></NavLink>
      </ul>
    </div>
  </Container>
</nav>
