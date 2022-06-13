<script>
    import * as ph from '@prismicio/helpers'
    export let slice
</script>

<article class="prose-lg prose-a:text-dark-green hover:prose-a:underline">
    {@html ph.asHTML(slice.primary.content)}
</article>