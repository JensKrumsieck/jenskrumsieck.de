import createClient from "#lib/content/prismic.js";
import { getDesc } from "#lib/util/text-helpers.js";
import * as prismic from '@prismicio/client'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {

  const client = createClient({ fetch })
  const { slug } = params
  const post = await client
    .getByUID('article', slug, { fetchLinks: ['author.name', 'author.about', 'author.avatar'] })
    .catch((e) => {
      if (e instanceof prismic.NotFoundError) error(404, 'Diese Seite existiert nicht.')
      throw e
    })

  return {
    post: post,
    title: prismic.asText(post.data.title),
    description: getDesc(
      prismic.asText(post.data.body?.find((s: any) => s.primary?.content)?.primary.content) ?? "",
      250
    ),
    keywords: post.tags.join(", "),
    image: prismic.asImageSrc(post.data.hero_image),

  };
}
