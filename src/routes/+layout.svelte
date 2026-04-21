<script lang="ts">
  import "@fontsource/pt-sans/400";
  import "@fontsource/pt-sans/400-italic";
  import "@fontsource/pt-sans/700";
  import "@fontsource/pt-sans/700-italic";
  import "../app.css";
  import Nav from "$lib/components/layout/Nav.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import { page } from "$app/state";
  import website from "$lib/util/website";

  let { children } = $props();
</script>

<svelte:head>
  <title
    >{page.data.title
      ? page.data.title + " - " + website.siteTitle
      : website.siteTitle}</title
  >
  <meta
    name="description"
    content={page.data.description ?? website.description}
  />
  <meta name="keywords" content={page.data.keywords ?? website.keywords} />
  <meta name="author" content={website.author} />
  <link rel="canonical" href={website.siteUrl + page.url.pathname} />
  <meta name="twitter:image" content={page.data.image ?? website.image} />
  <meta property="og:site_name" content={website.siteTitle} />
  <meta property="og:locale" content="de_DE" />
  <meta property="og:url" content={website.siteUrl + page.url.pathname} />
  <meta
    property="og:title"
    content={page.data.title
      ? page.data.title + " - " + website.siteTitle
      : website.siteTitle}
  />
  <meta
    property="og:description"
    content={page.data.description ?? website.description}
  />
  <meta property="og:image" content={page.data.image ?? website.image} />
  <meta
    property="og:image:alt"
    content={page.data.title
      ? page.data.title + " - " + website.siteTitle
      : website.siteTitle}
  />
</svelte:head>

<header>
  <Nav />
</header>

<main>
  {@render children?.()}
</main>

<footer>
  <Footer />
</footer>
