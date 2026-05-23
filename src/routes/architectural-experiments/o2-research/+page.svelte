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
		primaryText="O2 RESEARCH LOBBY STUDY"
		primaryTextBold
		secondaryText="A spacious and curvacious office lobby"
		imageMeta={imageMetaRegistry.exp.o2_research}
		overlapWithHeader
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false}>
		<SeriesExperimental />
		<JDGBodyCopy paddingTop="0">
			A lobby study for a fictional molecular biology research company features a split-level plan,
			circular geometries, and plenty of indoor vegetation to create a welcoming entry space for
			their futuristic headquarters.
		</JDGBodyCopy>
		<JDGFullWidthContainer>
			<JDGImage
				imageMeta={imageMetaRegistry.exp.o2_research}
				maxHeight="600px"
				cropToFillContainer={false}
				showBlurInUnfilledSpace={true}
				showCaption={true}
			/>
		</JDGFullWidthContainer>
		<JDGBodyCopy>
			The ceiling and planters were generated using <a
				href="https://formit.autodesk.com/redirect/formit-dynamo"
				target="_blank">Dynamo in FormIt</a
			>, to showcase the new curve and surface faceting options which allow customers to choose
			smooth or coarse faceting on curved geometry.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
