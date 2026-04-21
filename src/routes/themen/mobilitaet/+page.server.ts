import createClient from "$lib/content/prismic";
import { filter } from "@prismicio/client";
export const ssr = true;

/** @type {import('./$types').PageLoad} */
export async function load({ }) {
    const client = createClient()
    
    try {
        const posts = await client.getByType('article', {
            orderings: { field: 'my.article.publish_date', direction: 'desc' },
            pageSize: 6,
            filters: [
                filter.at("document.tags", ['Mobilität'])
            ]
        })
        
        console.log("posts found:", posts.total_results_size)  // ← key line
        
        if (posts) {
            return { posts, title: "Mobilität & Verkehr" }
        }
    } catch (e) {
        console.error("load failed:", e)  // ← will surface in deployment logs
        throw e
    }

    return { status: 404 }
}