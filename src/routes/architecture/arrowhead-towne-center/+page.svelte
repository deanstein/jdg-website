<script>
	import {
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImageCarousel,
		JDGImageFullWidth
	} from 'jdg-ui-svelte';

	import imageMetaRegistry from '$lib/image-meta-registry';
	import { sharedStyles } from '$lib/shared-strings';
	import Series505 from '$lib/components/Series505.svelte';
	import UpNext from '$lib/components/UpNext.svelte';
</script>

<JDGContentContainer overlapWithHeader paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		primaryText="ARROWHEAD TOWNE CENTER"
		primaryTextBold
		secondaryText="Finding desert charm in an Arizona shopping center"
		imageMeta={imageMetaRegistry.arch.atc_elevator}
		overlapWithHeader
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false}>
		<Series505 />
		<JDGImageCarousel
			imageMetaSet={[
				imageMetaRegistry.arch.atc_elevator,
				imageMetaRegistry.arch.atc_escalator,
				imageMetaRegistry.arch.atc_food_court
			]}
			maxHeight="600px"
		/>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
