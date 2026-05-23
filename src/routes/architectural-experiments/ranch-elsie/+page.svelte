<script>
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGFullWidthContainer,
		JDGImage,
		JDGImageFullWidth
	} from 'jdg-ui-svelte';

	import imageMetaRegistry from '$lib/image-meta-registry';
	import { sharedStyles } from '$lib/shared-strings';
	import SeriesExperimental from '$lib/components/SeriesExperimental.svelte';
	import UpNext from '$lib/components/UpNext.svelte';
</script>

<JDGContentContainer overlapWithHeader paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		primaryText="RANCH ELSIE MODERN HOME"
		primaryTextBold
		secondaryText="A marriage of software and architecture"
		imageMeta={imageMetaRegistry.exp.ranch_elsie_option_3}
		overlapWithHeader
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false}>
		<SeriesExperimental />
		<JDGBodyCopy paddingTop="0">
			Nestled in the hills of Coal Creek Canyon, Colorado, this modern mountain home features open
			interior spaces across a split-level plan, with incredible views of the surrounding mountains.
		</JDGBodyCopy>
		<JDGFullWidthContainer>
			<JDGImage
				imageMeta={imageMetaRegistry.exp.ranch_elsie_option_3}
				maxHeight="600px"
				cropToFillContainer={false}
				showBlurInUnfilledSpace={true}
				showCaption={true}
			/>
		</JDGFullWidthContainer>
		<JDGBodyCopy>
			Built to test and validate a new release of FormIt and its various improvements including
			multiple Dynamo SendToFormIt nodes, nested graphs, and more, resulting in easier computational
			design than ever before:
		</JDGBodyCopy>
		<JDGImage
			imageMeta={imageMetaRegistry.exp.ranch_elsie_roof_optioneering}
			maxHeight="600px"
			cropToFillContainer={false}
			showBlurInUnfilledSpace={false}
			showCaption={true}
		/>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
