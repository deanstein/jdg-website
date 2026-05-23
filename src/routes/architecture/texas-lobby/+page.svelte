<script>
	import {
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImage,
		JDGImageFullWidth
	} from 'jdg-ui-svelte';

	import imageMetaRegistry from '$lib/image-meta-registry';
	import { sharedStyles } from '$lib/shared-strings';
	import Series505 from '$lib/components/Series505.svelte';
	import UpNext from '$lib/components/UpNext.svelte';
</script>

<JDGContentContainer overlapWithHeader paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		primaryText="MODERN TEXAS LOBBY"
		primaryTextBold
		secondaryText="A contemporary take on Texas charm for a new tech office complex"
		imageMeta={imageMetaRegistry.arch.texas_lobby}
		overlapWithHeader
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false}>
		<Series505 />
		<JDGImage
			imageMeta={imageMetaRegistry.arch.texas_lobby}
			maxHeight="600px"
			cropToFillContainer={false}
			useAutoHeightOnMobile
		/>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
