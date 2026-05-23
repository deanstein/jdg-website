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
		primaryText="ORCHARD TOWN CENTER"
		primaryTextBold
		secondaryText="A community gathering space inspired by nature"
		imageMeta={imageMetaRegistry.arch.otc_column}
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
					imageMetaRegistry.arch.otc_below,
					imageMetaRegistry.arch.otc_far,
					imageMetaRegistry.arch.otc_column,
					imageMetaRegistry.arch.otc_seating,
					imageMetaRegistry.arch.otc_rendering
				]}
				maxHeight="600px"
			/>
		</JDGFullWidthContainer>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
