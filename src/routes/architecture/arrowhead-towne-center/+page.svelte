<script>
	import imageAttributesCollection from '../../image-attributes-collection';
	import { sharedStyles } from '$lib/shared-strings';

	import {
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImageCarousel,
		JDGImageFullWidth
	} from 'jdg-ui-svelte';
	import Series505 from '../../../components/Series505.svelte';
	import UpNext from '../../../components/UpNext.svelte';
</script>

<JDGContentContainer overlapWithHeader paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		primaryText="ARROWHEAD TOWNE CENTER"
		primaryTextBold
		secondaryText="Finding desert charm in an Arizona shopping center"
		imageAttributes={imageAttributesCollection.arch.atc_elevator}
		overlapWithHeader
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false}>
		<Series505 />
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
