<script>
	import imageAttributesCollection from '../../image-attributes-collection';
	import { sharedStyles } from '$lib/shared-strings';

	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImageCarousel,
		JDGImageFullWidth
	} from 'jdg-ui-svelte';
	import UpNext from '../../../components/UpNext.svelte';
</script>

<JDGContentContainer overlapWithHeader paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		primaryText="PIVOT CHAIR"
		primaryTextBold
		secondaryText="Versatile, flexible, comfortable"
		imageAttributes={imageAttributesCollection.ind.pivot_model_1}
		overlapWithHeader
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false}>
		<JDGBodyCopy>The Pivot chair is an innovative chair design that offers incredible customization and versatility thanks to its ingenius rotating hub.
		<br><br>
		The central pivoting hub allows for precise angle and height customization as well as unique configurations for storage and sleeping.</JDGBodyCopy>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.arch.atc_elevator,
				imageAttributesCollection.arch.atc_escalator,
				imageAttributesCollection.arch.atc_food_court
			]}
			maxHeight="600px"
		/>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
