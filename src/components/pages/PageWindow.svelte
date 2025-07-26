<script lang="ts">
	import { pages } from '🍎/state/pages';
	import PageTrafficLights from './PageTrafficLights.svelte';
	import PageNexus from './PageNexus.svelte';
	import { draggable } from '@neodrag/svelte';
	
	export let page;
	
	let windowEl: HTMLElement;
	
	const close = () => pages.close(page.id);
	const focus = () => pages.bringToFront(page.id);
	
	let resizing = false;
	
	const startResize = (event: MouseEvent) => {
		resizing = true;
		event.stopPropagation();
	
		const startX = event.clientX;
		const startY = event.clientY;
		const startWidth = page.width;
		const startHeight = page.height;
	
		const onMouseMove = (e: MouseEvent) => {
			if (!resizing) return;
	
			const newWidth = Math.max(200, startWidth + (e.clientX - startX));
			const newHeight = Math.max(150, startHeight + (e.clientY - startY));
	
			pages.updateSize(page.id, newWidth, newHeight);
		};
	
		const onMouseUp = () => {
			resizing = false;
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('mouseup', onMouseUp);
		};
	
		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('mouseup', onMouseUp);
	};
	</script>
	
	<section
		role="application"
		class="container"
		bind:this={windowEl}
		style="
			transform: translate(${page.x}px, ${page.y}px);
			width: ${page.width}px;
			height: ${page.height}px;
			z-index: ${page.zIndex};
		"
		on:mousedown={focus}
		use:draggable={{
			handle: '.header',
			onDragEnd: ({ offsetX, offsetY }) => {
				pages.updatePosition(page.id, offsetX, offsetY);
			},
			defaultPosition: { x: page.x, y: page.y }
		}}
	>
		<div class="header">
			<div class="tl-container">
				<PageTrafficLights
					on_close_page={close}
					on_minimize_page={() => {}}
					on_maximize_page={() => {}}
				/>
			</div>
		</div>
	
		<div class="content">
			<PageNexus {page} />
		</div>
	
		<div class="resize-handle" on:mousedown={startResize}></div>
	</section>
	
	<style>
	.container {
		position: absolute;
		border-radius: 0.75rem;
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(10px) saturate(150%);
		box-shadow: 0px 8.5px 10px rgba(0, 0, 0, 0.115), 0px 68px 80px rgba(0, 0, 0, 0.23);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		cursor: default;
	}
	
	.header {
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(4px) saturate(120%);
		padding: 0.5rem;
		cursor: grab;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	
	.header:active {
		cursor: grabbing;
	}
	
	.tl-container {
		display: flex;
		gap: 0.3rem;
	}
	
	.content {
		flex: 1;
		overflow: auto;
	}
	
	.resize-handle {
		position: absolute;
		width: 16px;
		height: 16px;
		right: 0;
		bottom: 0;
		cursor: nwse-resize;
		background: rgba(255, 200, 255, 0.1);
		border-radius: 0 0 0.75rem 0;
	}
	</style>
	