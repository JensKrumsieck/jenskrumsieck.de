import createClient from "$lib/content/prismic";
import { INSTAGRAM_FEED_URL } from "$env/static/private";
export const ssr = true;

type IgPost = {
    id: string;
    media_type: string;
    permalink: string;
    image_url: string;
    alt_text: string;
    caption: string;
    timestamp: string;
};

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const client = createClient()
    const posts = await client.getByType('article', { fetchLinks: ['author.name'], orderings: { field: 'my.article.publish_date', direction: 'desc' }, pageSize: 4 })
    const response = await fetch(INSTAGRAM_FEED_URL);
    let instagram: IgPost[] = []
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
