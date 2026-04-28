<script lang="ts">
    import type { Picture } from "@sveltejs/enhanced-img";
    //@ts-ignore
    import mobi from "$lib/assets/mobi.jpg?enhanced&w=1280;640;400";

    //@ts-ignore
    import demo from "$lib/assets/demo.jpg?enhanced&w=1280;640;400";

    type Topic = {
        title: string;
        description: string;
        image: Picture;
        link?: string;
    };

    let topics: Topic[] = [
        {
            title: "Mobilität & Verkehr",
            description:
                "Mobilität entscheidet, wer Zugang zu Chancen hat und wer nicht, wer sicher zur Schule kommt, wer im Alter selbsständig " +
                "bleiben kann und wer unter Abgas und Lärm leidet. Ich setze mich im Rat der Stadt Braunschweig für eine gerechte, klimafreundliche " +
                "Verkehrspolitik ein, die allen Menschen nützt. Das heißt für mich u.a. Ausbau des ÖPNV-Netzes und Taktverdichtung, durchgängige " +
                "Radwege, intelligente Sharing-Modelle für Car- & Bikesharing und Reduktion von Lärm- und Abgasbelastung.",
            image: mobi,
            link: "/themen/mobilitaet",
        },
        {
            title: "Umwelt- & Klimaschutz",
            description:
                "Warum wollen Menschen ihre Lebensgrundlage zerstören? Das ist eine Frage, die mich umtreibt. Wir strapazieren unsere Umwelt und das Klima " +
                "unseres Planeten mit immer steigenden CO<sub>2</sub>-Emissionen. In folge des Klimawandels müsssen wir unsere Stadt resilienter gehen Extremwetterereignisse " +
                "machen. Dazu gehören Hochwasserschutz u.a. durch das Prinzip der Schwammstadt, sowie Entsiegelung von Begrünung von Flächen wie dem Schlossplatz, um Abkühlung " +
                "durch eine Veränderung Mikroklimas zu schaffen.<br/>" +
                "Wir können selbst entscheiden, wie heiß unsere Straßen im Sommer werden und wie sauber unsere Luft ist - packen wir's an!",
            image: demo,
            link: undefined,
        },
    ];
</script>

<div class="flex flex-col gap-4 w-full">
    {#each topics as topic}
        <a class="bg-white shadow-lg rounded-md p-4 md:flex-row flex-col flex gap-4" href={topic.link}>
            <div class="w-full md:w-48 h-48 shrink-0">
                <enhanced:img src={topic.image} alt={topic.title} class="object-cover rounded-sm w-full md:w-48 h-48" sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" />
            </div>
            <div>
                <h3 class="font-gruene text-2xl">{topic.title}</h3>
                <p>{@html topic.description}</p>
            </div>
        </a>
    {/each}
</div>
