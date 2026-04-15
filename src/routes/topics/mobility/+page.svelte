<script lang="ts">
    import * as prismic from "@prismicio/client";
    type Props = {
        posts: { results: any[] };
    };

    let { posts }: Props = $props();
</script>

<h3>Aktuelle Beiträge zu Mobilität</h3>
{#each posts.results as post}
    {prismic.asText(post.data.title)}
{/each}
