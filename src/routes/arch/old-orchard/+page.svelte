<script>
	import { JDGContentBoxFloating, JDGContentContainer, JDGImageCarousel } from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title="OLD ORCHARD"
		subtitle="Architectural fabrication that reinforces a brand"
	>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.arch.old_orchard_close,
				imageAttributesCollection.arch.old_orchard_outside,
				imageAttributesCollection.arch.old_orchard_covered
			]}
			maxHeight="600px"
		/>
	</JDGContentBoxFloating>
</JDGContentContainer>
