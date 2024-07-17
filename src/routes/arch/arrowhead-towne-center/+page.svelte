<script>
	import { JDGContentBoxFloating, JDGContentContainer, JDGImageCarousel } from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title="ARROWHEAD TOWNE CENTER"
		subtitle="Finding desert charm in an Arizona shopping center"
	>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.arch.atc_elevator,
				imageAttributesCollection.arch.atc_escalator,
				imageAttributesCollection.arch.atc_food_court
			]}
			maxHeight="600px"
		/>
	</JDGContentBoxFloating>
</JDGContentContainer>
