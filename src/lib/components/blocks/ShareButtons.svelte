<script>
  import { page } from "$app/stores";
  import {
    FacebookShare,
    LinkedInShare,
    PinterestShare,
    RedditShare,
    TwitterShare,
    WhatsAppShare,
    XingShare,
  } from "../button/share";
  import Subtitle from "../typography/Subtitle.svelte";
  export let title;
  export let image;
</script>

<div class="my-6 flex items-end flex-col">
  <Subtitle>Diesen Beitrag Teilen</Subtitle>
  <div class="flex space-x-4">
    <FacebookShare url={$page.url} {title} />
    <TwitterShare url={$page.url} {title} />
    <LinkedInShare url={$page.url} {title} />
    <XingShare url={$page.url} {title} />
    <RedditShare url={$page.url} {title} />
    <PinterestShare url={$page.url} {title} media={image} />
    <WhatsAppShare url={$page.url} {title} />
  </div>
</div>
