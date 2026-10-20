import createClient from "#lib/content/prismic.js";
import { filter } from "@prismicio/client";
export const ssr = true;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const client = createClient();
  const posts = await client
    .getByType("article", {
      orderings: { field: "my.article.publish_date", direction: "desc" },
      pageSize: 8,
      filters: [filter.any("document.tags", ["Anträge", "Anfragen"])],
    })
    .catch((e) => {
      console.error("Failed to load posts", e);
      return { results: [] };
    });
  return { posts, title: "Im Rat" };
}
