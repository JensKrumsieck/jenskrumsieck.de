<script lang="ts">
  import Gallery from "svelte-gallery";
  import Image from "#lib/components/layout/Image.svelte";
  export let slice;
  type GalleryImage = { thumbSrc: string; src: string; width: number; height: number; alt: string };
  let images: GalleryImage[] = [];
  slice.items.forEach((item: any) => {
    let img = item.image;
    let width = 300;
    let height = img.dimensions.height / (img.dimensions.width / width);
    images.push({
      thumbSrc: img.url + "&w=" + width,
      src: img.url,
      width: width,
      height: height,
      alt: img.alt ?? "",
    });
  });
</script>

<section class="my-10">
  <Gallery {images} imageComponent={Image as any} />
</section>
