import { base } from "$app/paths";
import { getDesc } from "$lib/util/text-helpers";
import website from "$lib/util/website";
import * as ph from '@prismicio/helpers'

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, data }) {
  const res = await fetch(`${base}/publications/${params.slug}.json`);
  const post = await res.json();
  if (!post.researchItem) return {};
  return {
    researchItem: post.researchItem,
    title: ph.asText(post.researchItem.data.title),
    description: getDesc(
      ph.asText(post.researchItem.data.body[0].primary.content),
      250
    ),
    keywords: post.researchItem.tags.join(", ") + ", " + website.keywords,
    image: ph.asImageSrc(post.researchItem.data.hero_image),
  };
}
