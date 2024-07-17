<script>
	import { JDGContentBoxFloating, JDGContentContainer, JDGImageCarousel } from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title="MINDFUL LIVE/WORK CAMPUS"
		subtitle="A sustainable, community-focused neighborhood"
	>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.arch.mindful_campus_boulevard_close,
				imageAttributesCollection.arch.mindful_campus_aerial,
				imageAttributesCollection.arch.mindful_campus_boulevard,
				imageAttributesCollection.arch.mindful_campus_plaza
			]}
			maxHeight="600px"
		/>
	</JDGContentBoxFloating>
</JDGContentContainer>
