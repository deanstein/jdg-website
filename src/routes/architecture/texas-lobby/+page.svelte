<script>
	import imageAttributesCollection from '../../image-attributes-collection';
	import { sharedStyles } from '$lib/shared-strings';

	import { JDGContentBoxFloating, JDGContentContainer, JDGImage, JDGImageFullWidth } from 'jdg-ui-svelte';
	import Series505 from '../../../components/Series505.svelte';
	import UpNext from '../../../components/UpNext.svelte';
</script>

<JDGContentContainer overlapWithHeader paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		primaryText="MODERN TEXAS LOBBY"
		primaryTextBold
		secondaryText="A contemporary take on Texas charm for a new tech office complex"
		imageAttributes={imageAttributesCollection.arch.texas_lobby}
		overlapWithHeader
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false}
	>
	<Series505 />
		<JDGImage
			imageAttributes={imageAttributesCollection.arch.texas_lobby}
			maxHeight="600px"
			cropToFillContainer={false}
			useCompactHeightOnMobile
		/>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
