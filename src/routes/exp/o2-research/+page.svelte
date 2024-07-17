<script>
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImage,
		JDGImageCarousel,
		JDGImageTile
	} from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title="O2 RESEARCH LOBBY STUDY"
		subtitle="Curvacious biophilia for an office lobby"
	>
		<JDGBodyCopy paddingTop="0" textAlign="center" fontSizeMultiplier={0.75}>
			<i>
				This is part of a series of experimental 3D models
				<br /> built while working on the
				<a href="https://www.formit.autodesk.com/">Autodesk FormIt</a> software team.
			</i>
		</JDGBodyCopy>
		<JDGBodyCopy paddingTop="0">
			A lobby study for a fictional molecular biology research company features a split-level plan,
			circular geometries, and plenty of indoor vegetation to create a welcoming entry space for
			their futuristic headquarters.
		</JDGBodyCopy>
		<JDGImage
			imageAttributes={imageAttributesCollection.exp.o2_research}
			maxHeight="600px"
			fillContainer={false}
			showBlurInUnfilledSpace={true}
			showCaption={true}
		/>
		<JDGBodyCopy>
			The ceiling and planters were generated using Dynamo in FormIt, to showcase the new curve and
			surface faceting options which allow customers to choose smooth or coarse faceting on curved
			geometry.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
