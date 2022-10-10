import { base } from "$app/paths";
import createClient from "$lib/content/prismic";


/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const client = createClient(fetch)
    const posts = await client.getByType('article', { fetchLinks: ['author.name'], orderings: { field: 'my.article.publish_date', direction: 'desc' }, pageSize: 5 })
    const dates = await (await fetch(`${base}/calendar.json`)).json()
    if (posts) {
        return { posts, dates }
    }
    return {
        status: 404
    }
}