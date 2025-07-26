import AboutLogo from '../components/pages/AboutLogo/AboutLogo.svelte';
import Team from "../components/pages/team/team.svelte";


export const pageViews: Record<string, any> = {
	aboutLogo: AboutLogo,
	team: Team,
};

console.log("✅ pageViews mapping:", pageViews);
