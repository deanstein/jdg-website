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
		primaryText="SPEER POINT ADAPTIVE REUSE"
		primaryTextBold
		secondaryText="Enhancing a quirky, under-utilized site"
		imageAttributes={imageAttributesCollection.exp.speer_point_after}
		overlapWithHeader
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false}>
		<SeriesExperimental />
		<JDGBodyCopy paddingTop="0">
			A small building in Denver gets transformed into an artist-focused mixed use space in this
			adaptive reuse scheme.
			<br /><br />
			Featuring studios, a cafe, a restaurant, and outdoor event space, the building would be active
			at many hours during the day and would provide eyes on the street and a convenient place to recharge
			for the nearby pedestrian trail.
		</JDGBodyCopy>
		<JDGFullWidthContainer>
			<JDGImageCarousel
				imageAttributeObjects={[
					imageAttributesCollection.exp.speer_point_after,
					imageAttributesCollection.exp.speer_point_before
				]}
				maxHeight="600px"
			/>
		</JDGFullWidthContainer>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
