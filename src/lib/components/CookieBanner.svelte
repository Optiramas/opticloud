<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { t } from '$lib/i18n';

	let show = $state(false);

	onMount(() => {
		show = !document.cookie.split('; ').some((row) => row.startsWith('cookie_consent='));
	});

	function accept() {
		const expires = new Date(Date.now() + 365 * 864e5).toUTCString();
		document.cookie = `cookie_consent=accepted; expires=${expires}; path=/; SameSite=Lax`;
		show = false;
	}
</script>

{#if show}
	<div class="banner" role="region" aria-label="Cookies" transition:fly={{ y: 24, duration: 200 }}>
		<p>{$t.cookie.text}</p>
		<button type="button" class="btn btn-primary" onclick={accept}>{$t.cookie.accept}</button>
	</div>
{/if}

<style>
	.banner {
		position: fixed;
		left: 16px;
		right: 16px;
		bottom: 16px;
		z-index: 60;
		max-width: 560px;
		margin-inline: auto;
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 16px 16px 16px 20px;
		background: var(--inverse-bg);
		color: var(--inverse-fg);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		box-shadow: 0 12px 32px rgb(0 0 0 / 0.2);
		font-size: 15px;
	}

	.banner p {
		flex: 1;
	}

	.banner .btn {
		flex-shrink: 0;
		min-height: 44px;
		padding: 10px 22px;
	}
</style>
