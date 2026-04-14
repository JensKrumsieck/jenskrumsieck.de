<script lang="ts">
  import type { Snippet } from "svelte";
  type Props = {
    href?: string;
    external?: boolean;
    outlined?: boolean;
    span?: boolean;
    children?: Snippet;
  };

  let { href = "", external = false, outlined = false, span = false, children }: Props = $props();
  let classNames = $derived(outlined ? "border-primary-600 border-4 py-1 hover:border-primary-900 rounded-full" : "bg-primary-600 hover:bg-primary-900 text-white py-2 rounded-full");
</script>

{#if span}
  <span class={classNames + " px-5 relative items-center justify-center font-semibold text-xl inline-flex"}>
    {@render children?.()}
  </span>
{:else}
  <a {href} class={classNames + " px-5 relative items-center justify-center font-semibold text-xl inline-flex"}>
    {@render children?.()}
    {#if external}
      <span class="ml-4 font-black">&rarr;</span>
    {/if}
  </a>
{/if}
