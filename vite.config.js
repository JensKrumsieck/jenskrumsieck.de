import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [
        sveltekit({
            experimental: { prebundleSvelteLibraries: true }
        })
    ],
    ssr: {
        noExternal: ['@fortawesome/free-brands-svg-icons', '@fortawesome/free-solid-svg-icons']
    }
};

export default config;
