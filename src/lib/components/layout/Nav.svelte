<script>
  import Logo from "./Logo.svelte";

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
    <Logo />
    <button
      data-collapse-toggle="main-menu"
      type="button"
      class="inline-flex items-center p-2 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2"
      aria-controls="main-menu"
      aria-expanded="false"
      on:click={() => (open = !open)}
    >
      <span class="sr-only">Open main menu</span>
      <OpenClose {open} />
    </button>
    <div
      class:hidden={!open}
      class="font-semibold w-full items-center lg:w-auto text-xl lg:flex lg:relative absolute lg:bg-transparent bg-white left-0 lg:top-0 top-20 z-20 lg:py-0 py-4"
      id="mainMenu"
    >
      <ul class="flex navbar lg:flex-row flex-col">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/publications">Veröffentlichungen</NavLink>
        <NavLink href="/about">Über Mich</NavLink>
        <NavLink button href="/contact"><Button span>Kontakt</Button></NavLink>
      </ul>
    </div>
  </Container>
</nav>
