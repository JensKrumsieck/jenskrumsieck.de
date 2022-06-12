<script>
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
</script>

<header>
  <Nav/>
</header>

<main>
  <slot />
</main>
