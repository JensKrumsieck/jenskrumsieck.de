<script>
  export let href = "";
  export let external = false;
  export let outlined = false;

  let classNames = outlined ? "border-black border-4 py-1 hover:border-dark-green" : "bg-black hover:bg-dark-green text-white py-2 "
</script>

<a
  {href}
  class={classNames + " px-5 relative items-center justify-center font-semibold text-xl inline-flex"}
>
  <slot />
  {#if external}
    <span class="ml-4 font-black">&rarr;</span>
  {/if}
</a>
