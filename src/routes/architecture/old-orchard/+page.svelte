<script>
	import imageMetaRegistry from '../../image-attributes-collection';
	import { sharedStyles } from '$lib/shared-strings';

	import {
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGFullWidthContainer,
		JDGImageCarousel,
		JDGImageFullWidth
	} from 'jdg-ui-svelte';
	import Series505 from '../../../components/Series505.svelte';
	import UpNext from '../../../components/UpNext.svelte';
</script>

<JDGContentContainer overlapWithHeader paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		primaryText="OLD ORCHARD"
		primaryTextBold
		secondaryText="Architectural fabrication that reinforces a brand"
		imageMeta={imageMetaRegistry.arch.old_orchard_outside}
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
					imageMetaRegistry.arch.old_orchard_close,
					imageMetaRegistry.arch.old_orchard_outside,
					imageMetaRegistry.arch.old_orchard_covered
				]}
				maxHeight="600px"
			/>
		</JDGFullWidthContainer>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
