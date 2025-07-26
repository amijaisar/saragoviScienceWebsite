<script lang="ts">
	import { pages } from '🍎/state/pages';
	import PageWindow from './PageWindow.svelte';
</script>

<section id="page-windows-area">
	{#each $pages as page (page.id)}
		<PageWindow {page} />
	{/each}
</section>

<style>
#page-windows-area {
	position: fixed;
	inset: 0;
	width: 100vw;
	height: 100vh;

	display: block;
	overflow: visible;
	z-index: 10;

	pointer-events: none; /* area itself ignores clicks */
}

/* but child windows must remain interactive */
#page-windows-area > * {
	pointer-events: auto;
}
</style>
