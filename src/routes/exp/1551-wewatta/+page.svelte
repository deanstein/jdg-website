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
		title="MINDFUL CORPORATE SHOWROOM"
		subtitle="Softening a harsh intersection with a pedestrian-scale showroom"
	>
		<JDGBodyCopy paddingTop="0" textAlign="center">
			<i>
				This is part of a series of experimental 3D models built and tested while working on the
				<a href="https://www.formit.autodesk.com/">Autodesk FormIt</a> software team.
			</i>
		</JDGBodyCopy>
		<JDGBodyCopy>
			The beige corporate headquarters at the corner of 15th and Delgany in Denver, Colorado could
			be transformed into something magical.
			<br /><br />
			Housing the parent company of an outdoor apparel manufacturer, the building could maximize its
			impact at the intersection by replacing the low-rise offices with an eye-catching showroom and
			cafe, complete with a new public space between the showroom and the original office tower.
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
