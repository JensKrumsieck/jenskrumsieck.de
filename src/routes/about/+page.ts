import { base } from '$app/paths';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, data }) {
  return {
    title: "Über Mich",
  };
}
