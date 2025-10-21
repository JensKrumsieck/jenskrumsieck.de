import * as prismic from "@prismicio/client";
import {
    createClient as baseCreateClient,
    type Route,
} from "@prismicio/client";
import {
    enableAutoPreviews,
    type CreateClientConfig,
} from "@prismicio/svelte/kit";

const repositoryName = "jenskrumsieck"

const routes: Route[] = [
    { type: 'article', path: '/blog/:uid' },
]

export default function createClient({ cookies, ...config }: CreateClientConfig = {}) {
    const client = prismic.createClient(repositoryName, {
        routes,
        ...config,
    });
    enableAutoPreviews({ client, cookies });

    return client;
}