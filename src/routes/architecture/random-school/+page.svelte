<script>
	import { JDGContentBoxFloating, JDGContentContainer, JDGImageCarousel } from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title="ABANDONED SCHOOL REUSE"
		subtitle="Resurrecting a post-war relic for a unique public space"
	>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.arch.random_school_terrace,
				imageAttributesCollection.arch.random_school_canopy,
				imageAttributesCollection.arch.random_school_play,
				imageAttributesCollection.arch.random_school_aerial,
				imageAttributesCollection.arch.random_school_before_exterior,
				imageAttributesCollection.arch.random_school_before_walkway
			]}
			maxHeight="600px"
		/>
	</JDGContentBoxFloating>
</JDGContentContainer>
