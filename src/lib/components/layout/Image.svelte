<script lang="ts">
  export let src;
  export let width = 0;
  export let height = 0;
  export let thumbSrc;
  export let alt;
  // set for the image that is likely the LCP element (above the fold)
  export let priority = false;

  let clazz = "";
  export { clazz as class };
</script>

<a href={src} target="_blank" rel="noopener noreferrer">
  {#if width == 0 || height == 0}
    <img
      loading={priority ? "eager" : "lazy"}
      fetchpriority={priority ? "high" : undefined}
      src={thumbSrc}
      {alt}
      {...$$restProps}
      class={clazz + " cursor-pointer"}
    />
  {:else}
    <img
      loading={priority ? "eager" : "lazy"}
      fetchpriority={priority ? "high" : undefined}
      src={thumbSrc}
      {width}
      {height}
      {alt}
      {...$$restProps}
      class={clazz + " cursor-pointer"}
    />
  {/if}
</a>
