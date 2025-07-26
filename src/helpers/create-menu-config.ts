import { apps } from '../state/apps.svelte';
import { pages } from '../state/pages';

const science = {
	title: 'saragovi.science',
	menu: {
		'about-the-logo': {
			title: 'About the logo',
			action: () => {
				console.log('✅ Menu: aboutLogo clicked');
				pages.open('aboutLogo');
			},
			breakAfter: true,
		},
		'Lund University Site': {
			title: 'LU Website',
			action: () => {
				console.log('🌐 Menu: LU Website clicked');
				window.open('https://www.lunduniversity.lu.se/', '_blank', 'noopener,noreferrer');
			},
		},

		'LTH': {
			title: 'LTH',
			action: () => {
				console.log('🌐 Menu: LTH clicked');
				window.open('https://www.lunduniversity.lu.se/lucat/group/v1000170', '_blank', 'noopener,noreferrer');
			},
			breakAfter: true,
		},
	},
};

export const create_menu_config = <T extends {}>(et: T) => ({
	apple: science,
	...et,
});
