export const ssr = true;

/** @type {import('./$types').PageLoad} */
export async function load({ }) {
  return {
    title: "Veröffentlichungen",
    description: "Publikationsliste von Dr. Jens Krumsieck: Dissertation, Fachartikel, Vorträge und Poster zu Porphyrinoiden, Isoporphyrinen, PorphyStruct und FAIR-Workflows mit SciWIn.",
  };
}
