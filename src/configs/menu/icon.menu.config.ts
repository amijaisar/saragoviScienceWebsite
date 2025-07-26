import GithubIcon from '~icons/mdi/github';
import GitlabIcon from '~icons/mdi/gitlab';
import TwitterIcon from '~icons/mdi/twitter';
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
