import createClient from "$lib/content/prismic";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ fetch, params }) {
    const client = createClient(fetch)
    const { slug } = params
    try {
        const post = await client.getByUID('article', slug, { fetchLinks : ['author.name', 'author.about', 'author.avatar'] })

        if (post) {
            return {
                body: { post }
            }
        }
    }
    catch{
        //does nothing but is needed to catch the 500 thrown by client.getByUID if empty response is given
    }
    return {
        status: 404
    }
}