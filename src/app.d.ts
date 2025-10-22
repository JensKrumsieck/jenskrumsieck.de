// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Locals {}
		// interface Platform {}
		// interface Session {}
		interface Stuff {
			title: string,
			description: string,
			keywords: string,
			image: string,
			isArticle: boolean
		}
	}
}

export {};