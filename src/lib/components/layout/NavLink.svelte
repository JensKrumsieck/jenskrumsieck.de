<script lang="ts">
  import { page } from "$app/state";

  export let href = "";
  export let active = false;
  export let button = false;
  let padding = button ? "pt-1" : "pt-3";

  let linkCSS =
    "block px-4 pb-0 flex flex-col hover:bg-linear-to-b from-transparent to-sun-600 from-60% to-60% items-center" +
    padding;

  $: active =
    page.url.href == href ||
    (page.url.pathname.includes(href) && href != "/") ||
    (page.url.pathname == "/" && href == "/");
</script>

<li class="nav-link" class:active>
  <a {href} class={linkCSS}>
    <slot />
  </a>
</li>
