<script>
  export let padding = false;
  let clazz = "";
  export { clazz as class };
</script>

<div
  class={`container mx-auto ${clazz || ""} ${padding ? " md:px-0 px-4" : ""}`}
>
  <slot />
</div>
