<script>
	import imageAttributesCollection from '../../image-attributes-collection';
	import { sharedStyles } from '$lib/shared-strings';

	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGFullWidthContainer,
		JDGImageCarousel,
		JDGImageFullWidth
	} from 'jdg-ui-svelte';
	import UpNext from '../../../components/UpNext.svelte';
</script>

<JDGContentContainer overlapWithHeader paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		primaryText="ABANDONED SCHOOL REUSE"
		primaryTextBold
		secondaryText="Resurrecting a post-war relic for a unique public space"
		imageAttributes={imageAttributesCollection.arch.random_school_terrace}
		overlapWithHeader
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false}>
		<JDGFullWidthContainer>
			<JDGBodyCopy paddingTop="0" textAlign="center" fontSizeMultiplier={0.75} textWrap="balance">
				<i>
					This project was part of my thesis for my
					<br />Master of Architecture degree from Kansas State University.
				</i>
			</JDGBodyCopy>

			<JDGImageCarousel
				imageAttributeObjects={[
					imageAttributesCollection.arch.random_school_terrace,
					imageAttributesCollection.arch.random_school_canopy,
					imageAttributesCollection.arch.random_school_play,
					imageAttributesCollection.arch.random_school_aerial,
					imageAttributesCollection.arch.random_school_before_exterior,
					imageAttributesCollection.arch.random_school_before_walkway
				]}
				maxHeight="600px"
			/>
		</JDGFullWidthContainer>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
