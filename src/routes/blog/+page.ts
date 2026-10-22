import { filter } from "@prismicio/client";
import createClient from "#lib/content/prismic.js";

const HIDDEN_TAGS = ["Vulkan", "Programming", "Programmieren"];
export const ssr = true;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
  const client = createClient({ fetch })
  const page = Math.max(1, Math.floor(Number(url.searchParams.get('page'))) || 1)
  const posts = await client.getByType('article', { filters: [filter.not('document.tags', HIDDEN_TAGS)], fetchLinks: ['author.name'], orderings: { field: 'my.article.publish_date', direction: 'desc' }, pageSize: 10, page })
  return {
    posts: posts,
    title: "Blog",
    description: "Hier veröffentlicht Jens Krumsieck Aktuelles aus seinem Leben. Beiträge rund um Chemie, Softwareentwicklung oder Politik werden in unregelmäßigen Abständen veröffentlicht."
  };
}
