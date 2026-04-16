import createClient from "$lib/content/prismic";
import { filter } from "@prismicio/client";
export const ssr = true;

/** @type {import('./$types').PageLoad} */
export async function load({ }) {
    const client = createClient()
    const posts = await client.getByType('article', {
        orderings: { field: 'my.article.publish_date', direction: 'desc' }, pageSize: 4, filters: [
            filter.at("document.tags", ['Mobilität'])
        ]
    })
    if (posts) {
        return { posts }
    }
    return {
        status: 404
    }
}