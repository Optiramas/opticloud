<script>
	import { t } from '$lib/i18n';
	import { people, team, address } from '$lib/site';
	import Icon from '$lib/components/Icon.svelte';
</script>

<svelte:head>
	<title>{$t.meta.aboutTitle}</title>
	<meta name="description" content={$t.meta.aboutDescription} />
</svelte:head>

<!-- Intro -->
<section class="container intro">
	<div class="intro-head">
		<span class="eyebrow">{$t.about.eyebrow}</span>
		<h1 class="h1">{$t.about.title}</h1>
	</div>
	<div class="intro-text">
		<p>{$t.about.intro1}</p>
		<p>{$t.about.intro2}</p>
	</div>
</section>

<!-- Visjon -->
<section class="container vision-wrap">
	<div class="vision">
		<span class="eyebrow soft">{$t.about.visionEyebrow}</span>
		<p>{$t.about.vision}</p>
	</div>
</section>

<!-- Ansatte -->
<section class="container team-wrap" aria-labelledby="team-tittel">
	<div class="section-head">
		<span class="eyebrow">{$t.about.teamEyebrow}</span>
		<h2 id="team-tittel" class="h2">{$t.about.teamTitle}</h2>
	</div>
	<div class="team">
		{#each team as id (id)}
			{@const p = people[id]}
			<article class="person">
				<img
					src={p.img}
					alt={p.name}
					style:object-position={p.imgPos}
					loading="lazy"
					width="480"
					height="500"
				/>
				<div class="person-body">
					<h3>{p.name}</h3>
					<span class="role">{$t.roles[p.role]}</span>
					<div class="person-links">
						<a href="tel:{p.tel}"><Icon name="phone" /><span class="visually-hidden">{$t.footer.phone}: </span>{p.phone}</a>
						<a href="mailto:{p.email}"><Icon name="mail" /><span class="visually-hidden">{$t.footer.email}: </span>{p.email}</a>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>

<!-- Historikk -->
<section class="section section-alt" aria-labelledby="historikk-tittel">
	<div class="container history">
		<div class="section-head">
			<span class="eyebrow">{$t.about.historyEyebrow}</span>
			<h2 id="historikk-tittel" class="h2">{$t.about.historyTitle}</h2>
		</div>
		<ol class="timeline">
			{#each $t.about.history as row, i (i)}
				<li>
					<span class="date">{row.date}</span>
					<span>{row.text}</span>
				</li>
			{/each}
		</ol>
	</div>
</section>

<!-- Hvor finner du oss -->
<section id="kontakt" class="section" aria-labelledby="hvor-tittel">
	<div class="container where">
		<div class="where-text">
			<span class="eyebrow">{$t.about.whereEyebrow}</span>
			<h2 id="hvor-tittel" class="h2">{$t.about.whereTitle}</h2>
			<address>
				<span>{address.street}</span>
				<span>{address.postal}</span>
				<span>{$t.footer.country}</span>
			</address>
			<div class="btn-row">
				<a href={address.mapsLink} class="btn btn-primary" target="_blank" rel="noopener noreferrer"
					>{$t.about.directions}</a
				>
				<a href="mailto:{people.sveinung.email}" class="btn btn-secondary">{$t.about.sendEmail}</a>
			</div>
		</div>
		<div class="map">
			<iframe
				src={address.mapEmbed}
				title={$t.about.mapTitle}
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				allowfullscreen
			></iframe>
		</div>
	</div>
</section>

<style>
	.intro {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(440px, 100%), 1fr));
		gap: clamp(24px, 5vw, 64px);
		align-items: start;
		padding-block: clamp(40px, 7vw, 88px) clamp(40px, 5vw, 64px);
	}

	.intro-head {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.intro-text {
		display: flex;
		flex-direction: column;
		gap: 20px;
		font-size: 17px;
		color: var(--fg-2);
		padding-top: 8px;
		text-wrap: pretty;
	}

	.vision-wrap {
		padding-bottom: var(--section-y);
	}

	.vision {
		background: var(--accent-soft);
		border-radius: 28px;
		padding: clamp(24px, 5vw, 64px);
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.eyebrow.soft {
		color: var(--accent-soft-fg);
	}

	.vision p {
		font-size: clamp(22px, 3vw, 38px);
		line-height: 1.24;
		font-weight: 600;
		letter-spacing: -0.025em;
		max-width: 920px;
		text-wrap: balance;
	}

	.team-wrap {
		padding-bottom: var(--section-y);
	}

	.team {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
		gap: 24px;
	}

	.person {
		display: flex;
		flex-direction: column;
		background: var(--surface);
		border: 1px solid var(--line);
		border-radius: 20px;
		overflow: hidden;
	}

	.person img {
		width: 100%;
		aspect-ratio: 4 / 4.2;
		height: auto;
		object-fit: cover;
		background: var(--surface-2);
	}

	.person-body {
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding: 24px;
	}

	.person h3 {
		font-size: 20px;
		font-weight: 700;
	}

	.role {
		font-size: 15px;
		color: var(--fg-3);
	}

	.person-links {
		display: flex;
		flex-direction: column;
		margin-top: 10px;
		font-size: 15px;
		font-weight: 600;
	}

	.person-links a {
		display: flex;
		align-items: center;
		gap: 10px;
		min-height: 40px;
	}

	.history {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(360px, 100%), 1fr));
		gap: clamp(16px, 5vw, 64px);
	}

	.timeline {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.timeline li {
		display: grid;
		grid-template-columns: 120px 1fr;
		gap: 24px;
		padding: 18px 0;
		border-top: 1px solid var(--line);
	}

	.timeline li:last-child {
		border-bottom: 1px solid var(--line);
	}

	.date {
		font-weight: 700;
		color: var(--accent);
	}

	.where {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(360px, 100%), 1fr));
		gap: 48px;
		align-items: stretch;
	}

	.where-text {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	address {
		font-style: normal;
		font-size: 17px;
		color: var(--fg-2);
		display: flex;
		flex-direction: column;
	}

	.map {
		min-height: 360px;
		border-radius: var(--radius-lg);
		overflow: hidden;
		border: 1px solid var(--line);
		background: var(--surface-2);
	}

	.map iframe {
		width: 100%;
		height: 100%;
		min-height: 360px;
		border: 0;
		display: block;
	}

	@media (max-width: 600px) {
		.timeline li {
			grid-template-columns: 1fr;
			gap: 2px;
			padding: 14px 0;
		}

		.date {
			font-size: 14px;
		}

		.person {
			flex-direction: row;
		}

		.person img {
			width: 120px;
			aspect-ratio: auto;
			align-self: stretch;
		}

		.person-body {
			padding: 16px;
			gap: 2px;
			min-width: 0;
		}

		.person h3 {
			font-size: 17px;
		}

		.role {
			font-size: 14px;
		}

		.person-links {
			margin-top: 4px;
		}

		.person-links a {
			min-height: 44px;
			word-break: break-word;
		}

		.map,
		.map iframe {
			min-height: 260px;
		}
	}
</style>
