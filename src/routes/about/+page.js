
/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, data }) {
  return {
    data: {
      title: "Über Mich",
    },
  };
}
