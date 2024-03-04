<script>
	import navItem from 'jdg-ui-svelte/schemas/nav-item.js';

	import { jdgWebsiteRepoName } from 'jdg-ui-svelte/jdg-persistence-management.js';
	import { instantiateObject } from 'jdg-ui-svelte/jdg-utils.js';

	import { JDGAppContainer, JDGBackground, JDGFooter, JDGHeader } from 'jdg-ui-svelte';
	import 'jdg-ui-svelte/jdg-styling-root.css';

	// define the nav items in the header
	const newNavItem1 = instantiateObject(navItem);
	newNavItem1.label = 'HOME';
	newNavItem1.href = '/';

	const newNavItem2 = instantiateObject(navItem);
	newNavItem2.label = 'ABOUT';
	newNavItem2.href = '/about';

	const newNavItem3 = instantiateObject(navItem);
	newNavItem3.label = 'CONTACT';
	newNavItem3.href = '/contact';

	const navItems = [newNavItem1, newNavItem2, newNavItem3];

	// get versions from package.json to display in the footer
	//@ts-expect-error
	const appVersion = packageJson?.version;
	//@ts-expect-error
	const jdgUIVersion = packageJson?.dependencies['jdg-ui-svelte'];

	const additionalVersionData = `JDG UI: v${jdgUIVersion}`;

	const disclaimer =
		'Some projects may have been completed while employed by or in collaboration with various organizations, consultants, or designers.';
</script>

<JDGAppContainer appLoadingIconSrc="./jdg-logo.jpg">
	<JDGHeader
		logoTitle={'JOSH DEAN GOLDSTEIN'}
		logoSupertitle={'THE WORK OF'}
		logoSrc={'./jdg-logo.jpg'}
		{navItems}
	/>

	<JDGBackground />

	<slot />

	<JDGFooter repoName={jdgWebsiteRepoName} {appVersion} {additionalVersionData} {disclaimer} />
</JDGAppContainer>
