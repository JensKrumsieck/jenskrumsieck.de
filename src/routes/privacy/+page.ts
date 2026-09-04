export const ssr = true;

/** @type {import('./$types').PageLoad} */
export async function load({ }) {
  return {
    title: "Datenschutzerklärung",
    robots: "noindex,follow"
  };
}
