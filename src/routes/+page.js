import createClient from "$lib/content/prismic";


/** @type {import('./$types').PageLoad} */
export async function load({ }) {
    const client = createClient()
    const posts = await client.getByType('article', { fetchLinks: ['author.name'], orderings: { field: 'my.article.publish_date', direction: 'desc' }, pageSize: 5 })

    if (posts) {
        return { posts }
    }
    return {
        status: 404
    }
}
