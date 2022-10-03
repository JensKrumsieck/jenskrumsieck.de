<script>
  export let slice;
  let html = slice.primary.data.html
    .replace(/width="\d+"/, `class="w-full aspect-video mb-8"`)
    .replace(/height="\d+"/, "");
</script>

<div class="flex ">
  <div
    class="mx-auto lg:w-[75%] w-full"
    data-oembed={slice.primary.data.embed_url}
    data-oembed-type={slice.primary.data.type}
    data-oembed-proviver={slice.primary.data.provider_name}
  >
    {@html html}
  </div>
</div>
