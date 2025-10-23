import createClient from "$lib/content/prismic";

/** @type {import('./$types').PageLoad} */
export async function load({ }) {
  const client = createClient()
  const papers = await client.getByType('research_article', { orderings: { field: 'my.research_article.year', direction: 'desc' } })
  const posters = await client.getByType('research_item', { orderings: { field: 'my.research_item.presentations.start_date', direction: 'desc' } })


  return {
    publications: {
      papers,
      posters
    },
    title: "Veröffentlichungen",
    description: "Jens Krumsieck hat eine Reihe von Publikationen in wissenschaftlichen Zeitschriften veröffentlicht und war auf zahlreichen Fachkonferenzen um seine Forschung zu präsentieren"
  };
}
