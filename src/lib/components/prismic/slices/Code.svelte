<script lang="ts">
    import * as prismic from "@prismicio/client";
    import hljs from "highlight.js/lib/core";
    import csharp from "highlight.js/lib/languages/csharp";
    import glsl from "highlight.js/lib/languages/glsl";
    import xml from "highlight.js/lib/languages/xml";
    import "highlight.js/styles/github-dark-dimmed.css";

    hljs.registerLanguage("csharp", csharp);
    hljs.registerLanguage("glsl", glsl);
    hljs.registerLanguage("xml", xml);

    export let slice;

    // blog entries do not state their language, detect it among the ones in use
    $: highlighted = hljs.highlightAuto(prismic.asText(slice.primary.content) ?? "", ["csharp", "glsl", "xml"]).value;
</script>

<div class="mt-4">
  <pre><code class="hljs">{@html highlighted}</code></pre>
</div>
