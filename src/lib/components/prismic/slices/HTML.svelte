<script lang="ts">
  import * as prismic from "@prismicio/client";
  import ConsentEmbed from "../ConsentEmbed.svelte";
  import { externalHost } from "#lib/util/text-helpers.js";

  export let slice;
  const html = prismic.asText(slice.primary.content) ?? "";
  // html that pulls in external resources (iframes, images, scripts) is only loaded after a click
  const host = externalHost(html);
</script>

{#if host}
  <ConsentEmbed {html} {host} class="min-h-48" />
{:else}
  <article class="prose max-w-none prose-lg prose-a:text-dark-green hover:prose-a:text-dark">
    {@html html}
  </article>
{/if}
