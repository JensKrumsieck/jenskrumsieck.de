<script lang="ts">
    import type { PageProps } from "./$types";
    import ListBlog from "$lib/components/blocks/ListBlog.svelte";
    import Container from "$lib/components/layout/Container.svelte";
    import Masonry from "$lib/components/layout/Masonry.svelte";
    import Title from "$lib/components/typography/Title.svelte";
    import SubTitle from "$lib/components/typography/SubTitle.svelte";

    let { data }: PageProps = $props();
    let posts = $derived(data.posts);
</script>
<Container padding>
    <Title>Mobilität</Title>
    <SubTitle>Aktuelle Beiträge</SubTitle>
</Container>
<Container>
    <Masonry gridGap="1rem">
        {#each posts?.results as post}
            <ListBlog {post} />
        {/each}
    </Masonry>
</Container>
