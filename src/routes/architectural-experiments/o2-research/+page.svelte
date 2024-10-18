<script>
	import { sharedStyles } from '$lib/shared-strings';
	import imageAttributesCollection from '../../image-attributes-collection';

	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGFullWidthContainer,
		JDGImage,
		JDGImageFullWidth
	} from 'jdg-ui-svelte';
	import UpNext from '../../../components/UpNext.svelte';
	import SeriesExperimental from '../../../components/SeriesExperimental.svelte';
</script>

<JDGContentContainer overlapWithHeader paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		primaryText="O2 RESEARCH LOBBY STUDY"
		primaryTextBold
		secondaryText="A spacious and curvacious office lobby"
		imageAttributes={imageAttributesCollection.exp.o2_research}
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
				imageAttributes={imageAttributesCollection.exp.o2_research}
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
