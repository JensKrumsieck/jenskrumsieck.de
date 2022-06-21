<script>
  import * as ph from "@prismicio/helpers";
  export let slice;
</script>

<section class="my-10 flex justify-center">
  <a href={ph.asImageSrc(slice.primary.content)}>
    <img
      src={ph.asImageSrc(slice.primary.content)}
      alt={slice.primary.content.alt ? slice.primary.content.alt : "Galerie"}
      class="max-h-96 mx-auto w-auto"
    />
  </a>
</section>
