<script>
	import { jdgSharedUrls } from 'jdg-ui-svelte/jdg-shared-strings.js';
	import { sharedUrls } from '$lib/shared-strings';
	import imageAttributesCollection from './image-attributes-collection';
	import uiState from 'jdg-ui-svelte/states/ui-state.js';
	import { breakpointHandler } from 'jdg-ui-svelte/jdg-ui-management.js';

	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGGridLayout,
		JDGImageFullWidth,
		JDGImageTile,
		JDGJumpTo
	} from 'jdg-ui-svelte';

	const imageHeightLg = 350;
	const imageHeightSm = 250;
	let currentImageHeight = 0;

	const imageHeightBreakpointHandler = () => {
		breakpointHandler(
			// breakpoint 0
			() => {
				// force the mobile nav on
				currentImageHeight = imageHeightSm;
			},
			// breakpoint 1
			() => {
				currentImageHeight = imageHeightSm;
			},
			// breakpoint 2
			() => {
				currentImageHeight = imageHeightLg;
			}
		);
	};

	$: {
		$uiState.windowWidth;
		imageHeightBreakpointHandler();
	}
</script>

<JDGContentContainer overlapWithHeader={true} topBottomPadding="0">
	<JDGImageFullWidth
		imageAttributes={imageAttributesCollection.arch.fairgrounds_river}
		overlayColorRgba={'rgba(50, 50, 50, 0.8)'}
		superText={`Hi! 👋 I'm Josh.`}
		primaryText={"I'm a 3D creator"}
		secondaryText={'with experience in:'}
	/>
