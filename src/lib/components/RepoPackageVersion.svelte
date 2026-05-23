<script>
	import { onMount } from 'svelte';
	import { fetchJsonFromRepo } from 'jdg-ui-svelte';

	export let repoOwner;
	export let repoName;
	export let defaultVersion = 'v0.0.0';
	export let showIfInvalid = true; // if no response from repo, show the default version

	let versionData = { version: defaultVersion };
	let version = defaultVersion;

	onMount(async () => {
		versionData = await fetchJsonFromRepo(repoOwner, repoName, 'package.json');
		version = versionData.version;
	});
</script>

{#if (!repoOwner || !repoName || !versionData || versionData.version === defaultVersion) && showIfInvalid}
	<div class="jdg-repo-package-version">
		v{version}
	</div>
{:else}
	<div class="jdg-repo-package-version">
		v{version}
	</div>
{/if}

<style>
	.jdg-repo-package-version {
		font-size: 0.8rem;
		text-align: center;
		color: gray;
	}
</style>
