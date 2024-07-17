<script>
	import { JDGContentBoxFloating, JDGContentContainer, JDGImageCarousel } from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title="THE FAIRGROUNDS"
		subtitle="A new community on a former Worlds Fair site"
	>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.arch.fairgrounds_aerial,
				imageAttributesCollection.arch.fairgrounds_river,
				imageAttributesCollection.arch.fairgrounds_fountain,
				imageAttributesCollection.arch.fairgrounds_park
			]}
			maxHeight="600px"
		/>
	</JDGContentBoxFloating>
</JDGContentContainer>
