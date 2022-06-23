<script>
  import { openModal } from "svelte-modals";
  import Modal from "./Modal.svelte";
  export let src;
  export let width = 0;
  export let height = 0;
  export let thumbSrc;
  export let alt;
  
  let clazz = ""
  export {clazz as class}
  function click() {
    openModal(Modal, {
      content: `<img src="${src}" class="max-h-[80vh] max-w-[90vw]" loading="lazy"/>`,
    });
  }
</script>

{#if width == 0 || height == 0}
  <img
    loading="lazy"
    on:click={click}
    src={thumbSrc}
    {alt}
    {...$$restProps}
    class={clazz + " cursor-pointer"}
  />
{:else}
  <img
    loading="lazy"
    on:click={click}
    src={thumbSrc}
    {width}
    {height}
    {alt}
    {...$$restProps}
    class={clazz + " cursor-pointer"}
  />
{/if}
