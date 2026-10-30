<script>
	import { t } from '$lib/i18n';
	import { newsImages } from '$lib/site';
	import Icon from '$lib/components/Icon.svelte';

	const featured = $derived($t.news.items[0]);
	const rest = $derived($t.news.items.slice(1));
</script>

<svelte:head>
	<title>{$t.meta.newsTitle}</title>
	<meta name="description" content={$t.meta.newsDescription} />
</svelte:head>

{#snippet media(/** @type {string} */ id, /** @type {string} */ cls)}
	{@const m = newsImages[id]}
	{#if m.kind === 'photo'}
		<img class="{cls} photo" src={m.src} alt="" style:object-position={m.pos} loading="lazy" />
	{:else}
		<div class="{cls} logo-tile tone-{m.tone}">
			{#if m.src === 'optiram'}
				<img src={m.tone === 'dark' ? '/White logo.png' : '/Black logo.png'} alt="" class="logo-img" />
			{:else}
				<img src={m.src} alt="" class="logo-img" />
			{/if}
		</div>
	{/if}
{/snippet}

{#snippet meta(/** @type {{ tag: string, date: string }} */ item)}
	<div class="meta">
		<span class="tag">{$t.news.tags[/** @type {'hire' | 'partner' | 'company'} */ (item.tag)]}</span>
		{#if item.date}<span class="date">{item.date}</span>{/if}
	</div>
{/snippet}

<div class="container page">
	<header class="page-head">
		<span class="eyebrow">{$t.news.eyebrow}</span>
		<h1 class="h1">{$t.news.title}</h1>
	</header>

	<article class="featured">
		{@render media(featured.id, 'featured-media')}
		<div class="featured-body">
			{@render meta(featured)}
			<h2 class="featured-title">{featured.title}</h2>
			<p>{featured.text}</p>
		</div>
	</article>

	<div class="grid">
		{#each rest as item (item.id)}
			<article class="card">
				{@render media(item.id, 'card-media')}
				<div class="card-body">
					{@render meta(item)}
					<h3>{item.title}</h3>
					<p>{item.text}</p>
					{#if item.link}
						<a class="ext" href={item.link.href} target="_blank" rel="noopener noreferrer"
							>{item.link.label} <Icon name="external" size={14} /></a
						>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		gap: clamp(28px, 5vw, 56px);
		padding-block: clamp(40px, 7vw, 88px) clamp(64px, 9vw, 112px);
	}

	.page-head {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.meta {
		display: flex;
		gap: 10px;
		align-items: center;
		flex-wrap: wrap;
	}

	.date {
		font-size: 13px;
		font-weight: 700;
		color: var(--fg-3);
	}

	/* Hovedsak */
	.featured {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(420px, 100%), 1fr));
		background: var(--surface);
		border: 1px solid var(--line);
		border-radius: var(--radius-lg);
		overflow: hidden;
	}

	:global(.featured-media) {
		width: 100%;
		height: 100%;
		min-height: 300px;
		max-height: 460px;
		object-fit: cover;
	}

	.featured-body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 18px;
		padding: clamp(24px, 4vw, 56px);
	}

	.featured-title {
		font-size: clamp(26px, 3vw, 38px);
		line-height: 1.12;
		font-weight: 700;
		letter-spacing: -0.03em;
		text-wrap: balance;
	}

	.featured-body p {
		font-size: 17px;
		color: var(--fg-2);
	}

	/* Øvrige saker */
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
		gap: 24px;
	}

	.card {
		display: flex;
		flex-direction: column;
		background: var(--surface);
		border: 1px solid var(--line);
		border-radius: 20px;
		overflow: hidden;
	}

	:global(.card-media) {
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
	}

	.card-body {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 24px;
	}

	.card h3 {
		font-size: 20px;
		line-height: 1.25;
		font-weight: 700;
	}

	.card p {
		font-size: 15px;
		color: var(--fg-2);
	}

	.ext {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		align-self: flex-start;
		min-height: 32px;
		font-size: 15px;
		font-weight: 700;
		color: var(--accent);
	}

	/* Logo-flater */
	.logo-tile {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tone-light {
		background: #f3f3f2;
	}

	.tone-dark {
		background: #16181c;
	}

	.tone-accent {
		background: #eef2fd;
	}

	.logo-img {
		width: 58%;
		max-width: 320px;
		height: auto;
		mix-blend-mode: multiply;
	}

	.tone-dark .logo-img {
		width: 46%;
		mix-blend-mode: normal;
	}

	.tone-accent .logo-img {
		width: 46%;
	}

	@media (max-width: 600px) {
		.grid {
			gap: 16px;
		}

		.card {
			flex-direction: row;
			border-radius: var(--radius);
		}

		:global(.card-media) {
			width: 96px;
			min-height: 96px;
			aspect-ratio: auto;
			flex-shrink: 0;
			align-self: stretch;
		}

		.logo-img {
			width: 80%;
		}

		.tone-dark .logo-img,
		.tone-accent .logo-img {
			width: 76%;
		}

		.card-body {
			padding: 16px;
			gap: 6px;
			min-width: 0;
		}

		.card h3 {
			font-size: 17px;
		}

		.card p {
			font-size: 14px;
		}

		:global(.featured-media) {
			min-height: 240px;
			aspect-ratio: 4 / 3;
		}
	}
</style>
