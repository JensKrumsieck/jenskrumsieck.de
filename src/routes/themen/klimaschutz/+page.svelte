<script lang="ts">
    import mobi from "#lib/assets/mobi.jpg?enhanced";
    import PostGrid from "#lib/components/blocks/PostGrid.svelte";
    import MoreLink from "#lib/components/button/MoreLink.svelte";
    import Prose from "#lib/components/typography/Prose.svelte";
    import Container from "#lib/components/layout/Container.svelte";
    import Title from "#lib/components/typography/Title.svelte";
    import SubTitle from "#lib/components/typography/SubTitle.svelte";

    export let data;
    let { posts = { results: [] } } = data;
</script>

<Container padding>
    <Title>Umwelt- & Klimaschutz</Title>
    <Prose class="[--tw-prose-body:#000]">
        Warum wollen Menschen ihre Lebensgrundlage zerstören? Das ist eine Frage, die mich umtreibt. Wir strapazieren unsere Umwelt und das Klima unseres Planeten mit immer steigenden CO<sub>2</sub>-Emissionen. Infolge des Klimawandels müssen
        wir unsere Stadt resilienter gegen Extremwetterereignisse machen. Dazu gehören Hochwasserschutz u.a. durch das Prinzip der Schwammstadt, sowie Entsiegelung und Begrünung von Flächen wie dem Schlossplatz, um Abkühlung durch eine
        Veränderung des Mikroklimas zu schaffen.<br />
        Wir können selbst entscheiden, wie heiß unsere Straßen im Sommer werden und wie sauber unsere Luft ist - packen wir's an!
    </Prose>

    <SubTitle class="mt-12">Aktuelle Beiträge</SubTitle>
</Container>
<Container>
    <PostGrid posts={posts?.results} layout="masonry" />
</Container>
<Container class="md:justify-center flex flex-col mt-12">
    <MoreLink href="/blog">Alle Artikel lesen!</MoreLink>
</Container>
