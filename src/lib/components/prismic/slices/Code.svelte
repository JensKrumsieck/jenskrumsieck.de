<script>
    import * as prismic from "@prismicio/client";
    import { HighlightAuto } from "svelte-highlight";
    import { githubDarkDimmed } from "svelte-highlight/styles";
    
    export let slice;
</script>
<svelte:head>
  {@html githubDarkDimmed}
</svelte:head>
<div class="mt-4">
  <HighlightAuto code={prismic.asText(slice.primary.content)}/>
</div>