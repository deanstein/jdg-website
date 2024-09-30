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
		title="MINDFUL SHOWROOM"
		subtitle="Softening a corporate corner with a pedestrian-scale showroom"
	>
		<JDGBodyCopy paddingTop="0" textAlign="center" fontSizeMultiplier={0.75}>
			<i>
				This is part of a series of experimental 3D models
				<br /> built while working on the
				<a href="https://www.formit.autodesk.com/">Autodesk FormIt</a> software team.
			</i>
		</JDGBodyCopy>
		<JDGBodyCopy paddingTop="0">
			A large office building at 15th and Wewatta in Denver, Colorado gets a major overhaul as the
			headquarters of a fictional outdoor apparel company.
			<br /><br />
			The short, 3-level portion of the building is demolished to make room for a striking, glassy showroom
			and coffee shop anchoring the prominent intersection. Between the new showroom and the existing
			office building, a new pedestrian alley allows visitors to cut across the site and experience the
			showroom from another angle.
		</JDGBodyCopy>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.exp.corporate_showroom_corner,
				imageAttributesCollection.exp.corporate_showroom_before,
				imageAttributesCollection.exp.corporate_showroom_elevation
			]}
			maxHeight="600px"
		/>
	</JDGContentBoxFloating>
</JDGContentContainer>
