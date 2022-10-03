
import { base } from "$app/paths";
import { getDesc } from "$lib/util/text-helpers";
import website from "$lib/util/website";
import * as ph from '@prismicio/helpers'

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, data }) {
  const res = await fetch(`${base}/blog/${params.slug}.json`);
  const post = await res.json();
  return {
    post: post.post,
    data: {
      title: ph.asText(post.post.data.title),
      description: getDesc(
        ph.asText(post.post.data.body[0].primary.content),
        250
      ),
      keywords: post.post.tags.join(", ") + ", " + website.keywords,
      image: ph.asImageSrc(post.post.data.hero_image),
    },
  };
}
