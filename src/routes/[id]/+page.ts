import { bse } from "$lib/deta.js";
import { error } from "@sveltejs/kit";

export const ssr = false;
export const prerender = false;

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const { id } = params;

  const item = await bse.get(id);

  if (!item) {
    const item = {
      id,
      foo: "bar"
    };
    await bse.put(item, id);
    return { item };
  } else {
    return { item};
  }
}
