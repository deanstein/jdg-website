<script>
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImage,
		JDGImageCarousel
	} from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title="RANCH ELSIE MODERN HOME"
		subtitle="A marriage of software and design, site and architecture"
	>
		<JDGBodyCopy paddingTop="0" textAlign="center" fontSizeMultiplier={0.75}>
			<i>
				This is part of a series of experimental 3D models
				<br /> built while working on the
				<a href="https://www.formit.autodesk.com/">Autodesk FormIt</a> software team.
			</i>
		</JDGBodyCopy>
		<JDGBodyCopy paddingTop="0">
			Nestled in the hills of Coal Creek Canyon, Colorado, this modern mountain home features open
			interior spaces across a split-level plan, with incredible views of the surrounding mountains.
		</JDGBodyCopy>
		<JDGImage
			imageAttributes={imageAttributesCollection.exp.ranch_elsie_option_3}
			maxHeight="600px"
			cropToFillContainer={false}
			showBlurInUnfilledSpace={true}
			showCaption={true}
		/>
		<JDGBodyCopy>
			Built to test and validate a new release of FormIt and its various improvements including
			multiple Dynamo SendToFormIt nodes, nested graphs, and more, resulting in easier computational
			design than ever before:
		</JDGBodyCopy>
		<JDGImage
			imageAttributes={imageAttributesCollection.exp.ranch_elsie_roof_optioneering}
			maxHeight="600px"
			cropToFillContainer={false}
			showBlurInUnfilledSpace={false}
			showCaption={true}
		/>
	</JDGContentBoxFloating>
</JDGContentContainer>
