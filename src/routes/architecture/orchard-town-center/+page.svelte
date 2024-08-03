<script>
	import { JDGContentBoxFloating, JDGContentContainer, JDGImageCarousel } from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title="ORCHARD TOWN CENTER"
		subtitle="A community gathering space inspired by Prairie Style architecture"
	>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.arch.otc_below,
				imageAttributesCollection.arch.otc_far,
				imageAttributesCollection.arch.otc_column,
				imageAttributesCollection.arch.otc_seating,
				imageAttributesCollection.arch.otc_rendering
			]}
			maxHeight="600px"
		/>
	</JDGContentBoxFloating>
</JDGContentContainer>
