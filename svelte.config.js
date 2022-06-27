import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
	}),

	kit: {
		adapter: adapter(),
		vite: {
			ssr: {
				noExternal: ['@fortawesome/free-brands-svg-icons', '@fortawesome/free-solid-svg-icons']
			}
		}
	},
	experimental: { prebundleSvelteLibraries: true }
};

export default config;
