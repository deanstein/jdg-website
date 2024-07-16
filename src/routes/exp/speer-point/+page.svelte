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
		title="SPEER POINT ADAPTIVE REUSE"
		subtitle="Enhancing a quirky, under-utilized site"
	>
		<JDGBodyCopy paddingTop="0" textAlign="center" fontSizeMultiplier={0.75}>
			<i>
				This is part of a series of experimental 3D models
				<br /> built while working on the
				<a href="https://www.formit.autodesk.com/">Autodesk FormIt</a> software team.
			</i>
		</JDGBodyCopy>
		<JDGBodyCopy paddingTop="0">
			A small building in Denver gets transformed into an artist-focused mixed use space in this
			adaptive reuse scheme.
			<br /><br />
			Featuring studios, a cafe, a restaurant, and outdoor event space, the building would be active
			at many hours during the day and would provide eyes on the street and a convenient place to recharge
			for the nearby pedestrian trail.
		</JDGBodyCopy>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.exp.speer_point_after,
				imageAttributesCollection.exp.speer_point_before
			]}
			maxHeight="600px"
		/>
	</JDGContentBoxFloating>
</JDGContentContainer>
