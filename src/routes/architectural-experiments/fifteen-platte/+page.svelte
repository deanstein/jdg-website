<script>
	import imageAttributesCollection from '../../image-attributes-collection';
	import { sharedStyles } from '$lib/shared-strings';

	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGFullWidthContainer,
		JDGImageCarousel,
		JDGImageFullWidth
	} from 'jdg-ui-svelte';
	import SeriesExperimental from '../../../components/SeriesExperimental.svelte';
	import UpNext from '../../../components/UpNext.svelte';
</script>

<JDGContentContainer overlapWithHeader paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		primaryText="FIFTEEN PLATTE MODERN OFFICE"
		primaryTextBold
		secondaryText="Powerful 3D software generating unique architecture"
		imageAttributes={imageAttributesCollection.exp.fifteen_platte_dynamo}
		overlapWithHeader
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false}>
		<SeriesExperimental />
		<JDGBodyCopy paddingTop="0">
			A quick design for an empty parking lot in Denver, Colorado using Autodesk FormIt and Autodesk
			Dynamo to generate floor plates and a dynamic column structure.
			<br /><br />
			This model was used to demonstrate FormIt + Dynamo workflows in the early stages of that integration.
		</JDGBodyCopy>
		<JDGFullWidthContainer>
			<JDGImageCarousel
				imageAttributeObjects={[
					imageAttributesCollection.exp.fifteen_platte_sunset,
					imageAttributesCollection.exp.fifteen_platte_grayscale,
					imageAttributesCollection.exp.fifteen_platte_dynamo
				]}
				maxHeight="600px"
			/>
		</JDGFullWidthContainer>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
