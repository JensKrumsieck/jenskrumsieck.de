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
    <Title>Mobilität & Verkehr</Title>
    <Prose>
        <h3>Die Verkehrswende ist eine Gerechtigkeitsfrage.</h3>
        <enhanced:img src={mobi} alt="Mobilität und Verkehr" class="float-right w-64 m-4" />
        <p>
            Ich engagiere mich im Rat der Stadt Braunschweig, weil ich überzeugt bin: Mobilität ist die Grundstruktur unserer Stadt. Sie entscheidet darüber, wer Zugang zu Chancen hat und wer nicht. Wer gesund lebt und wer unter Lärm und Abgasen
            leidet. Ob Kinder sicher zur Schule kommen, ob ältere Menschen selbstständig bleiben können und wer sich frei bewegen kann und wer ausgeschlossen ist.
        </p>
        <p>
            Mobilität ist Sozialpolitik, weil Teilhabe Bewegungsfreiheit voraussetzt. Sie ist Wirtschaftspolitik, weil Braunschweig als Standort von VW, Alstom, Siemens und vielen Forschungsinstituten erreichbare Orte und zuverlässige Verbindungen
            braucht. Sie ist Klimapolitik, weil über 20 Prozent der deutschen Treibhausgasemissionen im Verkehr entstehen – und dort seit Jahrzehnten stagnieren. Und sie ist Gesundheitspolitik, weil Lärm und Schadstoffe direkt über Lebensqualität von
            Mensch und Tier entscheiden.
        </p>

        <p>
            Wer an einer Hauptverkehrsstraße wohnt, trägt die Lasten. Wer es sich leisten kann, zieht in ruhige Viertel und pendelt mit dem Auto. Wer kein Auto hat, ist strukturell benachteiligt. Das ist kein Naturgesetz, das ist politische
            Gestaltung. Und politische Gestaltung lässt sich verändern. Das zeigen uns auch die Städte in Europa, in denen ein Umdenken zu Veränderungen geführt hat. In Kopenhagen gibt es morgens Stau auf dem Radweg. In Utrecht werden 60 Prozent
            aller Wege im Binnenverkehr mit dem Rad zurückgelegt – in Braunschweig weniger als 30 Prozent. Münster zeigt seit Jahrzehnten, dass konsequente Radpolitik Stadtentwicklung verändert. Gute Mobilität entsteht nicht zufällig. Sie entsteht
            durch politische Entscheidungen.
        </p>
        <p>Ich möchte im Rat der Stadt Braunschweig daran mitarbeiten, dass wir echte Alternativen schaffen, zuverlässig, bezahlbar und so gut, dass Menschen sie freiwillig nutzen. Das bedeutet für mich:</p>
        <ul>
            <li>Kinder können sicher mit dem Rad zur Schule fahren, ohne dass Eltern sich Sorgen machen müssen.</li>
            <li>Ältere Menschen kommen selbstständig und ohne Auto von A nach B.</li>
            <li>Die Lärm- und Abgasbelastung in unseren Wohnquartieren sinkt spürbar.</li>
            <li>Braunschweig bekommt eine Radinfrastruktur, die ihren Namen verdient und einen ÖPNV, der wirklich funktioniert.</li>
            <li>Car- und Bikesharing verknüpfen alles miteinander und machen ein Leben ohne eigenes Auto alltagstauglich.</li>
        </ul>
        <p>Mobilität entscheidet darüber, wie gerecht, wie lebenswert und wie zukunftsfähig unser Braunschweig ist. Genau dafür setze ich mich ein.</p>
    </Prose>
    <SubTitle class="mt-12">Aktuelle Beiträge</SubTitle>
</Container>
<Container>
    <PostGrid posts={posts?.results} layout="masonry" />
</Container>
<Container class="md:justify-center flex flex-col mt-12">
    <MoreLink href="/blog">Alle Artikel lesen!</MoreLink>
</Container>
