import createClient from "#lib/content/prismic.js";
import { filter } from "@prismicio/client";
export const ssr = true;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const client = createClient()
    const posts = await client.getByType('article', {
        orderings: { field: 'my.article.publish_date', direction: 'desc' }, pageSize: 8, filters: [
            filter.any("document.tags", ['Umwelt', 'Umweltschutz', 'Nachhaltigkeit', 'Bienensterben', 'Atomkraft', 'Klimaschutz', 'Atom'])
        ]
    }).catch((e) => {
        console.error("Failed to load posts", e)
        return { results: [] }
    })
    return {
        posts,
        title: "Umwelt- & Klimaschutz",
        description: "Klimaanpassung für Braunschweig: Jens Krumsieck setzt sich für Hochwasserschutz nach dem Schwammstadt-Prinzip, Entsiegelung und mehr Grün in der Stadt ein.",
    }
}
