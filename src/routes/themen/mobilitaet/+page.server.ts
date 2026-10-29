import createClient from "#lib/content/prismic.js";
import { filter } from "@prismicio/client";
export const ssr = true;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const client = createClient()
    const posts = await client.getByType('article', {
        orderings: { field: 'my.article.publish_date', direction: 'desc' }, pageSize: 6, filters: [
            filter.any("document.tags", ['Mobilität', 'Radfahren', 'Fahrrad', 'Verkehr'])
        ]
    }).catch((e) => {
        console.error("Failed to load posts", e)
        return { results: [] }
    })
    return {
        posts,
        title: "Mobilität & Verkehr",
        description: "Verkehrswende als Gerechtigkeitsfrage: Jens Krumsieck setzt sich im Rat für besseren ÖPNV, sichere Radwege und Car- & Bikesharing in Braunschweig ein.",
    }
}
