import createClient from "$lib/content/prismic";
import { filter } from "@prismicio/client";
export const ssr = true;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const client = createClient()
    const posts = await client.getByType('article', {
        orderings: { field: 'my.article.publish_date', direction: 'desc' }, pageSize: 8, filters: [
            filter.any("document.tags", ['Umwelt', 'Umweltschutz', 'Nachhaltigkeit', 'Bienensterben', 'Atomkraft', 'Klimaschutz', 'Atom'])
        ]
    })
    if (posts) {
        return { posts, title: "Umwelt- & Klimaschutz", }
    }
    return {
        status: 404
    }
}