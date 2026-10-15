import createClient from "$lib/content/prismic";
export const ssr = true;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
  const client = createClient({ fetch })
  const page = Math.max(1, Math.floor(Number(url.searchParams.get('page'))) || 1)
  const posts = await client.getByType('article', { fetchLinks: ['author.name'], orderings: { field: 'my.article.publish_date', direction: 'desc' }, pageSize: 10, page })
  return {
    posts: posts,
    title: "Blog",
    description: "Hier veröffentlicht Jens Krumsieck Aktuelles aus seinem Leben. Beiträge rund um Chemie, Softwareentwicklung oder Politik werden in unregelmäßigen Abständen veröffentlicht."
  };
}
