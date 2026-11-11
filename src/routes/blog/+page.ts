import { filter } from "@prismicio/client";
import { error } from "@sveltejs/kit";
import createClient from "#lib/content/prismic.js";

const HIDDEN_TAGS = ["Vulkan", "Programming", "Programmieren"];
export const ssr = true;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
  const client = createClient({ fetch })
  const page = Math.max(1, Math.floor(Number(url.searchParams.get('page'))) || 1)
  const posts = await client.getByType('article', { filters: [filter.not('document.tags', HIDDEN_TAGS)], fetchLinks: ['author.name'], orderings: { field: 'my.article.publish_date', direction: 'desc' }, pageSize: 10, page })
  if (page > 1 && page > posts.total_pages) error(404, 'Diese Seite existiert nicht.')
  return {
    posts: posts,
    title: page > 1 ? `Blog (Seite ${page})` : "Blog",
    canonical: page > 1 ? `/blog?page=${page}` : "/blog",
    description: "Aktuelles von Jens Krumsieck: Beiträge zu Kommunalpolitik in Braunschweig, Mobilität, Klimaschutz, Chemie und Softwareentwicklung."
  };
}
