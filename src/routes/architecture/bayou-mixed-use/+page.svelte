<script>
	import { JDGContentBoxFloating, JDGContentContainer, JDGImageCarousel } from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title="BAYOU MIXED USE"
		subtitle="A new urban riverside destination for New Orleans"
	>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.arch.bayou_mixed_use_4,
				imageAttributesCollection.arch.bayou_mixed_use_2,
				imageAttributesCollection.arch.bayou_mixed_use_3,
				imageAttributesCollection.arch.bayou_mixed_use_1
			]}
			maxHeight="600px"
		/>
	</JDGContentBoxFloating>
</JDGContentContainer>
