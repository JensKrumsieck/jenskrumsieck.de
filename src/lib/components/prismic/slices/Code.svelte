<script>
    import * as ph from "@prismicio/helpers";
    import { HighlightAuto } from "svelte-highlight";
    import { githubDarkDimmed } from "svelte-highlight/styles";
    
    export let slice;
</script>
<svelte:head>
  {@html githubDarkDimmed}
</svelte:head>
<div class="mt-4">
  <HighlightAuto code={ph.asText(slice.primary.content)}/>
</div>