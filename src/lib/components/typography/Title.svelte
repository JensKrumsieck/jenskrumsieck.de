<script>
  export let tag = "h1";
  let clazz = "";
  export { clazz as class };
</script>

<svelte:element this={tag} class={`text-5xl font-gruene my-5 ${clazz}`}>
  <slot/>
</svelte:element>
