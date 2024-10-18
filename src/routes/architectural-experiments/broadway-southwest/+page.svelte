<script>
	import imageAttributesCollection from '../../image-attributes-collection';
	import { sharedStyles } from '$lib/shared-strings';

	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGFullWidthContainer,
		JDGGridLayout,
		JDGImageCarousel,
		JDGImageFullWidth,
		JDGImageTile
	} from 'jdg-ui-svelte';
	import SeriesExperimental from '../../../components/SeriesExperimental.svelte';
	import UpNext from '../../../components/UpNext.svelte';
</script>

<JDGContentContainer overlapWithHeader paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		primaryText="DEPARTMENT STORE ADAPTIVE REUSE"
		primaryTextBold
		secondaryText="Two reuse schemes for a former mall anchor"
		imageAttributes={imageAttributesCollection.exp.broadway_southwest_concept_2_promenade}
		overlapWithHeader
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false}>
		<SeriesExperimental />
		<JDGBodyCopy paddingTop="0">
			Built in 1985 as a Broadway Southwest department store for <a
				href="https://www.cinderellacityproject.com/history"
				target="_blank">Cinderella City Mall</a
			> and reused in 1998 as the Englewood Civic Center in Englewood, Colorado, this building is once
			again facing the threat of the wrecking ball.
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.exp.broadway_southwest_before_1}
				showCaption={true}
				cropToFillContainer={false}
			/>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.exp.broadway_southwest_before_2}
				showCaption={true}
				cropToFillContainer={false}
			/>
		</JDGGridLayout>
		<JDGBodyCopy>
			This project examines two distinct reuse concepts: Keeping the existing building plan for a
			retail/office mix, and cutting a passage down its center to convert the upper levels to a
			boutique hotel.
		</JDGBodyCopy>
		<JDGBodyCopy paddingTop="0" paddingBottom="0">
			<h3 style="text-align: center;">CONCEPT 1: FOOD HALL + COWORKING</h3>
			<ul>
				<li>Introduce Englewood's first food hall on the ground level</li>
				<li>Install coworking spaces on the upper levels</li>
				<li>Create a terraced promenade for delightful connections and outdoor spaces</li>
			</ul>
		</JDGBodyCopy>
		<JDGFullWidthContainer>
			<JDGImageCarousel
				imageAttributeObjects={[
					imageAttributesCollection.exp.broadway_southwest_concept_1_promenade,
					imageAttributesCollection.exp.broadway_southwest_concept_1_market,
					imageAttributesCollection.exp.broadway_southwest_concept_1_aerial
				]}
				maxHeight="600px"
			/>
		</JDGFullWidthContainer>
		<JDGBodyCopy paddingBottom="0">
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
		<JDGFullWidthContainer>
			<JDGImageCarousel
				imageAttributeObjects={[
					imageAttributesCollection.exp.broadway_southwest_concept_2_promenade,
					imageAttributesCollection.exp.broadway_southwest_concept_2_passage,
					imageAttributesCollection.exp.broadway_southwest_concept_2_aerial
				]}
				maxHeight="600px"
			/>
		</JDGFullWidthContainer>
		<JDGBodyCopy
			>Check out the <a href="https://1drv.ms/b/s!Aqq9aYoi8d58nKQl5jqNYxcy4ddt9Q?e=ERTi2D"
				>project vision book</a
			> for more detail on both schemes.</JDGBodyCopy
		>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
