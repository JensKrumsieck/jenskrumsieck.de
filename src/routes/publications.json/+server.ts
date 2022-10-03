import { json } from '@sveltejs/kit';
import createClient from "$lib/content/prismic";


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ fetch, params }) {
    const client = createClient(fetch)
    const papers = await client.getByType('research_article', { orderings: { field: 'my.research_article.year', direction: 'desc' } })
    const posters = await client.getByType('research_item', { orderings: { field: 'my.research_item.presentations.start_date', direction: 'desc' } })
    if (papers) {
        return json({
            publications: {
                papers,
                posters
            }
        })
    }
    return new Response(undefined, { status: 404 })
}