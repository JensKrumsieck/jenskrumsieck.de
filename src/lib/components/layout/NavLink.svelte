<script>
  import { page } from "$app/stores";

  export let prefetch = false;
  export let href = "";
  export let active = false;
  export let button = false;
  let padding = button ? "pt-1" : "pt-3";

  let linkCSS = "block md:pl-12 md:px-0 px-4 pb-0 flex flex-col hover:font-bold " + padding;

  $: active =
    $page.url.href == href ||
    ($page.url.pathname.includes(href) && href != "/") ||
    ($page.url.pathname == "/" && href == "/");
</script>

<li class="nav-link" class:active>
  {#if prefetch}
    <a {href} sveltekit:prefetch class={linkCSS}>
      <slot />
      {#if !button}<div class="w-5 h-1 underliner md:self-end" />{/if}
    </a>
  {:else}
    <a {href} class={linkCSS}>
      <slot />
      {#if !button}<div class="w-5 h-1 underliner md:self-end" />{/if}
    </a>
  {/if}
</li>

<style lang="scss">
  .active {
    font-weight: bold;
    .underliner {
      background: black;
    }
  }
  a:hover {
    .underliner {
      background: theme("colors.green");
    }
  }
</style>
