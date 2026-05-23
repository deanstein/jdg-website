<script>
	import { jdgSharedUrlsStore } from 'jdg-ui-svelte';
	import { JDGSocialMedia } from 'jdg-ui-svelte';
</script>

<JDGSocialMedia
	instagramHref={$jdgSharedUrlsStore.jdgInstagram}
	linkedinHref={$jdgSharedUrlsStore.jdgLinkedIn}
	githubHref={$jdgSharedUrlsStore.jdgGitHub}
/>
