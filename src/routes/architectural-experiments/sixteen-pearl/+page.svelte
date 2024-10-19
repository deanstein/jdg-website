<script>
	import { sharedStyles } from '$lib/shared-strings';
	import imageAttributesCollection from '../../image-attributes-collection';

	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGFullWidthContainer,
		JDGImageCarousel,
		JDGImageFullWidth,
		JDGImageTile
	} from 'jdg-ui-svelte';
	import SeriesExperimental from '../../../components/SeriesExperimental.svelte';
	import UpNext from '../../../components/UpNext.svelte';
</script>

<JDGContentContainer overlapWithHeader paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		primaryText="16 PEARL ADAPTIVE REUSE"
		primaryTextBold
		secondaryText="Striking new townhomes emerge from a bland apartment block"
		imageAttributes={imageAttributesCollection.exp.sixteen_pearl_corner}
		overlapWithHeader
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false}>
		<SeriesExperimental />
		<JDGBodyCopy paddingTop="0">
			This nondescript apartment block at the intersection of 16th Ave and Pearl St in Denver was
			demolished in 2016.
			<br /><br />
			Prior to demolition, I studied reuse options for the building, including this scheme which converts
			each stack of apartments into a 3-story walk-up townhome, complete with new exterior patio and
			deck spaces. The original mansard roof and exterior brick are both retained and painted, but trimmed
			where necessary.
		</JDGBodyCopy>
		<JDGFullWidthContainer>
			<JDGImageCarousel
				imageAttributeObjects={[
					imageAttributesCollection.exp.sixteen_pearl_corner,
					imageAttributesCollection.exp.sixteen_pearl_before,
					imageAttributesCollection.exp.sixteen_pearl_terrace
				]}
				maxHeight="600px"
			/>
		</JDGFullWidthContainer>
		<JDGBodyCopy>
			Inside, the townhomes feature open, airy spaces connected by a new modern stair tower. Channel
			glass light wells bring natural glow to the townhomes and to the original common hallway on
			the first floor, which is retained.
		</JDGBodyCopy>
		<JDGImageTile
			imageAttributes={imageAttributesCollection.exp.sixteen_pearl_interior}
			cropToFillContainer={false}
			maxHeight="50vh"
			showCaption={true}
		/>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
