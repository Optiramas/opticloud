<script>
	import { t } from '$lib/i18n';
	import { people, contacts } from '$lib/site';
	import Icon from './Icon.svelte';
</script>

<section id="kontakt" class="section contact" aria-labelledby="kontakt-tittel">
	<div class="container">
		<div class="box">
			<div class="intro">
				<h2 id="kontakt-tittel" class="h2">{$t.home.contactTitle}</h2>
				<p class="lead-inv">{$t.home.contactLead}</p>
			</div>
			<div class="cards">
				{#each contacts as id (id)}
					{@const p = people[id]}
					<div class="card">
						<strong class="name">{p.name}</strong>
						<span class="role">{$t.roles[p.roleShort]}</span>
						<a href="tel:{p.tel}"><Icon name="phone" />{p.phone}</a>
						<a href="mailto:{p.email}"><Icon name="mail" />{p.email}</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.contact {
		padding-top: 0;
	}

	.box {
		background: var(--inverse-bg);
		color: var(--inverse-fg);
		border-radius: 28px;
		padding: clamp(28px, 5vw, 64px);
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(360px, 100%), 1fr));
		gap: clamp(24px, 4vw, 48px);
		align-items: center;
	}

	:global(:root[data-theme='dark']) .box {
		border: 1px solid var(--line);
	}

	.intro {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.lead-inv {
		font-size: 17px;
		color: var(--inverse-fg-2);
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(230px, 100%), 1fr));
		gap: 16px;
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 4px;
		background: var(--inverse-surface);
		border-radius: 18px;
		padding: 22px 24px;
	}

	.name {
		font-size: 17px;
	}

	.role {
		font-size: 14px;
		color: var(--inverse-fg-2);
		margin-bottom: 6px;
	}

	.card a {
		display: flex;
		align-items: center;
		gap: 10px;
		min-height: 40px;
		color: var(--inverse-fg);
		font-weight: 600;
	}

	.card a:hover {
		color: #b9c8ff;
	}
</style>
