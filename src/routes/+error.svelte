<script>
	import { onMount } from 'svelte';
	import { JDGBodyCopy, JDGContentBoxFloating, JDGContentContainer } from 'jdg-ui-svelte';

	// page copy will change depending on whether a redirect was found
	let redirectFound = false;
	const titleNotFound = 'PAGE NOT FOUND';
	const textNotFound = "Sorry, the requested page wasn't found.";
	const titleRedirect = 'REDIRECTING...';
	const textRedirect = 'This page has moved! Taking you there now.';

	// these are the old Muse website paths
	// that we'll attempt to redirect to in this error page
	const redirects = {
		'/pmx01.html': 'http://parametrix3d.com/007.html',
		'/pmx02.html': 'http://parametrix3d.com/028.html',
		'/pmx03.html': 'http://parametrix3d.com/003.html',
		'/pmx04.html': 'http://parametrix3d.com/021.html',
		'/pmx05.html': 'http://parametrix3d.com/008.html',
		'/pmx06.html': 'http://parametrix3d.com/015.html',
		'/arc01.html': '/architecture/gritty-bbq',
		'/arc02.html': '/architecture/random-school',
		'/arc03.html': '/architecture/old-orchard',
		'/arc04.html': '/architecture/bayou-mixed-use',
		'/arc05.html': '/architecture/arrowhead-towne-center',
		'/arc06.html': '/architecture/orchard-town-center',
		'/arc07.html': '/architecture/beach-chic',
		'/arc09.html': '/architecture/mindful-campus',
		'/arc10.html': '/architecture/mindful-multifamily',
		'/arc11.html': '/architecture/texas-lobby',
		'/arc11-copy.html': '/architecture/fairgrounds',
		'/exp01.html': '/architectural-experiments/fms-campus',
		'/exp02.html': '/architectural-experiments/sixteen-pearl',
		'/exp03.html': '/architectural-experiments/speer-point',
		'/hst02.html': '/architectural-history/flood-middle-school'
	};

	// check for whether the user is trying to access
	// one of the known redirects above, and redirect them
	onMount(() => {
		// url minus the domain stuff, so for example /hst02.html
		const path = window.location.pathname;
		// if the redirects list has an entry with this path, redirect
		if (redirects.hasOwnProperty(path)) {
			redirectFound = true;
			// redirect after a short delay
			// so the redirect message can be read
			setTimeout(() => {
				// @ts-expect-error
				window.location.href = redirects[path];
			}, 750);
		}
	});
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title={redirectFound ? titleRedirect : titleNotFound}
		animateWhenVisible={false}
	>
		<JDGBodyCopy paddingTop="0">
			{#if redirectFound}
				{textRedirect}
			{:else}
				{textNotFound}
			{/if}
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
