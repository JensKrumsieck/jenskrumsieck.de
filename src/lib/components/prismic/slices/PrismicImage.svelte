<script>
  import * as ph from "@prismicio/helpers";
  import Image from "$lib/components/layout/Image.svelte";
  export let slice;
  let width = 550;
  const img = slice.primary.content;
  let height = img.dimensions.height / (img.dimensions.width / width);
</script>

<section class="my-10 flex justify-center relative">
  <Image
    src={ph.asImageSrc(slice.primary.content)}
    thumbSrc={ph.asImageSrc(slice.primary.content) + "&w=" + width}
    {width}
    alt={slice.primary.content.alt ? slice.primary.content.alt : "Ein Bild"}
    {height}
  />
  {#if slice.primary.content.copyright != undefined}
    <div class="absolute right-2 bottom-0">
      <div class="bg-white rounded p-1 text-xs my-1 opacity-50">
        &copy; {slice.primary.content.copyright}
      </div>
    </div>
  {/if}
</section>
