<script>
  import { page } from "$app/stores";

  export let prefetch = false;
  export let href = "";
  export let active = false;

  let linkCSS = "block px-4 pt-3 pb-0 flex flex-col hover:font-bold"

  $: active =
    $page.url.href == href ||
    ($page.url.pathname.includes(href) && href != "/") ||
    ($page.url.pathname == "/" && href == "/");
</script>

<li class="nav-link" class:active>
  {#if prefetch}
    <a {href} sveltekit:prefetch class={linkCSS}>
      <slot />
      <div class="w-5 h-1 underliner self-end" />
    </a>
  {:else}
    <a {href} class={linkCSS}>
      <slot />
      <div class="w-5 h-1 underliner self-end" />
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
  a:hover{
    .underliner{
        background: theme('colors.green');
    }
  }
</style>
