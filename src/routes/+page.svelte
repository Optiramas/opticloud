<script>
	import { onMount, tick } from 'svelte';
	import { flip } from 'svelte/animate';
	import { slide } from 'svelte/transition';
	import { t } from '$lib/i18n';
	import { serviceImages, platforms } from '$lib/site';
	import Icon from '$lib/components/Icon.svelte';
	import ContactPeople from '$lib/components/ContactPeople.svelte';

	/** Hvilken tjeneste som er åpnet med «Les mer» (null = ingen) */
	let openId = $state(/** @type {string | null} */ (null));

	/** Nettbrett/PC (fra 700 px): åpnet kort legges øverst og over hele bredden. Mobil: åpnes der det står. */
	let wide = $state(false);

	onMount(() => {
		const mq = window.matchMedia('(min-width: 700px)');
		wide = mq.matches;
		const onChange = () => (wide = mq.matches);
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	});

	const services = $derived.by(() => {
		const list = $t.home.services.map((s, i) => ({ ...s, num: String(i + 1).padStart(2, '0') }));
		if (!wide || !openId) return list;
		return [...list.filter((s) => s.id === openId), ...list.filter((s) => s.id !== openId)];
	});

	/** @param {string} id */
	async function toggle(id) {
		const opening = openId !== id;
		openId = opening ? id : null;
		if (opening && wide) {
			await tick();
			const el = document.getElementById(`tjeneste-${id}`);
			if (el && el.getBoundingClientRect().top < 80) {
				el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	}

	const reduceMotion =
		typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const dur = reduceMotion ? 0 : 280;
</script>

<svelte:head>
	<title>{$t.meta.homeTitle}</title>
	<meta name="description" content={$t.meta.homeDescription} />
</svelte:head>

<!-- Hero -->
<section class="container hero">
	<div class="hero-text">
		<span class="eyebrow">{$t.home.eyebrow}</span>
		<h1 class="h1">{$t.home.title}</h1>
		<p class="lead">{$t.home.lead}</p>
		<div class="btn-row">
			<a href="#losninger" class="btn btn-primary">{$t.home.ctaSolutions} <Icon name="arrow" /></a>
			<a href="/about" class="btn btn-secondary">{$t.home.ctaAbout}</a>
		</div>
	</div>
	<img
		class="hero-img"
		src="/img/hero.webp"
		alt={$t.home.heroAlt}
		width="1600"
		height="1200"
		fetchpriority="high"
	/>
</section>

<!-- Våre løsninger -->
<section id="losninger" class="section section-alt" aria-labelledby="losninger-tittel">
	<div class="container">
		<div class="head-row">
			<div class="section-head">
				<span class="eyebrow">{$t.home.solutionsEyebrow}</span>
				<h2 id="losninger-tittel" class="h2">{$t.home.solutionsTitle}</h2>
			</div>
			<p class="head-lead">{$t.home.solutionsLead}</p>
		</div>

		<div
			class="services"
			style:grid-template-columns={wide && openId
				? `repeat(${services.length - 1}, minmax(0, 1fr))`
				: undefined}
		>
			{#each services as s (s.id)}
				{@const img = serviceImages[s.id]}
				{@const open = openId === s.id}
				<article
					id="tjeneste-{s.id}"
					class="service"
					class:open
					class:wide-open={open && wide}
					animate:flip={{ duration: dur }}
				>
					<img
						src={img.src}
						alt={s.alt}
						style:object-position={img.pos}
						loading="lazy"
						width="1200"
						height="900"
					/>
					<div class="service-body">
						<span class="num">{s.num}</span>
						<h3 class="service-title">{s.title}</h3>
						{#if open}
							<div class="more" id="mer-{s.id}" transition:slide={{ duration: dur }}>
								{#each s.paras as p, i (i)}
									<p>{p}</p>
								{/each}
								<div class="btn-row">
									<a href="#kontakt" class="btn btn-primary">{$t.nav.contact}</a>
								</div>
							</div>
						{:else}
							<p class="short">{s.short}</p>
						{/if}
						<button
							type="button"
							class="toggle"
							aria-expanded={open}
							aria-controls="mer-{s.id}"
							onclick={() => toggle(s.id)}
						>
							{open ? $t.home.close : $t.home.readMore}
							<Icon name={open ? 'up' : 'down'} />
						</button>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Slik jobber vi -->
<section class="section" aria-labelledby="prosess-tittel">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">{$t.home.processEyebrow}</span>
			<h2 id="prosess-tittel" class="h2">{$t.home.processTitle}</h2>
		</div>
		<ol class="steps">
			{#each $t.home.steps as step, i (i)}
				<li>
					<span class="step-num">{$t.home.step} {i + 1}</span>
					<strong>{step.title}</strong>
					<span>{step.text}</span>
				</li>
			{/each}
		</ol>
		<div class="platforms">
			<span class="platforms-label">{$t.home.platformsLabel}</span>
			<ul>
				{#each platforms as name (name)}
					<li>{name}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<!-- Sitat -->
<section class="container quote-wrap">
	<p class="quote">{$t.home.quote}</p>
</section>

<ContactPeople />

<style>
	/* Hero */
	.hero {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(440px, 100%), 1fr));
		gap: clamp(32px, 5vw, 64px);
		align-items: center;
		padding-block: clamp(40px, 7vw, 80px) clamp(56px, 8vw, 96px);
	}

	.hero-text {
		display: flex;
		flex-direction: column;
		gap: clamp(20px, 2.4vw, 28px);
	}

	.hero-text .lead {
		max-width: 520px;
	}

	.hero-img {
		width: 100%;
		height: clamp(260px, 36vw, 480px);
		object-fit: cover;
		border-radius: var(--radius-lg);
	}

	/* Løsninger */
	.head-row {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 24px;
		flex-wrap: wrap;
		margin-bottom: clamp(32px, 4vw, 48px);
	}

	.head-row .section-head {
		margin-bottom: 0;
	}

	.head-lead {
		max-width: 420px;
		color: var(--fg-2);
		font-size: 17px;
	}

	/* Mobil: ett kort per rad. Nettbrett og PC: alle tre på én rad. */
	.services {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 24px;
	}

	@media (min-width: 700px) {
		.services {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 20px;
		}
	}

	.service {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.service img {
		width: 100%;
		aspect-ratio: 4 / 3;
		height: auto;
		object-fit: cover;
		border-radius: var(--radius);
		border: 1px solid var(--line);
		background: var(--surface-2);
	}

	.service-body {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.num {
		font-size: 13px;
		font-weight: 600;
		color: var(--fg-3);
	}

	.service-title {
		font-size: 20px;
		font-weight: 700;
		letter-spacing: -0.01em;
		line-height: 1.3;
	}

	.short {
		font-size: 15px;
		color: var(--fg-2);
	}

	.more {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.more p {
		font-size: 16px;
		line-height: 1.65;
		color: var(--fg-2);
		text-wrap: pretty;
	}

	.more .btn-row {
		margin-top: 4px;
	}

	.toggle {
		align-self: flex-start;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		min-height: 44px;
		padding: 8px 0;
		border: 0;
		background: none;
		color: var(--accent);
		font-size: 15px;
		font-weight: 700;
	}

	.toggle:hover {
		text-decoration: underline;
		text-underline-offset: 4px;
	}

	/* Åpnet kort på bred skjerm: over hele bredden, bilde til venstre og tekst til høyre */
	.service.wide-open {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 48px;
		align-items: start;
		background: var(--bg);
		border: 1px solid var(--line);
		border-radius: var(--radius-lg);
		padding: clamp(20px, 3vw, 40px);
	}

	.service.wide-open .service-title {
		font-size: clamp(26px, 2.6vw, 34px);
		line-height: 1.15;
		letter-spacing: -0.025em;
	}

	.service.wide-open .service-body {
		gap: 16px;
	}

	/* Slik jobber vi */
	.steps {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(230px, 100%), 1fr));
		gap: 24px;
	}

	.steps li {
		display: flex;
		flex-direction: column;
		gap: 8px;
		border-top: 2px solid var(--fg);
		padding-top: 18px;
		font-size: 15px;
		color: var(--fg-2);
	}

	.steps strong {
		font-size: 19px;
		color: var(--fg);
	}

	.step-num {
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--accent);
	}

	.platforms {
		margin-top: clamp(32px, 4vw, 48px);
		display: flex;
		flex-direction: column;
		gap: 16px;
		background: var(--surface);
		border: 1px solid var(--line);
		border-radius: 20px;
		padding: clamp(20px, 3vw, 28px) clamp(20px, 3vw, 32px);
	}

	.platforms-label {
		font-size: 14px;
		font-weight: 600;
		color: var(--fg-3);
	}

	.platforms ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.platforms li {
		padding: 9px 16px;
		border-radius: 999px;
		background: var(--surface-2);
		font-weight: 700;
		font-size: 15px;
	}

	/* Sitat */
	.quote-wrap {
		padding-block: clamp(24px, 4vw, 48px) clamp(64px, 9vw, 112px);
	}

	.quote {
		font-size: clamp(28px, 3.6vw, 48px);
		line-height: 1.18;
		font-weight: 600;
		letter-spacing: -0.03em;
		max-width: 960px;
		text-wrap: balance;
	}
</style>
