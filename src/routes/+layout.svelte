<script>
	import { css } from '@emotion/css';
	import { JDGBackground, JDGFooter, JDGHeader } from 'jdg-ui-svelte';

	import { jdgWebsiteRepoName } from 'jdg-ui-svelte/jdg-persistence-management.js';
	import 'jdg-ui-svelte/jdg-styling-root.css';
	import { jdgColors } from 'jdg-ui-svelte/jdg-styling-constants.js';

	// get versions from package.json to display in the footer
	//@ts-expect-error
	const appVersion = packageJson?.version;
	//@ts-expect-error
	const jdgUIVersion = packageJson?.dependencies['jdg-ui-svelte'];

	const additionalVersionData = `JDG UI: v${jdgUIVersion}`;

	const disclaimer =
		'Some projects may have been completed while employed by or in collaboration with various organizations, consultants, or designers.';

	// global styles, but using emotion css
	const jdgLayoutCss = css`
		a {
			color: ${jdgColors.text};
		}
		a:before {
			background-color: ${jdgColors.accentStripesJDG[2]};
		}
	`;
</script>

<div class="jdg-layout {jdgLayoutCss}">
	<JDGHeader
		logoTitle={'J. DEAN GOLDSTEIN'}
		logoSupertitle={'THE WORK OF'}
		logoSrc={'./jdg-logo.jpg'}
	/>

	<JDGBackground />

	<slot />

	<JDGFooter repoName={jdgWebsiteRepoName} {appVersion} {additionalVersionData} {disclaimer} />
</div>

<style>
	.jdg-layout {
		display: flex;
		flex-direction: column;
	}
</style>
