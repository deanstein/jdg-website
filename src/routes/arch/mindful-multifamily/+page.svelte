<script>
	import { JDGContentBoxFloating, JDGContentContainer, JDGImageCarousel } from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title="MINDFUL MULTIFAMILY"
		subtitle="Multifamily for a cutting-edge tech/health/research campus"
	>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.arch.mindful_multifamily,
				imageAttributesCollection.arch.mindful_multifamily_highway,
				imageAttributesCollection.arch.mindful_multifamily_close
			]}
			maxHeight="600px"
		/>
	</JDGContentBoxFloating>
</JDGContentContainer>
