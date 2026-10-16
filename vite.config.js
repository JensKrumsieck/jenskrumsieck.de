import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { enhancedImages } from '@sveltejs/enhanced-img'
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */
export default defineConfig({
    plugins: [
        enhancedImages(),
        tailwindcss(),
        sveltekit({
            // Consult https://svelte.dev/docs/kit/integrations
            // for more information about preprocessors
            preprocess: vitePreprocess(),
            adapter: adapter()
        })
    ],
    ssr: {
        noExternal: [
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/free-solid-svg-icons'
        ]
    }
});
