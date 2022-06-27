<script>
  import Gallery from "svelte-gallery";
  import Image from "$lib/components/layout/Image.svelte";
  export let slice;
  let images = [];
  slice.items.forEach((img) => {
    img = img.image;
    let width = 300;
    let height = img.dimensions.height / (img.dimensions.width / width);
    images.push({
      thumbSrc: img.url + "&w=" + width,
      src: img.url,
      width: width,
      height: height,
    });
  });
</script>

<section class="my-10">
  <Gallery {images} imageComponent={Image} />
</section>
