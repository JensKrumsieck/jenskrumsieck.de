import createClient from "$lib/content/prismic";


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ fetch, params }) {
    const client = createClient(fetch)
    const papers = await client.getByType('research_article', { orderings: { field: 'my.research_article.year', direction: 'desc' } })
    const posters = await client.getByType('research_item')
    if (papers) {
        return {
            body: {
                publications: {
                    papers,
                    posters
                }
            }
        }
    }
    return {
        status: 404
    }
}