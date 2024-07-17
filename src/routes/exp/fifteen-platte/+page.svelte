<script>
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImageCarousel
	} from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title="FIFTEEN PLATTE MODERN OFFICE"
		subtitle="Powerful 3D software generating unique architecture"
	>
		<JDGBodyCopy paddingTop="0" textAlign="center" fontSizeMultiplier={0.75}>
			<i>
				This is part of a series of experimental 3D models
				<br /> built while working on the
				<a href="https://www.formit.autodesk.com/">Autodesk FormIt</a> software team.
			</i>
		</JDGBodyCopy>
		<JDGBodyCopy paddingTop="0">
			A quick design for an empty parking lot in Denver, Colorado using Autodesk FormIt and Autodesk
			Dynamo to generate floor plates and a dynamic column structure.
			<br /><br />
			This model was used to demonstrate FormIt + Dynamo workflows in the early stages of that integration.
		</JDGBodyCopy>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.exp.fifteen_platte_sunset,
				imageAttributesCollection.exp.fifteen_platte_grayscale,
				imageAttributesCollection.exp.fifteen_platte_dynamo
			]}
			maxHeight="600px"
		/>
	</JDGContentBoxFloating>
</JDGContentContainer>
