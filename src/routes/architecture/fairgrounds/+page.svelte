<script>
	import {
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGFullWidthContainer,
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
		primaryText="THE FAIRGROUNDS"
		primaryTextBold
		secondaryText="A new community on a former World's Fair site"
		imageMeta={imageMetaRegistry.arch.fairgrounds_aerial}
		overlapWithHeader
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false}>
		<Series505 />
		<JDGFullWidthContainer>
			<JDGImageCarousel
				imageMetaSet={[
					imageMetaRegistry.arch.fairgrounds_aerial,
					imageMetaRegistry.arch.fairgrounds_river,
					imageMetaRegistry.arch.fairgrounds_fountain,
					imageMetaRegistry.arch.fairgrounds_park
				]}
				maxHeight="600px"
			/>
		</JDGFullWidthContainer>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
