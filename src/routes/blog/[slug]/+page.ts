import createClient from "$lib/content/prismic";
import { getDesc } from "$lib/util/text-helpers";
import * as prismic from '@prismicio/client'

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

  const client = createClient()
  const { slug } = params
  const post = await client.getByUID('article', slug, { fetchLinks: ['author.name', 'author.about', 'author.avatar'] })

  return {
    post: post,
    title: prismic.asText(post.data.title),
    description: getDesc(
      prismic.asText(post.data.body[0].primary.content) ?? "",
      250
    ),
    keywords: post.tags.join(", "),
    image: prismic.asImageSrc(post.data.hero_image),

  };
}
