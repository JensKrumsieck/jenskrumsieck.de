<script lang="ts">
    import * as prismic from '@prismicio/client'
    export let slice
</script>

<article class="prose max-w-[75ch] prose-lg prose-a:text-dark-green hover:prose-a:text-dark mt-5">
    {@html prismic.asHTML(slice.primary.content)}
</article>