</JDGContentContainer>
<JDGContentContainer topBottomPadding="0">
	<JDGContentBoxFloating animateWhenVisible={false} paddingTop="0px">
		<div class="hero-image-overlap" style={`margin-top: -${currentImageHeight / 2}px;`}>
			<JDGGridLayout>
				<JDGImageTile
					imageAttributes={imageAttributesCollection.exp.corporate_showroom_corner}
					label={'ARCHITECTURE'}
					labelContainerVerticalAlign="top"
					labelJustification="center"
					href="#architectural-design"
					compactModeOnMobile={false}
					maxHeight={`${currentImageHeight}px`}
				/>
				<JDGImageTile
					imageAttributes={imageAttributesCollection.products_0}
					label={'PRODUCTS'}
					labelContainerVerticalAlign="top"
					labelJustification="center"
					href="#industrial-design"
					compactModeOnMobile={false}
					maxHeight={`${currentImageHeight}px`}
				/>
				<JDGImageTile
					imageAttributes={imageAttributesCollection.software_0}
					label={'SOFTWARE'}
					labelContainerVerticalAlign="top"
					labelJustification="center"
					href="#software"
					compactModeOnMobile={false}
					maxHeight={`${currentImageHeight}px`}
				/>
			</JDGGridLayout>
		</div>
		<JDGBodyCopy>
			Inspired by the natural and built environments of Colorado, my passion for 3D design of all
			things ignited a career in architecture that evolved into a unique software legacy, spanning
			domains and defying categorization.
			<br /><br />
			I'm currently a Senior Product Manager building the next generation of 3D architectural modeling
			software at <a href="https://www.autodesk.com" target="blank">Autodesk</a>. At night, I'm a
			software and simulation developer, product designer, and architectural historian.
			<br /><br />
			I'm also the creator of
			<a href="https://www.cinderellacityproject.com/" target="blank">The Cinderella City Project</a
			>, an immersive digital reconstruction of a unique mid-century shopping center of the same
			name in Englewood, Colorado.
			<br /><br />
			See all my experience below, learn more <a href="./about">about me</a>, or
			<a href="./contact">get in touch</a>. Enjoy!
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<JDGJumpTo />
	<JDGContentBoxFloating title={'ARCHITECTURAL HISTORY'}>
		<JDGBodyCopy paddingBottom="0" paddingTop="0" textAlign="center">
			This is where it all started for me:<br />
			Unique places lost to time, casualties of a disposable society.
			<br /><br />
			These quirky designs inspired my career,<br />
			and their fascinating histories offer lessons for today.
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImageTile
				label={'CINDERELLA CITY MALL'}
				imageAttributes={imageAttributesCollection.hst.ccm_0}
				href={jdgSharedUrls.ccpWebsite}
				hrefOpenInNewTab={true}
			/>
			<JDGImageTile
				label={'FLOOD MIDDLE SCHOOL'}
				imageAttributes={imageAttributesCollection.hst.fms_1968_southeast_corner_entrance}
				href={sharedUrls.hst.flood_middle_school}
			/>
		</JDGGridLayout>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title={'ARCHITECTURAL DESIGN'}>
		<JDGBodyCopy paddingTop="0" textAlign="center">
			Witnessing the wasteful demolition of a
			<a href="https://www.cinderellacityproject.com/about" target="_blank">giant shopping mall</a>
			<br />inspired my career designing better places for people and the environment.
			<br /><br />
			I received my Master of Architecture degree in 2013 and created world-class retail centers before
			eventually moving into <a href="#software">architectural software</a> in 2015.
		</JDGBodyCopy>
		<JDGBodyCopy textAlign="center" paddingTop="0" paddingBottom="0">
			<h3>LEGACY DESIGNS (2010-2015)</h3>
			School through early career: These projects were designed while pursuing my architecture degree
			and during my tenure as Associate Designer at <a
				href="https://www.505design.com"
				target="_blank">505Design</a
			>.
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImageTile
				label={'BAYOU MIXED USE'}
				href="./architecture/bayou-mixed-use"
				imageAttributes={imageAttributesCollection.arch.bayou_mixed_use_4}
			/>
			<JDGImageTile
				label={'MODERN TEXAS LOBBY'}
				href="./architecture/texas-lobby"
				imageAttributes={imageAttributesCollection.arch.texas_lobby}
			/>
			<JDGImageTile
				label={'ORCHARD TOWN CENTER'}
				href="./architecture/orchard-town-center"
				imageAttributes={imageAttributesCollection.arch.otc_below}
			/>
			<JDGImageTile
				label={'OLD ORCHARD'}
				href="./architecture/old-orchard"
				imageAttributes={imageAttributesCollection.arch.old_orchard_outside}
			/>
			<JDGImageTile
				label={'ABANDONED SCHOOL REUSE'}
				href={sharedUrls.arch.random_school}
				imageAttributes={imageAttributesCollection.arch.random_school_terrace}
			/>
			<JDGImageTile
				label={'MINDFUL LIVE/WORK CAMPUS'}
				href="./architecture/mindful-campus"
				imageAttributes={imageAttributesCollection.arch.mindful_campus_boulevard_close}
			/>
			<JDGImageTile
				label={'THE FAIRGROUNDS'}
				href="./architecture/fairgrounds"
				imageAttributes={imageAttributesCollection.arch.fairgrounds_aerial}
			/>
			<JDGImageTile
				label={'BEACH CHIC ADAPTIVE REUSE'}
				href="./architecture/beach-chic"
				imageAttributes={imageAttributesCollection.arch.beach_chic_concourse}
			/>
			<JDGImageTile
				label={'GRITTY BBQ ADAPTIVE REUSE'}
				href="./architecture/gritty-bbq"
				imageAttributes={imageAttributesCollection.arch.gritty_bbq_option_3}
			/>
			<JDGImageTile
				label={'MINDFUL MULTIFAMILY'}
				href="./architecture/mindful-multifamily"
				imageAttributes={imageAttributesCollection.arch.mindful_multifamily}
			/>
			<JDGImageTile
				label={'ARROWHEAD TOWNE CENTER'}
				href="./architecture/arrowhead-towne-center"
				imageAttributes={imageAttributesCollection.arch.atc_elevator}
			/>
		</JDGGridLayout>
		<JDGBodyCopy textAlign="center" paddingBottom="0">
			<h3>EXPERIMENTAL DESIGNS (2015-2024)</h3>
			Testing grounds for architecture and software. These projects were digitally built using<a
				href="https://formit.autodesk.com">Autodesk FormIt</a
			>, for which I was the Senior Product Manager.
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImageTile
				label={'MINDFUL SHOWROOM'}
				href="./architecture-experimental/1551-wewatta"
				imageAttributes={imageAttributesCollection.exp.corporate_showroom_corner}
			/>
			<JDGImageTile
				label={'CAMPUS VILLAGE ADAPTIVE REUSE'}
				href="./architecture-experimental/fms-campus"
				imageAttributes={imageAttributesCollection.exp.fms_campus_lawn}
			/>
			<JDGImageTile
				label={'ENCODE CAMPUS'}
				href="./architecture-experimental/encode-campus"
				imageAttributes={imageAttributesCollection.exp.encode_campus_after}
			/>
			<JDGImageTile
				label={'DEPARTMENT STORE ADAPTIVE REUSE'}
				href="./architecture-experimental/broadway-southwest"
				imageAttributes={imageAttributesCollection.exp.broadway_southwest_concept_2_promenade}
			/>
			<JDGImageTile
				label={'RANCH ELSIE MODERN HOME'}
				href="./architecture-experimental/ranch-elsie"
				imageAttributes={imageAttributesCollection.exp.ranch_elsie_option_3}
			/>
			<JDGImageTile
				label={'O2 RESEARCH LOBBY STUDY'}
				href="./architecture-experimental/o2-research"
				imageAttributes={imageAttributesCollection.exp.o2_research}
			/>
			<JDGImageTile
				label={'16 PEARL ADAPTIVE REUSE'}
				href="./architecture-experimental/sixteen-pearl"
				imageAttributes={imageAttributesCollection.exp.sixteen_pearl_corner}
			/>
			<JDGImageTile
				label={'SPEER POINT ADAPTIVE REUSE'}
				href="./architecture-experimental/speer-point"
				imageAttributes={imageAttributesCollection.exp.speer_point_after}
			/>
			<JDGImageTile
				label={'FIFTEEN PLATTE MODERN OFFICE'}
				href="./architecture-experimental/fifteen-platte"
				imageAttributes={imageAttributesCollection.exp.fifteen_platte_sunset}
			/>
		</JDGGridLayout>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title={'INDUSTRIAL DESIGN'}>
		<JDGBodyCopy textAlign="center" paddingTop="0">
			Harnessing skills from my architecture career, I use <a
				href={sharedUrls.grasshopper}
				target="_blank">visual scripting</a
			>
			and 3D printing to design, test, and refine useful products for the home under the label
			<a href="http://www.parametrix3d.com/" target="_blank">Parametrix3D</a>.
			<br /><br />
			Select designs were sold physically at the
			<a href="https://iheartdenverstore.com/" target="_blank">I Heart Denver</a>
			store from 2014 to 2017. If you have a 3D printer, you can get these printer-ready models at
			<a href="https://www.cgtrader.com/3d-models?author=parametrix" target="_blank">CGTrader</a>.
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImageTile
				label={'DENVER CITYSCAPE'}
				imageAttributes={imageAttributesCollection.ind.cityscape_021A_0}
				href="http://www.parametrix3d.com/021.html"
				hrefOpenInNewTab={true}
			/>
			<JDGImageTile
				label={'PUZZLE DECOR'}
				imageAttributes={imageAttributesCollection.ind.puzzle_decor_030A_0}
				href="http://www.parametrix3d.com/030.html"
				hrefOpenInNewTab={true}
			/>
			<JDGImageTile
				label={'ADVANCED PLANTER'}
				imageAttributes={imageAttributesCollection.ind.planter_003F_0}
				href="http://www.parametrix3d.com/003.html"
				hrefOpenInNewTab={true}
			/>
			<JDGImageTile
				label={'PEN HOLDER'}
				imageAttributes={imageAttributesCollection.ind.pen_holder_008I_0}
				href="http://www.parametrix3d.com/008.html"
				hrefOpenInNewTab={true}
			/>
			<JDGImageTile
				label={'CARD HOLDER'}
				imageAttributes={imageAttributesCollection.ind.card_holder_015C_0}
				href="http://www.parametrix3d.com/015.html"
				hrefOpenInNewTab={true}
			/>
			<JDGImageTile
				label={'DEN / CO MAGNETS'}
				imageAttributes={imageAttributesCollection.ind.den_co_magnets_047BC_0}
				href="http://www.parametrix3d.com/047.html"
				hrefOpenInNewTab={true}
			/>
			<JDGImageTile
				label={'CO TOPO MAGNET'}
				imageAttributes={imageAttributesCollection.ind.co_topo_magnet_047D_0}
				href="http://www.parametrix3d.com/047d.html"
				hrefOpenInNewTab={true}
			/>
			<JDGImageTile
				label={'HERB GRINDER'}
				imageAttributes={imageAttributesCollection.ind.grinder_039A_0}
				href="http://www.parametrix3d.com/039.html"
				hrefOpenInNewTab={true}
			/>
			<JDGImageTile
				label={'DENVER MAP COASTER'}
				imageAttributes={imageAttributesCollection.ind.coaster_028A_0}
				href="http://www.parametrix3d.com/028.html"
				hrefOpenInNewTab={true}
			/>
			<JDGImageTile
				label={'KITCHEN CADDY'}
				imageAttributes={imageAttributesCollection.ind.kitchen_caddy_007F_0}
				href="http://www.parametrix3d.com/007.html"
				hrefOpenInNewTab={true}
			/>
		</JDGGridLayout>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title={'SOFTWARE'}>
		<JDGGridLayout>
			<JDGImageTile label={'PROJECT 1'} />
			<JDGImageTile label={'PROJECT 2'} />
			<JDGImageTile label={'PROJECT 3'} />
		</JDGGridLayout>
	</JDGContentBoxFloating>
</JDGContentContainer>

<style>
	h3 {
		text-align: center;
	}
</style>
