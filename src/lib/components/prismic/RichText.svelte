<script>
    import * as ph from '@prismicio/helpers'
    export let slice
</script>

<article class="prose-lg">
    {@html ph.asHTML(slice.primary.content)}
</article>