import { base } from '$app/paths';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, data }) {
  //const dates = await (await fetch(`${base}/calendar.json`)).json()
  return {
    //dates,
    title: "Über Mich",
  };
}
