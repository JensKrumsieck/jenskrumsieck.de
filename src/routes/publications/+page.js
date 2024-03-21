
import { base } from "$app/paths";

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, data }) {
  const res = await fetch(`${base}/publications.json`);
  const posts = await res.json();
  return {
    publications: posts.publications,
    title: "Veröffentlichungen",
    description: "Jens Krumsieck hat eine Reihe von Publikationen in wissenschaftlichen Zeitschriften veröffentlicht und war auf zahlreichen Fachkonferenzen um seine Forschung zu präsentieren"
  };
}
