<script>
	import { pageMeta, sharedStyles } from '$lib/shared-strings';
	import imageAttributesCollection from '../../image-attributes-collection';

	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGFullWidthContainer,
		JDGGridLayout,
		JDGImageCarousel,
		JDGImageFullWidth,
		JDGImageHybridGridCarousel,
		JDGImageTile,
		JDGJumpTo
	} from 'jdg-ui-svelte';
	import UpNext from '../../../components/UpNext.svelte';
</script>

<JDGContentContainer overlapWithHeader={true} paddingTop="0" paddingBottom="0" gap="0">
	<JDGImageFullWidth
		imageAttributes={imageAttributesCollection.hst.fms_2000_broadway_northeast_noname}
		primaryText={pageMeta.hst.flood_middle_school.title.toUpperCase()}
		primaryTextBold
		secondaryText={pageMeta.hst.flood_middle_school.description}
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
		overlapWithHeader
	/>
	<JDGContentBoxFloating animateWhenVisible={false} includeInJumpTo={false}>
		<JDGBodyCopy paddingTop="0">
			For over a century, the building ultimately known as Mary Louise Flood Middle School loomed
			over the intersection of Broadway and Kenyon in Englewood, Colorado. In its later years, it
			appeared monolithic and hulking, with large swaths of brick pierced only occasionally by
			louvered windows.
			<br /><br />
			Most passersby were unaware that the school's brutal street presence concealed a beautiful, highly-detailed
			building underneath: the original <b>Englewood High School</b>. The ornate building was
			unceremoniously covered up in a district-wide renovation effort in the 1960s, which saw the
			high school moving out of the building and a new middle school calling the original building
			home.
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
			Declining enrollment in the early 2000s led to a district reorganization, and Flood Middle
			School was shuttered in 2007 and abandoned until 2012 when Englewood Schools sold the land to
			a multifamily residential developer. The entire complex was demolished in the summer of 2013.
			Its demolition peeled back layers of remodels, and provided a unique glimpse back in time.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
