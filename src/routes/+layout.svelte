<script>
	import { page } from '$app/stores';
	import { MetaTags } from 'svelte-meta-tags';
	import extend from 'just-extend';

	import jdgNavItem from 'jdg-ui-svelte/schemas/jdg-nav-item.js';
	import { addCloudinaryUrlTransformation, instantiateObject } from 'jdg-ui-svelte/jdg-utils.js';
	import { jdgWebsiteRepoName } from 'jdg-ui-svelte/jdg-persistence-management.js';

	import { JDGAppContainer, JDGBackground, JDGFooter, JDGHeader } from 'jdg-ui-svelte';
	import SocialMedia from '../components/SocialMedia.svelte';
	import { sharedUrls } from '$lib/shared-strings';

	// META TAGS
	// will be be sourced from +layout.js first,
	// then optionally +page.js as overrides via $page
	export let data; // meta tag data from $page
	$: metaTags = extend(true, {}, data.baseMetaTags, $page.data.pageMetaTags);

	// define the nav items in the header
	const newNavItem1 = instantiateObject(jdgNavItem);
	newNavItem1.label = 'HOME';
	newNavItem1.href = '/';

	const newNavItem2 = instantiateObject(jdgNavItem);
	newNavItem2.label = 'ABOUT';
	newNavItem2.href = '/about';

	const newNavItem3 = instantiateObject(jdgNavItem);
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

<MetaTags {...metaTags} />
<JDGAppContainer
	appLoadingIconSrc={addCloudinaryUrlTransformation(sharedUrls.websiteIconSrc)}
	showHeaderStripes={false}
>
	<JDGHeader
		logoSupertitle={'THE WORK OF'}
		logoTitle={'JOSHUA DEAN GOLDSTEIN'}
		logoSrc={addCloudinaryUrlTransformation(
			'https://res.cloudinary.com/jdg-main/image/upload/v1720834639/jdg-website/jdg-logo.jpg'
		)}
		{navItems}
	/>

	<JDGBackground />

	<slot />

	<JDGFooter
		repoName={jdgWebsiteRepoName}
		{appVersion}
		{additionalVersionData}
		{disclaimer}
		alignItems="center"
		showDevToolsButton={true}
	>
		<SocialMedia />
	</JDGFooter>
</JDGAppContainer>
