<script lang="ts">
    import mobi from "$lib/assets/mobi.jpg?enhanced";
    import ListBlog from "$lib/components/blocks/ListBlog.svelte";
    import Container from "$lib/components/layout/Container.svelte";
    import Masonry from "$lib/components/layout/Masonry.svelte";
    import Title from "$lib/components/typography/Title.svelte";
    import SubTitle from "$lib/components/typography/SubTitle.svelte";

    export let data;
    let { posts = { results: [] } } = data;
</script>

<Container padding>
    <Title>Umwelt- & Klimaschutz</Title>
    <div class="prose prose-lg max-w-none">
        Warum wollen Menschen ihre Lebensgrundlage zerstören? Das ist eine Frage, die mich umtreibt. Wir strapazieren unsere Umwelt und das Klima unseres Planeten mit immer steigenden CO<sub>2</sub>-Emissionen. In folge des Klimawandels müsssen
        wir unsere Stadt resilienter gehen Extremwetterereignisse machen. Dazu gehören Hochwasserschutz u.a. durch das Prinzip der Schwammstadt, sowie Entsiegelung von Begrünung von Flächen wie dem Schlossplatz, um Abkühlung durch eine
        Veränderung Mikroklimas zu schaffen.<br />
        Wir können selbst entscheiden, wie heiß unsere Straßen im Sommer werden und wie sauber unsere Luft ist - packen wir's an!,
    </div>

    <SubTitle class="mt-12">Aktuelle Beiträge</SubTitle>
</Container>
<Container>
    <Masonry gridGap="1rem">
        {#each posts?.results as post}
            <ListBlog {post} />
        {/each}
    </Masonry>
</Container>
<Container class="md:justify-center flex flex-col mt-12">
    <a href="/blog" class="justify-end self-end mt-4 font-bold text-xl hover:text-secondary-500"> Alle Artikel lesen! &rArr; </a>
</Container>
