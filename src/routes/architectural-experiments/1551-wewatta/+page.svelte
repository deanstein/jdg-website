<script>
	import imageAttributesCollection from '../../image-attributes-collection';

	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImageCarousel,
		JDGImageFullWidth,
		JDGFullWidthContainer
	} from 'jdg-ui-svelte';
	import UpNext from '../../../components/UpNext.svelte';
	import SeriesExperimental from '../../../components/SeriesExperimental.svelte';
</script>

<JDGContentContainer overlapWithHeader paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		primaryText="MINDFUL SHOWROOM"
		primaryTextBold
		secondaryText="Softening a corporate corner with a pedestrian-scale showroom"
		imageAttributes={imageAttributesCollection.exp.corporate_showroom_corner}
		overlayColorRgba={'rgba(50, 50, 50, 0.8)'}
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false}>
		<SeriesExperimental />
		<JDGBodyCopy paddingTop="0">
			A large office building at 15th and Wewatta in Denver, Colorado gets a major overhaul as the
			headquarters of a fictional outdoor apparel company.
			<br /><br />
			The short, 3-level portion of the building is demolished to make room for a striking, glassy showroom
			and coffee shop anchoring the prominent intersection. Between the new showroom and the existing
			office building, a new pedestrian alley allows visitors to cut across the site and experience the
			showroom from another angle.
		</JDGBodyCopy>
		<JDGFullWidthContainer>
			<JDGImageCarousel
				imageAttributeObjects={[
					imageAttributesCollection.exp.corporate_showroom_corner,
					imageAttributesCollection.exp.corporate_showroom_before,
					imageAttributesCollection.exp.corporate_showroom_elevation
				]}
				maxHeight="600px"
			/>
		</JDGFullWidthContainer>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
