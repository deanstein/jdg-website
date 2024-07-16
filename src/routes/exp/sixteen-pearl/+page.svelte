<script>
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImageCarousel,
		JDGImageTile
	} from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title="16 PEARL ADAPTIVE REUSE"
		subtitle="Striking new townhomes emerge from a bland apartment block"
	>
		<JDGBodyCopy paddingTop="0" textAlign="center" fontSizeMultiplier={0.75}>
			<i>
				This is part of a series of experimental 3D models
				<br /> built while working on the
				<a href="https://www.formit.autodesk.com/">Autodesk FormIt</a> software team.
			</i>
		</JDGBodyCopy>
		<JDGBodyCopy paddingTop="0">
			This nondescript apartment block at the intersection of 16th Ave and Pearl St in Denver was
			demolished in 2016. 
            <br><br>
            Prior to demolition, I studied reuse options for the building, including
			this scheme which converts each stack of apartments into a 3-story walk-up townhome, complete
			with new exterior patio and deck spaces. The original mansard roof and exterior brick are both
			retained and painted, but trimmed where necessary.
		</JDGBodyCopy>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.exp.sixteen_pearl_corner,
				imageAttributesCollection.exp.sixteen_pearl_before,
				imageAttributesCollection.exp.sixteen_pearl_terrace
			]}
			maxHeight="600px"
		/>
		<JDGBodyCopy>
			Inside, the townhomes feature open, airy spaces connected by a new modern stair tower. Channel
			glass light wells bring natural glow to the townhomes and to the original common hallway on
			the first floor, which is retained.
		</JDGBodyCopy>
		<JDGImageTile
			imageAttributes={imageAttributesCollection.exp.sixteen_pearl_interior}
			fillContainer={false}
			maxHeight="50vh"
			showCaption={true}
		/>
	</JDGContentBoxFloating>
</JDGContentContainer>
