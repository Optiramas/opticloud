<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { initLocale } from '$lib/i18n';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CookieBanner from '$lib/components/CookieBanner.svelte';

	let { children } = $props();

	injectAnalytics();
	onMount(initLocale);
</script>

<Header />

<main>
	{@render children()}
</main>

<Footer />
<CookieBanner />
