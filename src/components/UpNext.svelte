<script>
	import imageAttributesCollection from '../routes/image-attributes-collection';
	import { JDGUpNext } from 'jdg-ui-svelte';
</script>

<JDGUpNext
	item1Label={'SEE ALL WORK'}
	item1Href={'/'}
	item1ImageAttributes={imageAttributesCollection.arch.texas_lobby}
	item2Label={'ABOUT JOSH'}
	item2Href="/about"
	item2ImageAttributes={imageAttributesCollection.jdg_photo_2}
	item3Label="GET IN TOUCH"
	item3Href="/contact"
	item3ImageAttributes={imageAttributesCollection.exp.broadway_southwest_concept_2_promenade}
/>
