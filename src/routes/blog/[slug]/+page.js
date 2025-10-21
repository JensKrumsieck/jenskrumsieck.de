
import { base } from "$app/paths";
import { getDesc } from "$lib/util/text-helpers";
import * as prismic from '@prismicio/client'

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, data }) {
  const res = await fetch(`${base}/blog/${params.slug}.json`);
  const post = await res.json();
  return {
    post: post.post,
    title: prismic.asText(post.post.data.title),
    description: getDesc(
      prismic.asText(post.post.data.body[0].primary.content),
      250
    ),
    keywords: post.post.tags.join(", "),
    image: prismic.asImageSrc(post.post.data.hero_image),

  };
}