<JDGContentContainer>
	<JDGJumpTo />
	<JDGContentBoxFloating title="EARLY HISTORY">
		<JDGBodyCopy paddingTop="0">
			The building that started it all was constructed in 1919 as <b>Englewood High School</b>.
			Built to serve Englewood, Colorado, a rapidly-expanding suburb of Denver, the initial
			structure was simple: a two-level corridor bookended by an auditorium and a gym.
			<br /><br />
			Very quickly, a growing populous resulted in the school's first major addition in 1926, which added
			a north wing to house mechanical and engine shops. A decade later in 1936, a similar wing was added
			on the south side which expanded classrooms and office space.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.ehs_1919_plan,
				imageAttributesCollection.hst.fms_2000s_plan_additions
			]}
			cropToFillContainer={false}
			fullWidthCarouselOnMobile={false}
		/>
		<JDGBodyCopy>
			It was clear by the 1940s that the high school was outgrowing both its building and its land.
			The two previous additions reduced the original playing field to a small courtyard, and the
			high school school was in dire need of proper athletic facilities to compete with new rivals.
			<br /><br />Englewood Schools selected a new site for the school a few blocks away, and
			Englewood High School moved to the new facilities in 1951. The former high school building was
			renamed Mary L. Flood Junior High School in honor of outgoing principal Mary Louise Flood.
		</JDGBodyCopy>
		<JDGFullWidthContainer>
			<JDGImageCarousel
				imageAttributeObjects={[
					imageAttributesCollection.hst.ehs_1940s_aerial_northwest,
					imageAttributesCollection.hst.fms_2010s_aerial_northwest
				]}
			/>
		</JDGFullWidthContainer>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="MAJOR OVERHAUL">
		<JDGBodyCopy paddingTop="0">
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
		<JDGGridLayout>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.hst.fms_1960s_courtyard_renovation}
				cropToFillContainer={false}
				showCaption={true}
				showAttribution={true}
			/>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.hst.fms_2012_courtyard_southwest}
				cropToFillContainer={false}
				showCaption={true}
				showAttribution={true}
			/>
		</JDGGridLayout>
		<JDGImageTile
			imageAttributes={imageAttributesCollection.hst.fms_1967_east_side}
			cropToFillContainer={false}
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
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.ehs_1936_southeast_wing,
				imageAttributesCollection.hst.fms_1968_southeast_corner_entrance
			]}
		/>
		<JDGBodyCopy>
			The west side of the school in particular, previously serving as Englewood High School's main
			entrance, was converted to a mere back entrance for Flood Junior High.
			<br /><br />
			Once gracing Broadway with grand roman columns, cornices, and engraved details, the updated east
			entrance was heavily minimized through its ascetic, simplistic design.
		</JDGBodyCopy>
		<JDGFullWidthContainer>
			<JDGImageCarousel
				imageAttributeObjects={[
					imageAttributesCollection.hst.ehs_1950s_broadway_entrance,
					imageAttributesCollection.hst.fms_1960s_broadway_entrance_renovation,
					imageAttributesCollection.hst.fms_1960s_broadway_entrance
				]}
			/>
		</JDGFullWidthContainer>
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
		<JDGFullWidthContainer>
			<JDGImageCarousel
				imageAttributeObjects={[
					imageAttributesCollection.hst.fms_2013_demo_auditorium_interior_1,
					imageAttributesCollection.hst.fms_2013_demo_auditorium_interior_2,
					imageAttributesCollection.hst.fms_2013_demo_auditorium_interior_3,
					imageAttributesCollection.hst.fms_2013_demo_auditorium_interior_4
				]}
			/>
		</JDGFullWidthContainer>
		<JDGBodyCopy paddingBottom="0">
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
			cropToFillContainer={false}
			maxHeight="500px"
		/>
		<JDGBodyCopy paddingBottom>
			On the north side, the 1926-era north wing was reconfigured inside to improve circulation from
			the new connecting wings, and like other parts of the school, its exterior design was updated
			to match the new architecture.
		</JDGBodyCopy>
		<JDGFullWidthContainer>
			<JDGImageCarousel
				imageAttributeObjects={[
					imageAttributesCollection.hst.fms_1967_north_wing_renovation,
					imageAttributesCollection.hst.fms_2013_north_wing
				]}
			/>
		</JDGFullWidthContainer>
		<JDGBodyCopy>
			Final exterior alterations concluded in 1970, with the addition of the "large gym" adjacent to
			the original gymnasium. This left the former Englewood High School completely unrecognizable,
			completing the identity transformation to Flood Junior High School.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.ehs_1940s_broadway_southeast,
				imageAttributesCollection.hst.fms_2012_broadway_southeast
			]}
		/>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="SCHOOL TOUR">
		<JDGBodyCopy paddingTop="0" paddingBottom="0">
			Flood Middle School's final configuration comprised 7 major additions/renovations over the
			course of 51 years, creating a unique donut-shaped layout with each wing representing a
			different period of architectural history.
		</JDGBodyCopy>
		<JDGImageTile
			imageAttributes={imageAttributesCollection.hst.fms_2000s_plan_additions}
			showCaption
			cropToFillContainer={false}
			maxHeight="500px"
		/>
		<JDGBodyCopy paddingBottom="0">
			<h3 class="with-dates">SOUTH + EAST WINGS</h3>
			<h4>(1936, 1963, 1967)</h4>
			Although built at very different times, the south and east wings joined forces to create the school's
			final main entrance from 1963 to 2007 at the corner of Lincoln and Kenyon.
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.hst.ehs_1936_southeast_wing}
				showCaption
				cropToFillContainer={false}
			/>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.hst.fms_1968_southeast_corner_entrance}
				showCaption
				cropToFillContainer={false}
			/>
		</JDGGridLayout>
		<JDGBodyCopy paddingBottom="0">
			The south wing was built in 1936 as a subsequent expansion of the school, extending the
			original 1919 layout for the second time. It featured an ornate facade until it was modernized
			in 1963 when the east end was buit.
			<br /><br />
			Used exclusively for classrooms since its creation in 1936, the south wing was renovated in 1963
			to support a new main office, attendance office, and health rooms adjacent to the new stairwell
			and entrance. The basement was shared between the band room and the cafeteria, until another renovation
			in 1967 added the new circular band room on the south side.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.fms_2012_southeast_corner_entrance,
				imageAttributesCollection.hst.fms_2007_band_room_interior_1,
				imageAttributesCollection.hst.fms_2007_southeast_stair_interior_1,
				imageAttributesCollection.hst.fms_2007_south_wing_l1,
				imageAttributesCollection.hst.fms_2007_attendance_office,
				imageAttributesCollection.hst.fms_2013_south_wing_basement_1
			]}
		/>
		<JDGBodyCopy paddingBottom="0">
			The east wing, on the other hand, was purpose-built for science rooms on the main level and
			general classrooms above. The east wing was the only part of the complex to not have a
			basement level; instead, this wing sat atop a series of concrete columns which lift the
			building and provide access to the courtyard. This wing was also unique in that it had an
			off-center hallway with windows providing views into the courtyard.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.fms_2012_east_wing_1,
				imageAttributesCollection.hst.fms_2007_east_wing_l1,
				imageAttributesCollection.hst.fms_2012_courtyard_southwest_2
			]}
		/>
		<JDGBodyCopy paddingBottom="0">
			<h3 class="with-dates">NORTH + WEST WINGS</h3>
			<h4>(1919, 1926, 1963, 1970, 2000)</h4>
			The north and west wings included some of Flood's newest and oldest sections, various recreational
			spaces, as well as some of its most unique and transitional spaces between renovations of different
			decades.
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.hst.fms_1967_north_wing_renovation}
				showCaption
				cropToFillContainer={true}
			/>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.hst.fms_2000_broadway_northeast}
				showCaption
				cropToFillContainer={true}
			/>
		</JDGGridLayout>
		<JDGBodyCopy paddingBottom="0">
			The north wing was added to Englewood High School in 1926 as its first expansion from the
			original 1919 layout. It was constructed specifically to house engine and mechanical shops in
			the basement, with general-purpose classrooms above.
			<br /><br />
			A reconfiguration during the 1960s resulted in upper-level classroom hallways being pushed from
			the center to the north exterior wall, creating a strange jog in the layout. Some parts of the
			north wing also featured exposed hardwood floors from 1926, while other areas covered the hardwood
			with carpet.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.fms_2013_north_wing,
				imageAttributesCollection.hst.fms_2007_north_wing_l2,
				imageAttributesCollection.hst.fms_2007_northwest_connector_l2
			]}
		/>
		<JDGBodyCopy paddingBottom="0">
			The north wing was also the recipient of a major fitniss facilities effort in 1970, which saw
			the addition of the "large gym" and a fitness center below. These new facilities also
			connected to the existing small gym and basement, creating liminal hallways and maze-like
			spaces.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.fms_2007_fitness_room,
				imageAttributesCollection.hst.fms_2007_locker_hall
			]}
		/>
		<JDGBodyCopy paddingBottom="0">
			The west wing, facing Broadway, was the original Englewood High School structure built in 1919
			and featured the school's initial main entrance as well as its gymnasium and auditorium.
			<br /><br />
			The Broadway main entrance, covered in a 1963 school-wide refacing, could be seen briefly during
			demolition as the original walls were revealed.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.ehs_1950s_broadway_entrance,
				imageAttributesCollection.hst.fms_2013_demo_detail_cornice,
				imageAttributesCollection.hst.fms_1960s_broadway_entrance
			]}
		/>
		<JDGBodyCopy paddingBottom="0">
			In its years as a middle school, the west wing featured classroom and computer space as well
			as the school's semi-circular library which was added in 1963. As Englewood High School, this
			wing reserved space for the main office, which was moved when the main entrance moved and the
			school became a junior high.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.fms_2007_library,
				imageAttributesCollection.hst.fms_2007_library_mlf
			]}
		/>
		<JDGBodyCopy paddingBottom="0">
			Of course, the original school included assembly spaces like the small gym and auditorium.
			These were both built as part of the initial 1919 build-out, and both saw significant changes
			during subsequent renovations.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.ehs_1930s_auditorium_interior,
				imageAttributesCollection.hst.fms_2007_auditorium_interior
			]}
		/>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.ehs_1948_small_gym,
				imageAttributesCollection.hst.fms_1970_small_gym
			]}
		/>
		<JDGBodyCopy paddingBottom="0">
			The school's original basement also resided below the gymnasium, complete with a vault for
			student records and a maze-like storage area with a short ceiling that stepped up and down in
			various places due to foundation height changes.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.fms_2007_basement_2,
				imageAttributesCollection.hst.fms_2007_vault_composite
			]}
		/>
		<JDGBodyCopy paddingBottom="0">
			<h3>SCHOOL IDENTITY</h3>
			Various generations of school identity could be found around the building, reflecting the school's
			changing brand through the decades. Two photographed here were embedded in the floors, while the
			third was found in the basement storage area during abandonment.
		</JDGBodyCopy>
		<JDGImageHybridGridCarousel
			imageAttributeObjects={[
				imageAttributesCollection.hst.fms_identity_1,
				imageAttributesCollection.hst.fms_identity_2,
				imageAttributesCollection.hst.fms_identity_3
			]}
		/>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="THE END">
		<JDGBodyCopy paddingTop="0">
			A persistent enrollment decline in the mid-2000s forced Englewood Schools to take a critical
			look at its aging and underused building stock as part of a strategic district reorganization.
			Both Flood and its sibling school, Sinclair Middle School, had been sitting at less than 50%
			capacity for several years.
			<br /><br />
			Unlike Sinclair, Flood's age, layout, and site configuration posed major challenges. Its wood frame
			was deteriorating, and its ample use of stairs and lack of elevators would require significant
			investment to comply with the Americans with Disabilities Act, which was enacted over a decade
			after the school's last major renovation.
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.hst.fms_2012_southeast_corner_entrance}
				showCaption
				cropToFillContainer={true}
			/>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.hst.fms_2013_broadway_northeast}
				showCaption
				cropToFillContainer={true}
			/>
		</JDGGridLayout>
		<JDGBodyCopy paddingBottom="0">
			Ultimately, it was decided that the two middle schools would be combined into a new entity:
			Englewood Middle School. EMS would use the newer Sinclair Middle School building which would
			be remodeled under the district plan.
			<br /><br />
			In the summer of 2006, Flood Middle School's final class left the building, rendering the school
			abandoned while the districted sought a buyer for the property.
			<br /><br />
			As a Flood Middle School panther myself, I was fortunate to be part of a historic preservation
			group at the time, and we were able to acess Flood in 2007 to photograph the property and look
			through its basement vault:
		</JDGBodyCopy>
		<JDGImageTile
			imageAttributes={imageAttributesCollection.hst.fms_2007_vault_composite}
			showCaption
			cropToFillContainer={false}
		/>
		<JDGBodyCopy paddingBottom="0">
			It took five years for the district find a suitable buyer for the property, during which time
			the building was repeatedly broken into and vandalized:
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.hst.fms_2012_entrance_interior}
				showCaption
				cropToFillContainer={false}
			/>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.hst.fms_2012_east_wing_l1}
				showCaption
				cropToFillContainer={false}
			/>
		</JDGGridLayout>
		<JDGBodyCopy>
			In 2012, the property was sold to Wood Partners, a Denver-based multifamily developer. Wood
			Partners announced plans to demolish Flood Middle School and replace it with two low-rise
			residential buildings.
			<br /><br />
			Asbestos abatement commenced in early 2013, and by the end of the summer, the 94-year old building
			was gone. By fall of 2015, a 306-unit luxury apartment complex stood in its place.
		</JDGBodyCopy>
		<JDGImageTile
			imageAttributes={imageAttributesCollection.hst.fms_2013_demo_lincoln}
			showCaption
			showAttribution
			cropToFillContainer={false}
		/>
		<JDGBodyCopy>
			During demolition in 2013, I visited the school to capture its history being unearthed by the
			destruction. Here are several fascinating moments from Flood Middle School's final days:
		</JDGBodyCopy>
		<JDGFullWidthContainer>
			<JDGImageCarousel
				imageAttributeObjects={[
					imageAttributesCollection.hst.fms_2013_demo_hallway_3,
					imageAttributesCollection.hst.fms_2013_demo_wood_floors,
					imageAttributesCollection.hst.fms_2013_demo_library_1,
					imageAttributesCollection.hst.fms_2013_demo_hallway_lockers_1,
					imageAttributesCollection.hst.fms_2013_demo_hallway_2,
					imageAttributesCollection.hst.fms_2013_demo_basement_1,
					imageAttributesCollection.hst.fms_2013_demo_classroom_1,
					imageAttributesCollection.hst.fms_2013_demo_ceiling_fixture_2,
					imageAttributesCollection.hst.fms_2013_demo_large_gym,
					imageAttributesCollection.hst.fms_2013_demo_window_sizes,
					imageAttributesCollection.hst.fms_2013_demo_chimney,
					imageAttributesCollection.hst.fms_2013_demo_basement_2
				]}
			/>
		</JDGFullWidthContainer>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="LAYERS OF TIME">
		<JDGBodyCopy paddingTop="0">
			During demolition, decades of renovations and facade modifications became apparent as
			different brick types and multiple layers of brick were exposed.
			<br /><br />
			These photographs show places where the original Englewood High School peeks through the surface
			of the Flood Middle School shell, thanks to the distinct brickwork from each era.
		</JDGBodyCopy>
		<JDGFullWidthContainer>
			<JDGImageCarousel
				imageAttributeObjects={[
					imageAttributesCollection.hst.fms_2013_demo_brickwork_1,
					imageAttributesCollection.hst.fms_2013_demo_brickwork_2,
					imageAttributesCollection.hst.fms_2013_demo_brickwork_3,
					imageAttributesCollection.hst.fms_2013_demo_brickwork_4
				]}
			/>
		</JDGFullWidthContainer>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title="ALTERNATE FUTURE">
		<JDGBodyCopy paddingTop="0">
			As a former Flood Middle School student myself, I'd hoped for a better ending for the
			building, but having since graduated from architecture school, I could also see why it would
			be prohibitive to save.
			<br /><br />
			Nonetheless, I used my <a href="/#architecture" target="_blank">architecture</a> and
			<a href="/#software" target="_blank">architectural software</a> experience to create a
			hypothetical
			<a href="../architectural-experiments/fms-campus" target="_blank">adaptive reuse</a> concept that
			utilizes walk-up townhomes and mixed-use to salvage the building while creating a new micro-community
			for Englewood.
		</JDGBodyCopy>
		<JDGImageTile
			imageAttributes={imageAttributesCollection.exp.fms_campus_lawn}
			showCaption
			cropToFillContainer={false}
		/>
		<JDGBodyCopy>
			For a deeper look at what could have been, check out my
			<a href="../architectural-experiments/fms-campus">Campus Village Adaptive Reuse</a> project!
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>

<style>
	h3 {
		text-align: center;
		padding: 0;
		margin: 0 0 10px 0;
	}

	h3.with-dates {
		margin: 0;
	}

	h4 {
		text-align: center;
		padding: 0;
		margin-top: 0;
		color: gray;
	}
</style>
