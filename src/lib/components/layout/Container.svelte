<script>
  export let padding = false;
  export let fullHeight = false;
  export let nav = false;
  let clazz = "";
  export { clazz as class };
</script>

<div
  class={`container mx-auto ${clazz || ""} ${padding ? "  px-4" : ""} ${
    fullHeight ? (nav ? "h-screen-nav " : "min-h-screen") : ""
  }`}
>
  <slot />
</div>

<style>
  .h-screen-nav {
    min-height: calc(100vh - 88px);
  }
</style>
