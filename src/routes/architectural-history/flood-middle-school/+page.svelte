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
			Inside the school, the modernization continued. Ceilings were lowered, new mechanical systems
			were installed, and new carpet and tile covered old wood floors and plaster and lathe walls.
			<br /><br />
			Large and ample windows from the original design were modified as well. Some were covered entirely
			by brick and stone, while others were drastically reduced - the remaining openings obscured by
			metal louvers.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.fms_1964_classroom,
				imageAttributesCollection.hst.fms_2007_classroom
			]}
		/>
		<JDGBodyCopy>
			The gymnasium and auditorium also saw major changes during the 1960s renovation efforts.
			<br /><br />
			Large exposed wood trusses were obscured by lowered ceilings, and expansive windows from the original
			school design were filled in and concealed by new interior walls.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.ehs_1930s_auditorium_interior,
				imageAttributesCollection.hst.fms_2007_auditorium_interior
			]}
		/>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.fms_2013_demo_auditorium_interior_1,
				imageAttributesCollection.hst.fms_2013_demo_auditorium_interior_2,
				imageAttributesCollection.hst.fms_2013_demo_auditorium_interior_3,
				imageAttributesCollection.hst.fms_2013_demo_auditorium_interior_4
			]}
			maxHeight="600px"
		/>
		<JDGBodyCopy>
			1966 and 1967 saw the addition of the iconic circular band room on the south side, freeing up
			much-needed space from the basement where the band room had been stuffed out of necessity for
			years.
			<br /><br />
			Situated against the existing building, the band room was the final addition on the south side
			before the remainder of the south wing was renovated to match the new modern additions.
			<br /><br />
		</JDGBodyCopy>
		<JDGImageTile
			imageAttributes={imageAttributesCollection.hst.fms_1967_band_room_construction}
			showCaption={true}
			showAttribution={true}
			fillContainer={false}
			maxHeight="500px"
		/>
		<JDGBodyCopy>
			On the north side, the 1926-era north wing was reconfigured inside to improve circulation from
			the new connecting wings, and like other parts of the school, its exterior design was updated
			to match the new architecture.
		</JDGBodyCopy>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.fms_1967_north_wing_renovation,
				imageAttributesCollection.hst.fms_2013_north_wing
			]}
			maxHeight="600px"
		/>
		<JDGBodyCopy>
			Final exterior alterations concluded in 1970, with the addition of the "large gym" adjacent to
			the original gymnasium. This left the former Englewood High School completely unrecognizable,
			completing the identity transformation to Flood Junior High School.
		</JDGBodyCopy>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.ehs_1940s_broadway_southeast,
				imageAttributesCollection.hst.fms_2012_broadway_southeast
			]}
			maxHeight="600px"
		/>
		<JDGBodyCopy>
			Declining enrollment in the mid-2000s forced Englewood Schools to take a critical look at its
			aging and underused building stock as part of a strategic district reorganization. Both Flood
			and its sibling school, Sinclair Middle School, had been sitting at less than 50% capacity for
			several years.
			<br /><br />
			Unlike Sinclair, Flood's age, layout, and site configuration posed significant challenges. Its
			wood frame was deteriorating, and its sloping site and ample use of stairs would require significant
			investment to comply with the Americans with Disabilities Act, enacted over a decade after the
			school's last construction efforts.
			<br /><br />
			Ultimately, it was decided that the two middle schools would be combined into a new entity, Englewood
			Middle School, and would reside at the newer Sinclair Middle School property which would be remodeled
			under the district plan.
			<br /><br />
			In 2006, students left the building for good, leaving Flood Middle School abandoned. It took seven
			years for the district find a suitable buyer for the property, during which time the building was
			repeatedly broken into and vandalized.
			<br /><br />
			In 2012, the property was sold to Wood Partners, a Denver-based multifamily developer. Wood Partners
			announced plans to demolish Flood Middle School and replace it with two low-rise residential buildings.
			<br /><br />
			Asbestos abatement commenced in early 2013, and by the end of the summer, the 97-year old building
			was gone. By fall of 2015, a 306-unit luxury apartment complex stood in its place.
			<br /><br />
			Below are some moments from Flood Middle School's final days.
		</JDGBodyCopy>
		<JDGImageCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.fms_2013_demo_brickwork_1,
				imageAttributesCollection.hst.fms_2013_demo_brickwork_2
			]}
			maxHeight="600px"
		/>
		<JDGBodyCopy>
			As a former Flood Middle School student myself, I had hoped for a better ending to such a
			unique building. I've since graduated from architecture school, and have explored the idea of
			salvaging much of the school building and creating a new micro community for Englewood.
			<br /><br />
			For a look at what could have been, see my
			<a href="../architecture-experimental/fms-campus">Campus Village Adaptive Reuse</a> project.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
