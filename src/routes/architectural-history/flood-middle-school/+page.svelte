<script>
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGFullWidthContainer,
		JDGGridLayout,
		JDGImage,
		JDGImageCarousel,
		JDGImageFullWidth,
		JDGImageHybridGridCarousel,
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
		<JDGGridLayout>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.hst.ehs_1920_broadway_northeast}
				showCaption={true}
			/>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.hst.fms_2013_broadway_northeast}
				showCaption={true}
			/>
		</JDGGridLayout>
		<JDGBodyCopy>
			The building underneath was constructed in 1919 as Englewood High School. It was built to
			serve Englewood, Colorado, a rapidly-expanding suburb of Denver. The initial build was a
			single two-level corridor bookended by an auditorium and a gym.
			<br /><br />
			Very quickly, a growing populous resulted in the school's first major addition in 1926, adding
			a north wing to house mechanical and engine shops. A decade later, a similar wing was added through
			the Works Progress Administration, at the south end of the building which expanded classrooms and
			office space once more.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.ehs_1919_plan,
				imageAttributesCollection.hst.fms_2000s_plan_additions
			]}
		/>
		<JDGBodyCopy>
			It was clear by the 1940s that the high school was outgrowing both its building and its land.
			The two new wings reduced the former playing field to a mere courtyard, and the school was in
			dire need of proper athletic facilities to compete with new rivals.
			<br /><br />Englewood Schools selected a new site for the high school a few blocks away, and
			Englewood High School moved out in 1951. The original building was renamed Mary L. Flood
			Junior High School in honor of outgoing principal Mary Louise Flood.
		</JDGBodyCopy>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.ehs_1940s_aerial_northwest,
				imageAttributesCollection.hst.fms_2010s_aerial_northwest
			]}
		/>
		<JDGBodyCopy>
			Flood Junior High operated within its aging, secondhand facilities through the 1950s before
			the district embarked on a multi-year expansion and update effort. Denver architect Wheeler +
			Lewis was selected to oversee the campus overhaul, which included several renovations and
			additions in phases from 1958 to 1970.
			<br /><br />
			Desperate for more space, the school's first expansion since the 1930s was completed in 1963. It
			added a semi-circular library in the courtyard and connected the two newer wings with a connector
			wing, fully enclosing the courtyard.
			<br /><br />
		</JDGBodyCopy>
		<JDGGridLayout maxColumns={2}>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.hst.fms_1960s_courtyard_renovation}
				fillContainer={false}
				showCaption={true}
				showAttribution={true}
			/>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.hst.fms_2012_courtyard_southwest}
				fillContainer={false}
				showCaption={true}
				showAttribution={true}
			/>
		</JDGGridLayout>
		<JDGImageTile
			imageAttributes={imageAttributesCollection.hst.fms_1967_east_side}
			fillContainer={false}
			showCaption={true}
			showAttribution={true}
		/>
		<JDGBodyCopy>
			The new building additions were decidedly modern, leaving the existing parts of the school
			looking dated by comparison.
			<br /><br />
			1964 and 1965 saw the beginnings of the "modernist" aesthetic begin to take over the rest of the
			school: Historic building details were covered with monolithic brick facades and windows were either
			removed or covered in metal louvers, aligning with the district's architectural standards at the
			time.
			<br /><br />
			Around this time, the main entrance to the school moved from west-facing Broadway to the southeast
			corner at Lincoln and Kenyon, where the existing south wing and new east wing came together.
		</JDGBodyCopy>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.ehs_1936_southeast_wing,
				imageAttributesCollection.hst.fms_1968_southeast_corner_entrance
			]}
			maxHeight="600px"
		/>
		<JDGBodyCopy>
			The west side of the school in particular, previously serving as Englewood High School's main
			entrance, was converted to a mere back entrance for Flood Junior High.
			<br /><br />
			Once gracing Broadway with grand roman columns, cornices, and engraved details, the updated east
			entrance was heavily minimized through its ascetic, simplistic design.
		</JDGBodyCopy>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.ehs_1950s_broadway_entrance,
				imageAttributesCollection.hst.fms_1960s_broadway_entrance_renovation,
				imageAttributesCollection.hst.fms_1960s_broadway_entrance
			]}
			maxHeight="600px"
		/>
		<JDGBodyCopy>
			Inside, ceilings were lowered, mechanical systems installed, carpet and tile covered up wood
			floors, and new drywall covered plaster and lathe walls. The original gymnasium and auditorium
			also saw major changes. The 1960s renovations saw the exposed wood trusses covered by lowered
			ceilings, and their large windows filled in and concealed with new interior walls.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
