<script lang="ts">
    type Topic = {
        title: string;
        description: string;
        image: string;
        link?: string;
    };

    let topics: Topic[] = [
        {
            title: "Mobilität & Verkehr",
            description:
                "Mobilität entscheidet, wer Zugang zu Chancen hat und wer nicht, wer sicher zur Schule kommt, wer im Alter selbsständig bleiben kann und wer unter Abgas und Lärm leidet. Ich setze mich im Rat der Stadt Braunschweig für eine gerechte, klimafreundliche Verkehrspolitik ein, die allen Menschen nützt.",
            image: "",
            link: "/topics/mobility",
        },
        {
            title: "Umwelt- & Klimaschutz",
            description: "",
            image: "/demo.jpg",
            link: undefined,
        },
    ];
</script>

<div class="flex flex-col gap-4 w-full">
    {#each topics as topic}
        <a class="bg-white shadow-lg rounded-md p-4 flex gap-4" href={topic.link}>
            <enhanced:img src={topic.image} class="w-48 h-48 shrink-0 object-cover rounded-sm" alt={topic.title} />
            <div>
                <h3 class="font-gruene text-2xl">{topic.title}</h3>
                <p>{topic.description}</p>
            </div>
        </a>
    {/each}
</div>
