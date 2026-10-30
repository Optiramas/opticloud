<script>
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import { locale, t } from '$lib/i18n';
	import Icon from './Icon.svelte';
	import Logo from './Logo.svelte';

	let menuOpen = $state(false);
	let theme = $state('light');

	const links = $derived([
		{ href: '/', label: $t.nav.home },
		{ href: '/news', label: $t.nav.news },
		{ href: '/about', label: $t.nav.about }
	]);

	/** @param {string} href */
	function isActive(href) {
		return href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
	}

	onMount(() => {
		theme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
	});

	afterNavigate(() => {
		menuOpen = false;
	});

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = theme;
		try {
			localStorage.setItem('theme', theme);
		} catch {
			/* ignorer */
		}
	}

	/** @param {KeyboardEvent} e */
	function onKey(e) {
		if (e.key === 'Escape') menuOpen = false;
	}
</script>

<svelte:window onkeydown={onKey} />

{#snippet langSwitch()}
	<div class="lang" role="group" aria-label={$t.nav.language}>
		<button type="button" aria-pressed={$locale === 'no'} onclick={() => locale.set('no')}>NO</button>
		<button type="button" aria-pressed={$locale === 'en'} onclick={() => locale.set('en')}>EN</button>
	</div>
{/snippet}

{#snippet themeButton()}
	<button
		type="button"
		class="icon-btn"
		onclick={toggleTheme}
		aria-label={theme === 'dark' ? $t.nav.toLight : $t.nav.toDark}
	>
		<Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
	</button>
{/snippet}

<header class="header">
	<div class="container bar">
		<a href="/" class="brand" aria-label={$t.nav.homeLink}>
			<Logo height={20} />
		</a>

		<nav class="desktop-nav" aria-label={$t.nav.mainMenu}>
			{#each links as link (link.href)}
				<a href={link.href} class="nav-link" aria-current={isActive(link.href) ? 'page' : undefined}
					>{link.label}</a
				>
			{/each}
			{@render langSwitch()}
			{@render themeButton()}
			<a href="/#kontakt" class="btn btn-dark btn-sm">{$t.nav.contact}</a>
		</nav>

		<button
			type="button"
			class="icon-btn menu-btn"
			aria-expanded={menuOpen}
			aria-controls="mobilmeny"
			aria-label={menuOpen ? $t.nav.closeMenu : $t.nav.openMenu}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<Icon name={menuOpen ? 'close' : 'menu'} size={20} />
		</button>
	</div>

	{#if menuOpen}
		<nav id="mobilmeny" class="mobile-nav" aria-label={$t.nav.mainMenu}>
			<div class="container mobile-inner">
				{#each links as link (link.href)}
					<a href={link.href} class="mobile-link" aria-current={isActive(link.href) ? 'page' : undefined}
						>{link.label}</a
					>
				{/each}
				<div class="mobile-tools">
					{@render langSwitch()}
					{@render themeButton()}
				</div>
				<a href="/#kontakt" class="btn btn-dark">{$t.nav.contact}</a>
			</div>
		</nav>
	{/if}
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: color-mix(in srgb, var(--bg) 92%, transparent);
		backdrop-filter: saturate(1.4) blur(10px);
		-webkit-backdrop-filter: saturate(1.4) blur(10px);
		border-bottom: 1px solid var(--line);
	}

	.bar {
		height: var(--header-h);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
	}

	.brand {
		display: flex;
		align-items: center;
		padding: 8px 0;
	}

	.desktop-nav {
		display: flex;
		align-items: center;
		gap: 28px;
		font-size: 15px;
		font-weight: 600;
	}

	.nav-link[aria-current='page'] {
		color: var(--accent);
	}

	.lang {
		display: flex;
		gap: 4px;
		padding: 4px;
		border: 1px solid var(--line);
		border-radius: 999px;
	}

	.lang button {
		border: 0;
		background: transparent;
		color: var(--fg-2);
		font-size: 13px;
		font-weight: 700;
		padding: 6px 12px;
		border-radius: 999px;
		min-width: 40px;
	}

	.lang button[aria-pressed='true'] {
		background: var(--fg);
		color: var(--bg);
	}

	.icon-btn {
		width: 44px;
		height: 44px;
		flex-shrink: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--line);
		background: var(--surface);
		color: var(--fg);
		border-radius: 999px;
	}

	.icon-btn:hover {
		border-color: var(--line-strong);
	}

	:global(.btn-sm) {
		min-height: 44px;
		padding: 10px 22px;
		font-size: 15px;
	}

	.menu-btn,
	.mobile-nav {
		display: none;
	}

	@media (max-width: 899px) {
		.desktop-nav {
			display: none;
		}

		.menu-btn {
			display: inline-flex;
		}

		.mobile-nav {
			display: block;
			border-top: 1px solid var(--line);
			background: var(--bg);
		}

		.mobile-inner {
			display: flex;
			flex-direction: column;
			gap: 4px;
			padding-block: 8px 24px;
		}

		.mobile-link {
			padding: 12px 0;
			font-size: 22px;
			font-weight: 700;
		}

		.mobile-link[aria-current='page'] {
			color: var(--accent);
		}

		.mobile-tools {
			display: flex;
			gap: 12px;
			align-items: center;
			padding-block: 16px;
		}

		.mobile-tools .lang button {
			padding: 10px 16px;
			font-size: 14px;
		}
	}
</style>
