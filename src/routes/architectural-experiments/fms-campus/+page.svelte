<script>
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGGridLayout,
		JDGImageCarousel,
		JDGImageFullWidth,
		JDGImageTile
	} from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
	import { pageMeta } from '$lib/shared-strings';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title={pageMeta.exp.fms_campus.title.toUpperCase()}
		subtitle={pageMeta.exp.fms_campus.description}
	>
		<JDGBodyCopy paddingTop="0" textAlign="center" fontSizeMultiplier={0.75}>
			<i>
				This project examines an alternate ending for an old building with a unique history that was
				demolished in 2013.
				<br />
				For more on the original building, see my historical narrative on
				<a href="/architectural-history/flood-middle-school">Flood Middle School</a>.
				<br /><br />
				This is part of a series of experimental 3D models
				<br /> built while working on the
				<a href="https://www.formit.autodesk.com/">Autodesk FormIt</a> software team.
			</i>
		</JDGBodyCopy>
		<JDGImageFullWidth imageAttributes={imageAttributesCollection.exp.fms_campus_lawn} />
		<JDGBodyCopy>
			The Campus Village concept is an exploration of alternate uses for the former <a
				href="/architectural-history/flood-middle-school">Flood Middle School</a
			>
			property in Englewood, Colorado.
			<br /><br />
			Sited at a prominent intersection, this historic building with a unique layout and history offers
			a rare chance to create a micro mixed-use development with historic charm.
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.exp.fms_campus_before_aerial}
				showCaption={true}
				cropToFillContainer={false}
			/>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.exp.fms_campus_massing}
				showCaption={true}
				cropToFillContainer={false}
			/>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.exp.fms_campus_aerial}
				showCaption={true}
				cropToFillContainer={false}
			/>
		</JDGGridLayout>
		<JDGBodyCopy>
			This concept includes installing a series walk-up townhomes in former classroom space,
			complete with original chalkboards and wood floors from the oldest wings of the building. The
			townhomes would front an amenities plaza on the site of the original school lawn, and would be
			anchored at the rear to the original school hallways, which would provide an interior common
			circulation system.
		</JDGBodyCopy>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.exp.fms_campus_lawn,
				imageAttributesCollection.exp.fms_campus_before_1,
				imageAttributesCollection.exp.fms_campus_kenyon_corner,
				imageAttributesCollection.exp.fms_campus_before_3
			]}
			maxHeight="600px"
		/>
		<JDGBodyCopy>
			Other spaces like the 2-story auditorium and gym on either end would be transformed into
			restaurant incubator space, as well as worksharing and office space. The original timber
			structure from both would be exposed to add character to the spaces.
		</JDGBodyCopy>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.exp.fms_campus_plaza,
				imageAttributesCollection.exp.fms_campus_before_2
			]}
			maxHeight="600px"
		/>
		<JDGBodyCopy>
			Newer construction at the back of the school could support additional floors, and would become
			a boutique hotel in this concept. The hotel would drive foot traffic around the project's
			perimeter, including the new food truck-lined paseo that links the front and back of the
			property.
		</JDGBodyCopy>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.exp.fms_campus_paseo,
				imageAttributesCollection.exp.fms_campus_before_4
			]}
			maxHeight="600px"
		/>
	</JDGContentBoxFloating>
</JDGContentContainer>
