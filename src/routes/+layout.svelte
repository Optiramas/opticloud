<script>
    import { injectAnalytics } from "@vercel/analytics/sveltekit";
	import { locale, t } from '$lib/i18n';
	injectAnalytics();
</script>

<!-- Top Header -->
<header class="top-header">
	<div class="top-header-inner">
		<nav class="top-nav">
			<a href="/" class="logo-link" aria-label={$t.nav.home}>
				<img id="logo-icon" src="Black logo.png" alt="Optiram logo">
			</a>
			<a href="/">{$t.nav.home}</a>
			<a href="/news">{$t.nav.news}</a>
			<a href="/about">{$t.nav.about}</a>
			<div class="lang-toggle">
				<button class="lang-btn" class:active={$locale === 'no'} on:click={() => locale.set('no')}>NO</button>
				<span class="lang-sep">/</span>
				<button class="lang-btn" class:active={$locale === 'en'} on:click={() => locale.set('en')}>EN</button>
			</div>
		</nav>
	</div>
</header>

<slot />

<!-- Bottom Header -->
<footer class="bottom-header">
	<div class="bottom-header-inner">
		<nav class="bottom-nav">

			<div class="footer-block">
				<strong>Sveinung Mæland</strong><br>
				<a class="contact-line" href="tel:+4790946768">
					<svg class="contact-icon" role="img" aria-label={$t.footer.phone} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
					909 46 768
				</a><br>
				<a class="contact-line" href="mailto:sm@optiram.no">
					<svg class="contact-icon" role="img" aria-label={$t.footer.email} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
					sm@optiram.no
				</a>
			</div>

			<div class="footer-block">
				<strong>Stian S. Alvsvåg</strong><br>
				<a class="contact-line" href="tel:+4790572687">
					<svg class="contact-icon" role="img" aria-label={$t.footer.phone} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
					905 72 687
				</a><br>
				<a class="contact-line" href="mailto:ssa@optiram.no">
					<svg class="contact-icon" role="img" aria-label={$t.footer.email} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
					ssa@optiram.no
				</a>
			</div>

			<div class="footer-block">
				<strong>Optiram AS</strong><br>
				Austbøvegen 44<br>
				5420 Rubbestadneset, {$t.footer.country}
			</div>

		</nav>
	</div>
</footer>



<style>
	.logo-link {
		display: inline-flex;
		align-items: center;
		line-height: 0;
	}

	.contact-line {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: inherit;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.contact-line:hover {
		color: var(--accent);
	}

	.contact-icon {
		flex-shrink: 0;
		opacity: 0.75;
	}

	.lang-toggle {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		margin-left: 0.5rem;
	}

	.lang-btn {
		background: none;
		border: none;
		padding: 0.2rem 0.35rem;
		margin: 0;
		font-size: 0.85rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		color: var(--fg-1);
		opacity: 0.5;
		cursor: pointer;
		transition: opacity 0.2s ease, color 0.2s ease;
	}

	.lang-btn:hover {
		opacity: 1;
		background: none;
		color: var(--accent);
	}

	.lang-btn.active {
		opacity: 1;
		color: var(--accent);
	}

	.lang-sep {
		opacity: 0.35;
		font-size: 0.85rem;
	}
</style>
