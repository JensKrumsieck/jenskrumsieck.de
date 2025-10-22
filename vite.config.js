import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */
export default defineConfig({
    plugins: [
        tailwindcss(),
        sveltekit()
    ],
    ssr: {
        noExternal: [
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/free-solid-svg-icons'
        ]
    }
});