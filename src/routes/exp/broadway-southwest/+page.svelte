<script>
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGGridLayout,
		JDGImageCarousel,
		JDGImageTile
	} from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title="DEPARTMENT STORE ADAPTIVE REUSE"
		subtitle="Two reuse schemes for a former mall anchor"
	>
		<JDGBodyCopy paddingTop="0" textAlign="center" fontSizeMultiplier={0.75}>
			<i>
				This is part of a series of experimental 3D models
				<br /> built while working on the
				<a href="https://www.formit.autodesk.com/">Autodesk FormIt</a> software team.
			</i>
		</JDGBodyCopy>
		<JDGBodyCopy paddingTop="0">
			Built in 1985 as a Broadway Southwest department store for <a
				href="https://www.cinderellacityproject.com/history" target="_blank">Cinderella City Mall</a
			> and reused in 1998 as the Englewood Civic Center in Englewood, Colorado, this building is once
			again facing the threat of the wrecking ball.
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.exp.broadway_southwest_before_1}
				showCaption={true}
				fillContainer={false}
			/>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.exp.broadway_southwest_before_2}
				showCaption={true}
				fillContainer={false}
			/>
		</JDGGridLayout>
		<JDGBodyCopy>
			This project examines two distinct reuse concepts: Keeping the existing building plan for a
			retail/office mix, and cutting a passage down its center to convert the upper levels to a
			boutique hotel.
		</JDGBodyCopy>
		<JDGBodyCopy>
			<h3 style="text-align: center;">CONCEPT 1: FOOD HALL + COWORKING</h3>
			<ul>
				<li>Introduce Englewood's first food hall on the ground level</li>
				<li>Install coworking spaces on the upper levels</li>
				<li>Create a terraced promenade for delightful connections and outdoor spaces</li>
			</ul>
		</JDGBodyCopy>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.exp.broadway_southwest_concept_1_promenade,
				imageAttributesCollection.exp.broadway_southwest_concept_1_market,
				imageAttributesCollection.exp.broadway_southwest_concept_1_aerial
			]}
			maxHeight="600px"
		/>
		<JDGBodyCopy>
			<h3 style="text-align: center;">CONCEPT 2: FOOD HALL + HOTEL</h3>
			<ul>
				<li>Introduce Englewood's first food hall on the ground level</li>
				<li>
					Cut a passage down the center of the building, enabling a boutique hotel on the upper
					levels
				</li>
				<li>
					Create a historic experience in the new passage, celebrating the eclectic history of the
					site
				</li>
				<li>Create a terraced promenade for delightful connections and outdoor spaces</li>
			</ul>
		</JDGBodyCopy>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.exp.broadway_southwest_concept_2_promenade,
				imageAttributesCollection.exp.broadway_southwest_concept_2_passage,
				imageAttributesCollection.exp.broadway_southwest_concept_2_aerial
			]}
			maxHeight="600px"
		/>
		<JDGBodyCopy>Check out the project vision book for more detail on both schemes.</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
