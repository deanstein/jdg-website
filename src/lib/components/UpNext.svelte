<script>
	import { JDGUpNext } from 'jdg-ui-svelte';

	import imageMetaRegistry from '$lib/image-meta-registry';
</script>

<JDGUpNext
	item1Label={'SEE ALL WORK'}
	item1Href={'/'}
	item1ImageAttributes={imageMetaRegistry.arch.texas_lobby}
	item2Label={'ABOUT JOSH'}
	item2Href="/about"
	item2ImageAttributes={imageMetaRegistry.jdg_photo_2}
	item2ObjectPosition="right"
	item3Label="GET IN TOUCH"
	item3Href="/contact"
	item3ImageAttributes={imageMetaRegistry.exp.broadway_southwest_concept_2_promenade}
/>
