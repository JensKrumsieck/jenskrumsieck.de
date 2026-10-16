import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({ INSTAGRAM_FEED_URL: { static: true } });
