<script>
	import { t } from '$lib/i18n';
	import { address, people } from '$lib/site';
	import Logo from './Logo.svelte';

	const main = people.sveinung;
	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="container grid">
		<div class="col">
			<Logo height={18} />
			<span class="muted">{$t.footer.tagline}</span>
		</div>
		<div class="col">
			<strong class="label">{$t.footer.visit}</strong>
			<address>
				<span>{address.street}</span>
				<span>{address.postal}, {$t.footer.country}</span>
			</address>
		</div>
		<nav class="col" aria-label={$t.footer.pages}>
			<strong class="label">{$t.footer.pages}</strong>
			<a href="/">{$t.nav.home}</a>
			<a href="/news">{$t.nav.news}</a>
			<a href="/about">{$t.nav.about}</a>
		</nav>
		<div class="col">
			<strong class="label">{$t.footer.contact}</strong>
			<a href="mailto:{main.email}">{main.email}</a>
			<a href="tel:{main.tel}">{main.phone}</a>
		</div>
	</div>
	<div class="container bottom">© {year} Optiram AS</div>
</footer>

<style>
	.footer {
		background: var(--surface);
		border-top: 1px solid var(--line);
		font-size: 15px;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
		gap: 32px;
		padding-block: 48px;
	}

	.col {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 8px;
	}

	.col:first-child {
		gap: 14px;
	}

	.label {
		font-size: 13px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--fg-3);
	}

	.muted {
		color: var(--fg-3);
	}

	address {
		font-style: normal;
		display: flex;
		flex-direction: column;
	}

	.col a {
		padding-block: 2px;
	}

	.bottom {
		border-top: 1px solid var(--line);
		padding-block: 20px 32px;
		font-size: 13px;
		color: var(--fg-3);
	}
</style>
