import { json } from '@sveltejs/kit';
import createClient from "$lib/content/prismic";


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ }) {
    const client = createClient()
    const posts = await client.getByType('article', { fetchLinks: ['author.name'], orderings: { field: 'my.article.publish_date', direction: 'desc' }, pageSize: 30 })
    if (posts) {
        return json({ posts })
    }
    return new Response(undefined, { status: 404 })
}
