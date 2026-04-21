import createClient from "$lib/content/prismic";
import { INSTAGRAM_FEED_URL } from "$env/static/private";
export const ssr = true;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const client = createClient()
    const posts = await client.getByType('article', { fetchLinks: ['author.name'], orderings: { field: 'my.article.publish_date', direction: 'desc' }, pageSize: 4 })
    const response = await fetch(INSTAGRAM_FEED_URL);
    let instagram = {}
    try {
        instagram = await response.json();
    }
    catch {
        console.log("Not valid json")
    }

    if (posts) {
        return { posts, instagram }
    }
    return {
        status: 404
    }
}
