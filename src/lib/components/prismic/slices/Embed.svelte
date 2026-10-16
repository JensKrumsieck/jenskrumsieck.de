<script lang="ts">
  import ConsentEmbed from "../ConsentEmbed.svelte";
  import { externalHost } from "#lib/util/text-helpers.js";

  export let slice;
  let html = slice.primary.data.html
    .replace(/width="\d+"/, `class="w-full aspect-video mb-8"`)
    .replace(/height="\d+"/, "")
    .replace("//www.youtube.com/embed", "//www.youtube-nocookie.com/embed");
  const host = externalHost(html) ?? slice.primary.data.provider_name ?? "einem externen Anbieter";
</script>

<div class="flex ">
  <div
    class="mx-auto lg:w-[75%] w-full"
    data-oembed={slice.primary.data.embed_url}
    data-oembed-type={slice.primary.data.type}
    data-oembed-proviver={slice.primary.data.provider_name}
  >
    <ConsentEmbed {html} {host} class="aspect-video" />
  </div>
</div>
