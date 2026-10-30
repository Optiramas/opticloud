<script>
	/** Optiram-logoen i riktig farge for lys og mørk modus. */
	/** @type {{ height?: number, invert?: boolean }} */
	let { height = 20, invert = false } = $props();
</script>

{#if invert}
	<img src="/White logo.png" alt="Optiram" style:height="{height}px" style:width="auto" />
{:else}
	<img class="only-light" src="/Black logo.png" alt="Optiram" style:height="{height}px" style:width="auto" />
	<img class="only-dark" src="/White logo.png" alt="Optiram" style:height="{height}px" style:width="auto" />
{/if}
