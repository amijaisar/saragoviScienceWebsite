<script lang="ts">
	import { preferences } from '🍎/state/preferences.svelte.ts';
	import PageTrafficLights from '🍎/components/pages/PageTrafficLights.svelte';

	export let section: string = 'postdocs';
	let selectedCategory = section;

	const categories = [
		{ key: 'pi', title: 'Principal Investigator' },
		{ key: 'postdocs', title: 'Postdocs' },
		{ key: 'phd', title: 'PhD Students' },
		{ key: 'masters', title: 'Master Students' },
		{ key: 'interns', title: 'Interns' },
		{ key: 'undergrads', title: 'Undergrads and others' },
		{ key: 'visiting', title: 'Visiting' },
		{ key: 'admin', title: 'Lab management and admin', disabled: true },
		{ key: 'join', title: 'Join the team', breakAfter: true },
	];

	const people = [
		{ category: 'postdocs', name: 'Mohamad Abedi', position: 'Postdoc', email: 'mabedi@uw.edu', description: 'Mohamad is designing proteins to understand and manipulate cell signaling networks.', image: '/images/people/mohamad_abedi.jpg' },
		{ category: 'postdocs', name: 'Green Ahn', position: 'Postdoc', email: 'greenahn@uw.edu', description: 'Green is designing proteins to modulate cellular processes involved in cancer.', image: '/images/people/green_ahn.jpg' },
		{ category: 'postdocs', name: 'Han Raut Altae-Tran', position: 'Postdoc', email: 'altaeth@uw.edu', description: 'Han is studying nucleic acids and design methods.', image: '/images/people/han_altae_tran.jpg' },
		{ category: 'postdocs', name: 'Roman Barth', position: 'Postdoc', email: 'robart@uw.edu', description: 'Roman is designing novel enzymatic molecular motors.', image: '/images/people/roman_barth.jpg' }
	];
</script>

<section class="container">
	<aside>
		<div class="sidebar-header app-window-drag-handle">
			<div class="sidebar-title">Team</div>
		</div>

		<nav>
			{#each categories as c}
				<a
					href="#"
					class:selected={selectedCategory === c.key}
					on:click|preventDefault={() => selectedCategory = c.key}>
					{c.title}
				</a>
				{#if c.breakAfter}<hr />{/if}
			{/each}
		</nav>
	</aside>

	<section class="content">
		<div class="cards">
			{#each people.filter(p => p.category === selectedCategory) as person}
				<div class="card">
					<img src={person.image} alt={person.name} />
					<h3>{person.name}</h3>
					<p class="position">{person.position}</p>
					<p><a href={`mailto:${person.email}`}>{person.email}</a></p>
					<p>{person.description}</p>
				</div>
			{/each}
		</div>
	</section>
</section>

<style>
:global(body), :global(.page), :global(.window) {
	background: transparent !important;
}

.container {
	display: grid;
	grid-template-columns: 12rem 1fr;
	height: 100%;
	color: var(--system-color-dark);
}

/* Sidebar */
aside {
	grid-column: 1;
	grid-row: 1;

	height: 100%;
	width: 12rem;

	background: rgba(255, 255, 255, 0.8);
	backdrop-filter: blur(12px) saturate(180%);
	-webkit-backdrop-filter: blur(12px) saturate(180%);

	display: flex;
	flex-direction: column;
}

.sidebar-header {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem;
	user-select: none;
	cursor: grab;
}

.sidebar-title {
	font-weight: 500;
	font-size: 0.9rem;
	color: hsla(var(--system-color-dark-hsl), 0.8);
}

aside nav {
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	margin: 1rem 0.6rem;
}

aside nav hr {
	display: block;
	width: 100%;
	height: 1px;
	background-color: hsla(var(--system-color-dark-hsl), 0.4);
	border: none;
}

aside nav a {
	display: flex;
	gap: 0.4rem;
	align-items: center;

	color: hsla(var(--system-color-dark-hsl), 0.9);
	text-decoration: none;
	font-weight: 400;

	padding: 0.5rem;
	border-radius: 0.4rem;

	transition: background-color 100ms ease;
}

aside nav a:hover {
	background-color: hsla(var(--system-color-dark-hsl), 0.4);
}

aside nav a.selected {
	background-color: hsla(var(--system-color-dark-hsl), 0.6);
	font-weight: bold;
}

/* Content */
.content {
	grid-column: 2;
	grid-row: 1;

	display: flex;
	flex-direction: column;

	width: 100%;
	height: 100%;

	background: rgba(255, 255, 255, 1);
	backdrop-filter: blur(8px) saturate(180%);
	-webkit-backdrop-filter: blur(8px) saturate(180%);

	padding: 1rem;
	overflow: auto;
}

/* Cards inside content */
.cards {
	flex: 1;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 1rem;
	width: 100%;
}

/* Individual card */
.card {
	background: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(8px) saturate(150%);
	-webkit-backdrop-filter: blur(8px) saturate(150%);

	padding: 1rem;
	border-radius: 8px;
	box-shadow: 0 0 4px rgba(0,0,0,0.1);
	text-align: center;
	border: 1px solid rgba(255,255,255,0.7);
	color: var(--system-color-dark-contrast);
}

.card img {
	width: 100px;
	height: 100px;
	object-fit: cover;
	border-radius: 50%;
	margin-bottom: 0.5rem;
}

.card .position {
	font-style: italic;
	color: var(--system-color-grey-500);
}
</style>
