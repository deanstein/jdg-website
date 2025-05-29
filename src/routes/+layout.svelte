<script>
	import { page } from '$app/stores';
	import { MetaTags } from 'svelte-meta-tags';
	import extend from 'just-extend';

	import jdgNavItem from 'jdg-ui-svelte/schemas/jdg-nav-item.js';
	import { addCloudinaryUrlTransformation, instantiateObject } from 'jdg-ui-svelte/jdg-utils.js';
	import { jdgWebsiteRepoName } from 'jdg-ui-svelte/jdg-persistence-management.js';

	import { JDGAppContainer, JDGBackground, JDGFooter, JDGHeader } from 'jdg-ui-svelte';
	import SocialMedia from '../components/SocialMedia.svelte';
	import { pageMeta, sharedUrls } from '$lib/shared-strings';

	// META TAGS
	// will be be sourced from +layout.js first,
	// then optionally +page.js as overrides via $page
	export let data; // meta tag data from $page
	/** @type {Object.<string, any>} */
	let metaTags;
	$: {
		metaTags = extend(true, {}, data.baseMetaTags, $page.data.pageMetaTags);
		// make the title template simply the website title
		// if the page title is the same as the website title
		if (metaTags.title === pageMeta.home.title) {
			metaTags.titleTemplate = pageMeta.home.title;
		} else {
			metaTags.titleTemplate = pageMeta.titleTemplate;
		}
	}

	// GOOGLE ANALYLTICS
	// this enables tracking of each page dynamically
	const trackingId = 'G-5RJRPLL5WL';
	$: {
		// @ts-expect-error
		if (typeof gtag !== 'undefined') {
			// @ts-expect-error
			gtag('config', trackingId, {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}

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

	const disclaimer =
		'Some projects may have been completed while employed by or in collaboration with various organizations, consultants, or designers.';
</script>

<!-- GOOGLE ANALYTICS -->
<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-8Y56LMC5GF');
	</script>
</svelte:head>
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
		{disclaimer}
		alignItems="center"
		showDevToolsButton={true}
	>
		<SocialMedia />
	</JDGFooter>
</JDGAppContainer>
