import createClient from "$lib/content/prismic";


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ fetch, params }) {
    const client = createClient(fetch)
    const posts = await client.getByType('article', { fetchLinks: ['author.name'], orderings: { field: 'my.article.publish_date', direction: 'desc' }, pageSize: 5 })
    if (posts) {
        return {
            body: { posts }
        }
    }
    return {
        status: 404
    }
}