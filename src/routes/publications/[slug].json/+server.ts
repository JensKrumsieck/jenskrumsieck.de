import { json } from '@sveltejs/kit';
import createClient from "$lib/content/prismic";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ fetch, params }) {
    const client = createClient(fetch)
    const { slug } = params
    try {
        const researchItem = await client.getByUID('research_item', slug)

        if (researchItem) {
            return json({ researchItem })
        }
    }
    catch {
        //does nothing but is needed to catch the 500 thrown by client.getByUID if empty response is given
    }
    return new Response(undefined, { status: 404 })
}