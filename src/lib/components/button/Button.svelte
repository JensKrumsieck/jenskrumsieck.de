<script>
  export let href = "";
  export let external = false;
  export let outlined = false;
  export let span = false;
  let classNames = outlined
    ? "border-primary-600 border-4 py-1 hover:border-primary-900 rounded-full"
    : "bg-primary-600 hover:bg-primary-900 text-white py-2 rounded-full";
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
