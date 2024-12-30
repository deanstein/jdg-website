<script>
	import imageAttributesCollection from '../../image-attributes-collection';
	import { sharedStyles } from '$lib/shared-strings';

	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImage,
		JDGImageFullWidth
	} from 'jdg-ui-svelte';
	import UpNext from '../../../components/UpNext.svelte';
	import { appAccentColors } from 'jdg-ui-svelte/states/ui-state.js';
	import { darkenColor } from 'jdg-ui-svelte/jdg-utils.js';
</script>

<JDGContentContainer overlapWithHeader paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		primaryText="PIVOT CHAIR"
		primaryTextBold
		secondaryText="Versatile, flexible, and comfortable"
		imageAttributes={imageAttributesCollection.ind.pivot_chair_model_1}
		overlapWithHeader
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false}>
		<JDGBodyCopy paddingBottom="0"
			>The Pivot Chair is an innovative chair design that offers incredible customization and
			versatility thanks to its ingenius rotating hub.
			<br /><br />
			The central pivoting hub allows for precise angle and height customization as well as unique configurations
			for storage and slumber.
		</JDGBodyCopy>
		<JDGImage
			imageAttributes={imageAttributesCollection.ind.pivot_chair_positions_all}
			maxHeight="300px"
		/>
		<JDGBodyCopy paddingBottom="0"
			>When combined with the Pivot Ottoman, the Pivot Chair can transform into a small bed,
			creating a compact and versatile solution for urban homes or empty nesters.
		</JDGBodyCopy>
		<JDGImage imageAttributes={imageAttributesCollection.ind.pivot_chair_ottoman_composite} />
		<JDGBodyCopy paddingBottom="0">
			A functioning prototype of the Pivot Chair was built using CNC machining and hand assembly,
			along with a bespoke fabricated cushion.
			<br /><br />
			The Pivot Chair prototype now resides in my condo:
		</JDGBodyCopy>
		<JDGImage
			imageAttributes={imageAttributesCollection.ind.pivot_chair_photo_1}
			cropToFillContainer={false}
			maxHeight="600px"
		/>
		<JDGBodyCopy paddingBottom="0" />
		<i
			class="fa-solid fa-medal"
			style="font-size: 75px; color: {darkenColor($appAccentColors[0], 0.2)};"
		/>
		<JDGBodyCopy paddingTop="0" textAlign="center" textWrap="balance"
			>The Pivot Chair won first place in the 2012 International Woodworking Fair Design Emphasis
			competition in Atlanta, Georgia.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
