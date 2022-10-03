import createClient from "$lib/content/prismic";
import website from "$lib/util/website";
import dayjs from "dayjs";


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ fetch, params }) {
    const headers = {
        'Cache-Control': 'max-age=0, s-maxage=3600',
        'Content-Type': 'application/xml',
    }
    const pages = ['blog', 'publications', 'about', 'cv', 'contact']
    const statics = ['impressum', 'privacy']
    const client = createClient(fetch)
    const posts = await client.getAllByType('article', { orderings: { field: 'my.article.publish_date', direction: 'desc' } })
    const researchItems = await client.getAllByType('research_item', { orderings: { field: 'my.research_item.presentations.start_date', direction: 'desc' } })
    return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
        <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>${website.siteUrl}</loc>
                <changefreq>daily</changefreq>
                <priority>1.0</priority>
            </url>
            ${pages.map(page =>
            `<url>
                <loc>${website.siteUrl}/${page}</loc>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
            </url>`
        ).join("")}
        ${statics.map(page =>
            `<url>
                <loc>${website.siteUrl}/${page}</loc>
                <changefreq>daily</changefreq>
                <priority>0.4</priority>
            </url>`
        ).join("")}
            ${posts.map(post =>
            `<url>
                    <loc>${website.siteUrl}/blog/${post.uid}</loc>
                    <changefreq>daily</changefreq>
                    <priority>0.7</priority>
                    <lastmod>${dayjs(post.last_publication_date).format("YYYY-MM-DD")}</lastmod>
                </url>`
        ).join("")}
        ${researchItems.map(researchItem =>
            `<url>
                    <loc>${website.siteUrl}/publications/${researchItem.uid}</loc>
                    <changefreq>daily</changefreq>
                    <priority>0.7</priority>
                    <lastmod>${dayjs(researchItem.last_publication_date).format("YYYY-MM-DD")}</lastmod>
                </url>`
        ).join("")}
        </urlset > `, { headers: headers })
}