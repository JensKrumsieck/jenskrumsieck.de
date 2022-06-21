<script>
  import * as ph from "@prismicio/helpers";
  export let slice;
</script>

<section class="my-10 flex justify-center relative">
  <a href={ph.asImageSrc(slice.primary.content)}>
    <img
      src={ph.asImageSrc(slice.primary.content)}
      alt={slice.primary.content.alt ? slice.primary.content.alt : "Galerie"}
      class="max-h-96 mx-auto w-auto"
    />
  </a>
  {#if slice.primary.content.copyright != undefined}
    <div class="absolute right-2 bottom-0">
      <div class="bg-white rounded p-1 text-xs my-1 opacity-50">
        &copy; {slice.primary.content.copyright}
      </div>
    </div>
  {/if}
</section>
