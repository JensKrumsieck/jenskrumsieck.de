<script lang="ts">
    import type { PageProps } from "./$types";
    import ListBlog from "$lib/components/blocks/ListBlog.svelte";
    import Container from "$lib/components/layout/Container.svelte";
    import Masonry from "$lib/components/layout/Masonry.svelte";

    let { data }: PageProps = $props();
    let posts = $derived(data.posts);
</script>

<Container>
    <h3>Aktuelle Beiträge zu Mobilität</h3>
    <Masonry gridGap="1rem">
        {#each posts?.results as post}
            <ListBlog {post} />
        {/each}
    </Masonry>
</Container>
