import { redirect } from "@sveltejs/kit";

// the old site had one page per publication, links to those (e.g. in older blog posts) now go to the list
/** @type {import('./$types').RequestHandler} */
export function GET() {
    redirect(301, "/publications");
}
