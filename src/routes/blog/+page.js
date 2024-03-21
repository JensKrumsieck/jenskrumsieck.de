
import { base } from "$app/paths";

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, data }) {
  const res = await fetch(`${base}/blog.json`);
  const posts = await res.json();
  return {
    posts: posts.posts,
    title: "Blog",
    description: "Hier erfahrt ihr was aktuell in meinem Leben los ist. Beiträge rund um Chemie, Softwareentwicklung oder Politik werden in unregelmäßigen Abständen veröffentlicht."
  };
}
