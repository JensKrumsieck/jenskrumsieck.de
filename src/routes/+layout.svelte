<script lang="ts">
  import "@fontsource/pt-sans/400.css";
  import "@fontsource/pt-sans/400-italic.css";
  import "@fontsource/pt-sans/700.css";
  import "@fontsource/pt-sans/700-italic.css";
  import "../app.css";
  import Nav from "$lib/components/layout/Nav.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import { page } from "$app/state";
  import website from "$lib/util/website";
  import { onMount } from "svelte";
  import { dev } from "$app/environment";
  import * as Swetrix from "swetrix";

  onMount(() => {
    Swetrix.init("lp61TqcIrztc", {
      devMode: dev,
      disabled: dev,
      apiURL: "https://api.analytics.jenskrumsieck.de/log",
    });
    Swetrix.trackViews();
  });

  let { children } = $props();
</script>

<svelte:head>
  <title
    >{page.status >= 400
      ? "Fehler " + page.status + " - " + website.siteTitle
      : page.data.title
        ? page.data.title + " - " + website.siteTitle
        : website.siteTitle}</title
  >
  <meta name="robots" content={page.status >= 400 ? "noindex,follow" : (page.data.robots ?? "index,follow")} />
  <meta
    name="description"
    content={page.data.description ?? website.description}
  />
  <meta name="keywords" content={page.data.keywords ?? website.keywords} />
  <meta name="author" content={website.author} />
  <link rel="canonical" href={website.siteUrl + page.url.pathname} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content={page.data.image ?? website.image} />
  <meta property="og:type" content={page.data.post ? "article" : "website"} />
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
  {@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: website.author,
        url: website.siteUrl,
        image: website.image,
        jobTitle: "Wissenschaftler und Kandidat für den Stadtrat Braunschweig",
        sameAs: [
          "https://instagram.com/jens.ation",
          "https://www.linkedin.com/in/jenskrumsieck",
          "https://github.com/JensKrumsieck",
          "https://www.facebook.com/jens.krumsieck/",
        ],
      },
      {
        "@type": "WebSite",
        name: website.siteTitle,
        url: website.siteUrl,
        inLanguage: "de-DE",
      },
    ],
  })}</script>`}
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
