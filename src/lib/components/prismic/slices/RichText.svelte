<script>
    import * as ph from '@prismicio/helpers'
    export let slice
</script>

<article class="prose max-w-none prose-lg prose-a:text-dark-green hover:prose-a:text-dark mt-5">
    {@html ph.asHTML(slice.primary.content)}
</article>