<script lang="ts">
  import "@fontsource/source-sans-pro/200.css";
  import "@fontsource/source-sans-pro/200-italic.css";
  import "@fontsource/source-sans-pro/400.css";
  import "@fontsource/source-sans-pro/400-italic.css";
  import "@fontsource/source-sans-pro/600.css";
  import "@fontsource/source-sans-pro/600-italic.css";
  import "@fontsource/source-sans-pro/700.css";
  import "@fontsource/source-sans-pro/700-italic.css";
  import "@fontsource/source-sans-pro/900.css";
  import "@fontsource/source-sans-pro/900-italic.css";
  import "../app.css";
  import Nav from "$lib/components/layout/Nav.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import { page } from "$app/state";
  import website from "$lib/util/website";
  import { Modals } from "svelte-modals";

  let { children } = $props();
</script>

<svelte:head>
  <title>{page.data.title ? page.data.title + " - " + website.siteTitle : website.siteTitle}</title>
  <meta name="description" content={page.data.description ?? website.description} />
  <meta name="keywords" content={page.data.keywords ?? website.keywords} />
  <meta name="author" content={website.author} />
  <link rel="canonical" href={website.siteUrl + page.url.pathname} />
  <meta name="twitter:image" content={page.data.image ?? website.image} />
  <meta property="og:site_name" content={website.siteTitle} />
  <meta property="og:locale" content="de_DE" />
  <meta property="og:url" content={website.siteUrl + page.url.pathname} />
  <meta property="og:title" content={page.data.title ? page.data.title + " - " + website.siteTitle : website.siteTitle} />
  <meta property="og:description" content={page.data.description ?? website.description} />
  <meta property="og:image" content={page.data.image ?? website.image} />
  <meta property="og:image:alt" content={page.data.title ? page.data.title + " - " + website.siteTitle : website.siteTitle} />
</svelte:head>

<Modals>
  {#snippet backdrop({ close })}
    <div class="fixed top-0 left-0 right-0 bottom-0 z-[90] bg-dark opacity-70 cursor-pointer" onclick={() => close()}></div>
  {/snippet}
</Modals>

<header>
  <Nav />
</header>

<main>
  {@render children?.()}
</main>

<footer>
  <Footer />
</footer>
