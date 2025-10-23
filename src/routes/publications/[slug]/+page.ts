import createClient from "$lib/content/prismic";
import { getDesc } from "$lib/util/text-helpers";
import website from "$lib/util/website";
import * as prismic from '@prismicio/client'

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const client = createClient()
  const { slug } = params
  const researchItem = await client.getByUID('research_item', slug)

  if (!researchItem) return {};
  return {
    researchItem: researchItem,
    title: prismic.asText(researchItem.data.title),
    description: getDesc(
      prismic.asText(researchItem.data.body[0].primary.content) ?? "",
      250
    ),
    keywords: researchItem.tags.join(", ") + ", " + website.keywords,
    image: prismic.asImageSrc(researchItem.data.hero_image),
  };
}
