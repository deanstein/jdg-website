<script>
	import imageAttributesCollection from '../../image-attributes-collection';
	import { sharedStyles } from '$lib/shared-strings';

	import { JDGContentBoxFloating, JDGContentContainer, JDGImageCarousel, JDGImageFullWidth } from 'jdg-ui-svelte';
	import Series505 from '../../../components/Series505.svelte';
	import UpNext from '../../../components/UpNext.svelte';
</script>

<JDGContentContainer overlapWithHeader paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		primaryText="MINDFUL LIVE/WORK CAMPUS"
		primaryTextBold
		secondaryText="A sustainable, community-focused neighborhood"
		imageAttributes={imageAttributesCollection.arch.mindful_campus_boulevard_close}
		overlapWithHeader
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false}
	>
	<Series505 />
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
	<UpNext />
</JDGContentContainer>
