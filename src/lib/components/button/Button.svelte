<script>
  export let href = "";
  export let external = false;
  export let outlined = false;
  export let span = false;
  let classNames = outlined
    ? "border-black border-4 py-1 hover:border-dark-green"
    : "bg-black hover:bg-dark-green text-white py-2 ";
</script>

{#if span}
  <span
    class={classNames +
      " px-5 relative items-center justify-center font-semibold text-xl inline-flex"}
  >
    <slot />
  </span>
{:else}
  <a
    {href}
    class={classNames +
      " px-5 relative items-center justify-center font-semibold text-xl inline-flex"}
  >
    <slot />
    {#if external}
      <span class="ml-4 font-black">&rarr;</span>
    {/if}
  </a>
{/if}
