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
    comments_count: number;
    like_count: number;
};

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const client = createClient()
    const [posts, instagram] = await Promise.all([
        client.getByType('article', { fetchLinks: ['author.name'], orderings: { field: 'my.article.publish_date', direction: 'desc' }, pageSize: 4 })
            .catch((error) => {
                console.error("Failed to load posts", error)
                return { results: [] }
            }),
        fetchInstagram()
    ])

    return { posts, instagram }
}

async function fetchInstagram(): Promise<IgPost[]> {
    try {
        const response = await fetch(INSTAGRAM_FEED_URL, { signal: AbortSignal.timeout(3000) });
        if (!response.ok) throw new Error(`Instagram feed responded with ${response.status}`);
        const feed = await response.json();
        return Array.isArray(feed) ? feed : [];
    } catch (error) {
        console.error("Failed to load Instagram feed", error)
        return []
    }
}
