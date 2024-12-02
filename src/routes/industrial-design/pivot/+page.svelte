<script>
	import imageAttributesCollection from '../../image-attributes-collection';
	import { sharedStyles } from '$lib/shared-strings';

	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImage,
		JDGImageCarousel,
		JDGImageFullWidth
	} from 'jdg-ui-svelte';
	import UpNext from '../../../components/UpNext.svelte';
</script>

<JDGContentContainer overlapWithHeader paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		primaryText="PIVOT CHAIR"
		primaryTextBold
		secondaryText="Versatile, flexible, and comfortable"
		imageAttributes={imageAttributesCollection.ind.pivot_model_1}
		overlapWithHeader
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false}>
		<JDGBodyCopy
			>The Pivot Chair is an innovative chair design that offers incredible customization and
			versatility thanks to its ingenius rotating hub.
			<br /><br />
			The central pivoting hub allows for precise angle and height customization as well as unique configurations
			for storage and slumber.
		</JDGBodyCopy>
		<JDGImage
			imageAttributes={imageAttributesCollection.ind.pivot_positions_all}
			maxHeight="300px"
		/>
		<JDGBodyCopy
			>When combined with the Pivot Ottoman, the Pivot Chair becomes a small bed - a compact and
			versatile solution for urban homes or empty nesters!
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
