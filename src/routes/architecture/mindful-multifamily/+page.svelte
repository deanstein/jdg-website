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
		primaryText="MINDFUL MULTIFAMILY"
		primaryTextBold
		secondaryText="Multifamily for a cutting-edge tech/health/research campus"
		imageMeta={imageMetaRegistry.arch.mindful_multifamily}
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
					imageMetaRegistry.arch.mindful_multifamily,
					imageMetaRegistry.arch.mindful_multifamily_highway,
					imageMetaRegistry.arch.mindful_multifamily_close
				]}
				maxHeight="600px"
			/>
		</JDGFullWidthContainer>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
