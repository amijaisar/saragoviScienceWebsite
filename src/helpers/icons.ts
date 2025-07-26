import GithubIcon from '~icons/mdi/github';
import GitlabIcon from '~icons/mdi/gitlab';
import TwitterIcon from '~icons/mdi/twitter';
import BlogIcon from '~icons/mdi/grease-pencil';
import WorksIcon from '~icons/ic/round-workspaces';
import DevToIcon from '~icons/mdi/dev-to';
import About from '~icons/mdi/about';
import WebIcon from '~icons/mdi/web'; // fallback

const icons = {
	'mdi/github': GithubIcon,
	'mdi/gitlab': GitlabIcon,
	'mdi/twitter': TwitterIcon,
	// add more here as needed
};

export function getIcon(name: string) {
	if (!icons[name]) {
		console.warn(`⚠️ Unknown icon: ${name}`);
	}
	return icons[name] || WebIcon;
}