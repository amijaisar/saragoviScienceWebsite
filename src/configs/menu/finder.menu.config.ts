import { create_menu_config } from '🍎/helpers/create-menu-config';
import { pages } from '🍎/state/pages';

const openTeamWindow = () => {
	pages.open('team');
};




const social_menu = {
	title: 'Social',
	menu: {
		github: {
			title: 'GitHub',
			action: () => window.open('https://github.com', '_blank'),
			icon: 'mdi/github',
		},
		twitter: {
			title: 'Twitter',
			action: () => window.open('https://twitter.com', '_blank'),
			icon: 'mdi/twitter',
		},
		gitlab: {
			title: 'GitLab',
			action: () => window.open('https://gitlab.com', '_blank'),
			icon: 'mdi/gitlab',
		},
	},
};


export const finder_menu_config = create_menu_config({
	default: {
		title: 'Vision',
		menu: {
			'about-finder': {
				title: 'Exciting future',
				breakAfter: true,
			},
			preferences: {
				title: 'InBio Elctronics',
				breakAfter: true,
			},
			'empty-trash': {
				title: 'MetaBiology',
				breakAfter: true,
			},
			'hide-finder': {
				title: 'Silca',
			},

		},
	},

				file: {
					title: 'Team',
					menu: {
						'new-finder-window': {
				title: 'Principal investigator',
				action: () => openTeamWindow()
			},
			'new-folder': {
				title: 'Postdocs',
				action: () => openTeamWindow()
			},
			'new-folder-with-selection': {
				title: 'PhD students',
				action: () => openTeamWindow()
			},
			'new-smart-folder': {
				title: 'Master students',
				action: () => openTeamWindow()
			},
			'new-tab': {
				title: 'Interns',
				action: () => openTeamWindow()
			},
			'open': {
				title: 'Undergrads and others',
				action: () => openTeamWindow()
			},
			'open-with': {
				title: 'Visiting',
				action: () => openTeamWindow()
			},
			'print': {
				title: 'Lab management and admin',
				disabled: true,
				action: () => openTeamWindow()
			},
			'join': {
				title: 'Join the team',
				disabled: false,
				breakAfter: true,
				action: () => openTeamWindow()
			},


			
		},
	},

	edit: {
		title: 'Publications',
		menu: {
			undo: {
				title: 'Highlights',
				disabled: false,
				breakAfter: true,
			},
			redo: {
				title: 'Peer reviewd',
				disabled: false,
			},

			cut: {
				title: 'Rxiv',
				disabled: false,
			},
			copy: {
				title: 'Sneak peak',
				disabled: false,
			},
			
		},
	},

	view: {
		title: 'Impact',
		menu: {
			'as-icons': {
				title: 'e-waste',
				disabled: false,
			},
			'as-list': {
				title: '(Opto-)electronics',
				disabled: false,
			},
			'as-columns': {
				title: 'Food & Agriculture',
				disabled: false,
			},
			'as-gallery': {
				title: 'Smart Medicine',
				disabled: false,
			},

			'use-stacks': {
				title: 'BrainX',
				breakAfter: true,
			},
			'sort-by': {
				title: 'Deep learning',
				menu: {},
			},

			'Talent development': {
				title: 'Talent development',
				menu: {},
			},
		},
	},

	go: {
		title: 'Spinouts',
		menu: {
			LivingFilters: {
				title: 'LivingFilters',
				disabled: false,
			},			CellBiology: {
				title: 'Cell Biology',
				disabled: true,
			},
			InBioTech: {
				title: 'InBio Tech',
				disabled: true,
			},
			DesignedFood: {
				title: 'Designed Food',
				disabled: true,
			},
		},
	},

	window: {
		title: 'Network',
		menu: {
			ProteinDesign: {
				title: 'Protein Design',
				disabled: false,
			},
			SemiconductorTech: {
				title: 'Semiconductor Tech',
				disabled: false,
			},
			Microb: {
				title: 'Microbial Factories',
				disabled: false,
			},
			CellBiology: {
				title: 'Cell Biology',
				disabled: true,
			},
			Neruscience: {
				title: 'Neuroscience',
				disabled: true,
			},
		},
	},

	help: {
		title: 'Contact',
		menu: {
			'Amijai Saragovi, PhD': {
				title: 'Email Amijai',
				breakAfter: true,
			},
			'Website feedback': {
				title: 'Website help',
			},
		},
	},

	social: social_menu,

});

