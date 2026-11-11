export const ssr = true;

/** @type {import('./$types').PageLoad} */
export async function load({ }) {
  return {
    title: "Über Mich",
    description: "Lebenslauf von Dr. Jens Krumsieck: Promotion in Chemie an der TU Braunschweig, Wissenschaftler in Forschungsdatenmanagement und Ratsherr der Stadt Braunschweig.",
  };
}
