import { writable } from 'svelte/store';

type PageInstance = {
	id: string;
	type: string;
	x: number;
	y: number;
	width: number;
	height: number;
	zIndex: number;
};


function getSafePosition(pages: PageInstance[]): { x: number; y: number } {
	const baseX = 100;
	const baseY = 100;
	const offset = 30;
	const maxX = Math.max(0, window.innerWidth - 600 - 20);
	const maxY = Math.max(0, window.innerHeight - 400 - 20);

	const count = pages.length;

	let x = baseX + ((count * offset) % maxX);
	let y = baseY + ((count * offset) % maxY);

	x = Math.min(x, maxX);
	y = Math.min(y, maxY);

	return { x, y };
}


function createPagesStore() {
	const { subscribe, update } = writable<PageInstance[]>([]);

	let global_z_index = 100;

	return {
		subscribe,

		open: (type: string, extras: Partial<PageInstance> = {}) => update(pages => {
			console.log("🚨 pages.open() called for", type, extras);
			const id = crypto.randomUUID();
			const zIndex = Math.max(0, ...pages.map(p => p.zIndex)) + 1;
		
			const { x, y } = getSafePosition(pages);
		
			pages.push({
				id,
				type,
				x,
				y,
				width: 600,
				height: 400,
				zIndex,
				...extras,
			});
		
			return pages;
		}),
		
		

		close: (id: string) => update(pages => pages.filter(p => p.id !== id)),

		bringToFront: (id: string) => update(pages => {
			global_z_index += 2;
			return pages.map(p =>
				p.id === id ? { ...p, zIndex: global_z_index } : p
			);
		}),

		updatePosition: (id: string, x: number, y: number) => update(pages =>
			pages.map(p => p.id === id ? { ...p, x, y } : p)
		),

		updateSize: (id: string, width: number, height: number) => update(pages =>
			pages.map(p => p.id === id ? { ...p, width, height } : p)
		),
	};
}

export const pages = createPagesStore();
