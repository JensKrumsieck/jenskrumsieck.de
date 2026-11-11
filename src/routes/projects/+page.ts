export const ssr = true;

/** @type {import('./$types').PageLoad} */
export async function load({ }) {
  return {
    title: "Projekte",
    description: "Software-Projekte von Dr. Jens Krumsieck: PorphyStruct, SciWIn (FAIRagro), CHN-Tool, Braunschweig Wahlcheck, Wahlanalyse für Braunschweig und ChemSharp.",
  };
}
