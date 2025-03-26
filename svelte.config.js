//import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-auto';
//import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {			
		adapter: adapter(),
		paths: {
			base: '',
			assets: ''
		},
	},
	vite: {
		define: {
			'import.meta.env.BASE_URL': JSON.stringify('https://footballskills.no/')
		}
	}
};

export default config;
