<script>
	import { JDGContentBoxFloating, JDGContentContainer, JDGImageCarousel } from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title="COASTAL DESTINATION ADAPTIVE REUSE"
		subtitle="A historic block gets a beach chic makeover"
	>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.arch.beach_chic_concourse,
				imageAttributesCollection.arch.beach_chic_towers,
				imageAttributesCollection.arch.beach_chic_aerial
			]}
			maxHeight="600px"
		/>
	</JDGContentBoxFloating>
</JDGContentContainer>
