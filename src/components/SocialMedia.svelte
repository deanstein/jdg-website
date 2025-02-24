<script>
	import jdgSharedUrlsStore from 'jdg-ui-svelte/stores/jdg-shared-urls-store.js';
	import { JDGSocialMedia } from 'jdg-ui-svelte';
</script>

<JDGSocialMedia
	instagramHref={$jdgSharedUrlsStore.jdgInstagram}
	linkedinHref={$jdgSharedUrlsStore.jdgLinkedIn}
	githubHref={$jdgSharedUrlsStore.jdgGitHub}
/>
