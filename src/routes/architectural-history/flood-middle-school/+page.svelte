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
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title="FLOOD MIDDLE SCHOOL"
		subtitle="Historic details hidden by a mid-century coverup"
	>
		<JDGImageFullWidth
			imageAttributes={imageAttributesCollection.hst.fms_2012_broadway_northeast}
		/>
		<JDGBodyCopy>
			Mary Louise Flood Middle School loomed over the intersection of Broadway and Kenyon in
			Englewood, Colorado. It appeared mysterious and hulking, its monolithic brick walls pierced
			only occasionally by louvered windows.
			<br /><br />
			Most passersby were unaware that school's brutal street presence concealed a beautiful, highly-detailed
			building underneath: the original Englewood High School. The ornate building was unceremoniously
			covered up in a district-wide school renovation effort in the 1960s, after the high school moved
			to a new campus and Flood Junior High School called the original building home.
			<br /><br />
			Declining enrollment led to a district reorganization, and Flood Middle School was shuttered in
			2007 and abandoned until 2012 when Englewood Schools sold the land to a multifamily residential
			developer. The entire complex was demolished in the summer of 2013. Its demolition peeled back
			layers of remodels, and provided a unique glimpse back in time.
		</JDGBodyCopy>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.fms_2013_broadway_northeast,
				imageAttributesCollection.hst.ehs_1920_broadway_northeast
			]}
			maxHeight="600px"
		/>
		<JDGBodyCopy>
			The building underneath was constructed in 1919 as Englewood High School. It was built to
			serve Englewood, Colorado, a rapidly-expanding suburb of Denver. The initial build was a
			single two-level corridor bookended by an auditorium and a gym.
			<br /><br />
			Very quickly, a growing populous resulted in the school's first major addition in 1926, adding
			a north wing to house mechanical and engine shops. A decade later, a similar wing was added through
			the Works Progress Administration, at the south end of the building which expanded classrooms and
			office space once more.
			<br /><br />
			It was clear by the 1940s that the high school was outgrowing its land. The two new wings reduced
			the former playing field to a mere courtyard, and the school was in dire need of proper athletic
			facilities to compete with new rivals. Englewood Schools selected a new site a few blocks away,
			and construction on the new Englewood High School campus commenced in 1950. The high school moved
			out in 1951, and the original building was renamed Mary L. Flood Junior High School in honor of
			the outgoing Englewood High School principal Mary Louise Flood.
		</JDGBodyCopy>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.ehs_1919_plan,
				imageAttributesCollection.hst.fms_2000s_plan_additions
			]}
			showBlurInUnfilledSpace={false}
			maxHeight="600px"
		/>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.fms_2012_aerial_outline,
				imageAttributesCollection.hst.ehs_1940s_aerial_northwest,
				imageAttributesCollection.hst.fms_2010s_aerial_northwest
			]}
			maxHeight="600px"
		/>
		<JDGBodyCopy>
			Flood Junior High operated with its secondhand facilities in their existing state for nearly a
			decade before the district embarked on a multi-year expansion and renovation effort on the
			aging buildings. Englewood Schools hired Denver architect Wheeler + Lewis to undertake the
			campus update, which included several renovations and additions in phases from 1958 to 1970.
			<br /><br />
			In order to provide more academic space for the growing student population, a semi-circular library
			was added in 1961 at the back of the original wing, followed by a new connector wing in 1963 that
			joined the two ends of the "C" shaped complex into a donut, forming a courtyard in the middle.
		</JDGBodyCopy>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.fms_1960s_renovation_courtyard,
				imageAttributesCollection.hst.fms_2012_courtyard_southwest
			]}
			maxHeight="600px"
		/>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.ehs_1936_southeast_wing,
				imageAttributesCollection.hst.fms_2012_courtyard_southwest
			]}
			maxHeight="600px"
		/>
		<JDGBodyCopy>
			The building additions were decidedly modern, and 1964 and 1965 saw the beginnings of the
			"modernist" aesthetic begin to take over the rest of the existing buildings. Ornate details,
			windows, and columnades and were removed or covered with smooth beige brick, aligning with the
			district's architectural standards at the time.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
