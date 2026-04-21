<script>
  export let tag = "h2";
  let clazz = "";
  export { clazz as class };
</script>

<svelte:element this={tag} class={`text-4xl font-gruene ${clazz}`}>
  <slot/>
</svelte:element>
