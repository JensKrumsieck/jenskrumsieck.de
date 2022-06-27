<script>
  import * as ph from "@prismicio/helpers";
  import Image from "$lib/components/layout/Image.svelte";
  export let image;
  let clazz = ""
  export {clazz as class}
  let width = 1000;
</script>

<Image
  src={ph.asImageSrc(image)}
  thumbSrc={ph.asImageSrc(image) + "&w=" + width}
  alt={image.alt ? image.alt : "Ein Bild"}
  class={clazz}
/>
{#if image.copyright != undefined}
  <div class="absolute right-2 bottom-0">
    <div class="bg-white rounded p-1 text-xs my-1 opacity-50">
      &copy; {image.copyright}
    </div>
  </div>
{/if}
