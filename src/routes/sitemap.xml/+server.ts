import createClient from "#lib/content/prismic.js";
import website from "#lib/util/website.js";
import dayjs from "dayjs";


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ }) {
    const headers = {
        'Cache-Control': 'max-age=0, s-maxage=3600',
        'Content-Type': 'application/xml; charset=utf-8',
    }
    // impressum and privacy are noindex, so they are left out on purpose
    const pages = ['', 'blog', 'rat', 'publications', 'about', 'projects', 'themen', 'themen/mobilitaet', 'themen/klimaschutz']
    const client = createClient()
    const posts = await client.getAllByType('article', { orderings: { field: 'my.article.publish_date', direction: 'desc' } }).catch((error) => {
        console.error("Failed to load posts for sitemap", error)
        return []
    })
    return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages.map(page =>
        `<url>
                <loc>${website.siteUrl}/${page}</loc>
            </url>`
    ).join("")}
            ${posts.map(post =>
        `<url>
                    <loc>${website.siteUrl}/blog/${encodeURIComponent(post.uid ?? '')}</loc>
                    <lastmod>${dayjs(post.last_publication_date).format("YYYY-MM-DD")}</lastmod>
                </url>`
    ).join("")}
        </urlset>`, { headers: headers })
}
