import createClient from "$lib/content/prismic";

/** @type {import('./$types').PageLoad} */
export async function load({ }) {
  const client = createClient()
  const posts = await client.getByType('article', { fetchLinks: ['author.name'], orderings: { field: 'my.article.publish_date', direction: 'desc' }, pageSize: 30 })
  return {
    posts: posts,
    title: "Blog",
    description: "Hier veröffentlicht Jens Krumsieck Aktuelles aus seinem Leben. Beiträge rund um Chemie, Softwareentwicklung oder Politik werden in unregelmäßigen Abständen veröffentlicht."
  };
}
