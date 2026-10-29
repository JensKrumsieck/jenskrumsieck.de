<script lang="ts">
  import * as prismic from "@prismicio/client";
  import Image from "#lib/components/layout/Image.svelte";
  export let image;
  // used when the image has no alt text in Prismic
  export let alt = "";
  let clazz = ""
  export {clazz as class}
  let width = 1000;
  let height = image.dimensions ? Math.round(image.dimensions.height / (image.dimensions.width / width)) : 0;
</script>

<Image
  src={prismic.asImageSrc(image)}
  thumbSrc={prismic.asImageSrc(image) + "&w=" + width}
  {width}
  {height}
  alt={image.alt ? image.alt : alt}
  class={clazz}
/>
{#if image.copyright != undefined}
  <div class="absolute right-2 bottom-0">
    <div class="bg-white rounded p-1 text-xs my-1 opacity-50">
      &copy; {image.copyright}
    </div>
  </div>
{/if}
