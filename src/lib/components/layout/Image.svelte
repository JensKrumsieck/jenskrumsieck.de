<script>
  export let src;
  export let width = 0;
  export let height = 0;
  export let thumbSrc;
  export let alt;

  let clazz = "";
  export { clazz as class };
 
</script>

{#if width == 0 || height == 0}
  <img loading="lazy" src={thumbSrc} {alt} {...$$restProps} class={clazz + " cursor-pointer"} />
{:else}
  <img loading="lazy" src={thumbSrc} {width} {height} {alt} {...$$restProps} class={clazz + " cursor-pointer"} />
{/if}
