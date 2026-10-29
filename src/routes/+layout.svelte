<script lang="ts">
  import "@fontsource/pt-sans/400.css";
  import "@fontsource/pt-sans/400-italic.css";
  import "@fontsource/pt-sans/700.css";
  import "@fontsource/pt-sans/700-italic.css";
  import "../app.css";
  import Nav from "#lib/components/layout/Nav.svelte";
  import Footer from "#lib/components/layout/Footer.svelte";
  import { page } from "$app/state";
  import website from "#lib/util/website.js";
  import { onMount } from "svelte";
  import { dev } from '$app/env';
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

  const title = $derived(
    page.status >= 400
      ? "Fehler " + page.status + " - " + website.siteTitle
      : page.data.title
        ? page.data.title + " - " + website.siteTitle
        : website.homeTitle,
  );
  // pages can override the canonical path, e.g. to keep ?page= on paginated lists
  const canonical = $derived(website.siteUrl + (page.data.canonical ?? page.url.pathname));
</script>

<svelte:head>
  <title>{title}</title>

  <meta
    name="robots"
    content={page.status >= 400 ? "noindex,follow" : page.data.robots ?? "index,follow"}
  />

  <meta
    name="description"
    content={page.data.description ?? website.description}
  />
  <meta name="keywords" content={page.data.keywords ?? website.keywords} />
  <meta name="author" content={website.author} />
  <link rel="canonical" href={canonical} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content={page.data.image ?? website.image} />
  <meta property="og:type" content={page.data.post ? "article" : "website"} />
  <meta property="og:site_name" content={website.siteTitle} />
  <meta property="og:locale" content="de_DE" />

  <meta property="og:url" content={canonical} />

  <meta property="og:title" content={title} />
  <meta
    property="og:description"
    content={page.data.description ?? website.description}
  />

  <meta
    property="og:image"
    content={page.data.image ?? website.image}
  />
  <!-- og_image.jpg and post images (cropped in blog/[slug]/+page.ts) are both 1200x630 -->
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta property="og:image:alt" content={title} />
  {@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: website.author,
        honorificPrefix: "Dr.",
        url: website.siteUrl,
        image: website.image,
        jobTitle: "Ratsherr der Stadt Braunschweig",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Braunschweig",
          addressRegion: "Niedersachsen",
          addressCountry: "DE",
        },
        memberOf: {
          "@type": "Organization",
          name: "BÜNDNIS 90/DIE GRÜNEN",
          url: "https://gruene-braunschweig.de/",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Technische Universität Braunschweig",
          url: "https://www.tu-braunschweig.de/",
        },
        sameAs: [
          "https://instagram.com/jens.ation",
          "https://www.linkedin.com/in/jenskrumsieck",
          "https://github.com/JensKrumsieck",
          "https://www.facebook.com/jens.krumsieck/",
          "https://www.researchgate.net/profile/Jens-Krumsieck",
          "https://orcid.org/0000-0001-6242-5846",
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
