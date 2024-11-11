<script>
	import { jdgSharedUrls } from 'jdg-ui-svelte/jdg-shared-strings.js';
	import { pageMeta, sharedStyles } from '$lib/shared-strings';
	import imageAttributesCollection from './image-attributes-collection';
	import { windowWidth } from 'jdg-ui-svelte/states/ui-state.js';
	import { breakpointHandler } from 'jdg-ui-svelte/jdg-ui-management.js';

	import {
		JDGBodyCopy,
		JDGClipFade,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGGridLayout,
		JDGImage,
		JDGImageFullWidth,
		JDGImageTile,
		JDGJumpTo
	} from 'jdg-ui-svelte';
	import UpNext from '../components/UpNext.svelte';
	import ImpactItem from '../components/ImpactItem.svelte';
	import ImpactSection from '../components/ImpactSection.svelte';

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
		$windowWidth;
		imageHeightBreakpointHandler();
	}
</script>

<JDGContentContainer overlapWithHeader={true} paddingTop="0" paddingBottom="0">
	<JDGImageFullWidth
		imageAttributes={imageAttributesCollection.arch.fairgrounds_river}
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
		superText={`Hi! 👋 I'm Josh.`}
		primaryText={"I'm a 3D creator"}
		primaryTextBold
		secondaryText={'with experience in:'}
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false} paddingTop="0px">
		<div class="hero-image-overlap" style={`margin-top: -${currentImageHeight / 2}px;`}>
			<JDGGridLayout>
				<JDGImageTile
					imageAttributes={imageAttributesCollection.arch.beach_chic_concourse}
					label={'ARCHITECTURE'}
					labelContainerVerticalAlign="top"
					labelJustification="center"
					href="#architecture"
					useCompactHeightOnMobile={false}
					maxHeight={`${currentImageHeight}px`}
				/>
				<JDGImageTile
					imageAttributes={imageAttributesCollection.ind.planter_003F_1}
					label={'PRODUCTS'}
					labelContainerVerticalAlign="top"
					labelJustification="center"
					href="#industrial-design"
					useCompactHeightOnMobile={false}
					maxHeight={`${currentImageHeight}px`}
				/>
				<JDGImageTile
					imageAttributes={imageAttributesCollection.swe.formit_0}
					label={'SOFTWARE'}
					labelContainerVerticalAlign="top"
					labelJustification="center"
					href="#software"
					useCompactHeightOnMobile={false}
					maxHeight={`${currentImageHeight}px`}
				/>
			</JDGGridLayout>
		</div>
		<JDGBodyCopy>
			Inspired by natural and built environments of Colorado, my passion for 3D design of all things
			ignited a career in architecture that evolved into a unique software legacy, spanning domains
			and defying categorization.
			<br /><br />
			By day, I'm a Senior Product Manager building the next generation of 3D architectural modeling
			software at <a href="https://www.autodesk.com" target="blank">Autodesk</a>. By night, I'm a
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
		<JDGBodyCopy paddingBottom="0" paddingTop="0" textAlign="center" textWrap="balance">
			This is where it all started for me: <br />
			Unique places lost to time, casualties of a disposable society.
		</JDGBodyCopy>
		<JDGBodyCopy paddingBottom="0" paddingTop="0" textAlign="center" textWrap="balance">
			These quirky designs inspired my career and their fascinating histories continue to offer
			lessons for today.
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
				href={pageMeta.hst.flood_middle_school.url}
			/>
		</JDGGridLayout>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title={'ARCHITECTURE'}>
		<JDGBodyCopy paddingTop="0" textAlign="center">
			Witnessing the wasteful demolition of a
			<a href="https://www.cinderellacityproject.com/about" target="_blank">giant shopping mall</a>
			<br />inspired my career designing better places for people and the environment.
			<br /><br />
			I received my Master of Architecture degree in 2013 and created world-class retail centers before
			eventually moving into <a href="#software">architectural software</a> in 2015.
		</JDGBodyCopy>
		<JDGBodyCopy textAlign="center" paddingTop="0" paddingBottom="0">
			<h3 class="subheader-with-date">LEGACY DESIGNS</h3>
			<h4 class="date">2010-2015</h4>
			School through early career: These projects were designed while pursuing my architecture degree
			and during my tenure as Associate Designer at&nbsp;<a
				href="https://www.505design.com"
				target="_blank">505Design</a
			>.
		</JDGBodyCopy>
		<JDGClipFade>
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
					href={pageMeta.arch.random_school.url}
					imageAttributes={imageAttributesCollection.arch.random_school_terrace}
				/>
				<JDGImageTile
					label={'MINDFUL LIVE/WORK CAMPUS'}
					href="./architecture/mindful-campus"
					imageAttributes={imageAttributesCollection.arch.mindful_campus_boulevard_close}
					objectPosition="right"
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
					objectPosition="left"
				/>
				<JDGImageTile
					label={'ARROWHEAD TOWNE CENTER'}
					href="./architecture/arrowhead-towne-center"
					imageAttributes={imageAttributesCollection.arch.atc_elevator}
					objectPosition="left"
				/>
			</JDGGridLayout>
		</JDGClipFade>
		<JDGBodyCopy textAlign="center" paddingBottom="0">
			<h3 class="subheader-with-date">EXPERIMENTAL DESIGNS</h3>
			<h4 class="date">2015-2024</h4>
			Testing grounds for architecture and software. These projects were digitally built using&nbsp;<a
				href={jdgSharedUrls.adskFormIt}>Autodesk FormIt</a
			>, for which I was the Senior Product Manager.
		</JDGBodyCopy>
		<JDGClipFade>
			<JDGGridLayout>
				<JDGImageTile
					label={'MINDFUL SHOWROOM'}
					href="./architectural-experiments/1551-wewatta"
					imageAttributes={imageAttributesCollection.exp.corporate_showroom_corner}
				/>
				<JDGImageTile
					label={'CAMPUS VILLAGE ADAPTIVE REUSE'}
					href="./architectural-experiments/fms-campus"
					imageAttributes={imageAttributesCollection.exp.fms_campus_lawn}
				/>
				<JDGImageTile
					label={'ENCODE CAMPUS'}
					href="./architectural-experiments/encode-campus"
					imageAttributes={imageAttributesCollection.exp.encode_campus_after}
				/>
				<JDGImageTile
					label={'DEPARTMENT STORE ADAPTIVE REUSE'}
					href="./architectural-experiments/broadway-southwest"
					imageAttributes={imageAttributesCollection.exp.broadway_southwest_concept_2_promenade}
				/>
				<JDGImageTile
					label={'RANCH ELSIE MODERN HOME'}
					href="./architectural-experiments/ranch-elsie"
					imageAttributes={imageAttributesCollection.exp.ranch_elsie_option_3}
				/>
				<JDGImageTile
					label={'O2 RESEARCH LOBBY STUDY'}
					href="./architectural-experiments/o2-research"
					imageAttributes={imageAttributesCollection.exp.o2_research}
				/>
				<JDGImageTile
					label={'16 PEARL ADAPTIVE REUSE'}
					href="./architectural-experiments/sixteen-pearl"
					imageAttributes={imageAttributesCollection.exp.sixteen_pearl_corner}
				/>
				<JDGImageTile
					label={'SPEER POINT ADAPTIVE REUSE'}
					href="./architectural-experiments/speer-point"
					imageAttributes={imageAttributesCollection.exp.speer_point_after}
				/>
				<JDGImageTile
					label={'FIFTEEN PLATTE MODERN OFFICE'}
					href="./architectural-experiments/fifteen-platte"
					imageAttributes={imageAttributesCollection.exp.fifteen_platte_sunset}
				/>
			</JDGGridLayout>
		</JDGClipFade>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title={'INDUSTRIAL DESIGN'}>
		<JDGBodyCopy textAlign="center" paddingTop="0">
			Harnessing skills from my architecture career, I use <a
				href={jdgSharedUrls.grasshopper}
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
		<JDGClipFade>
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
		</JDGClipFade>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title={'SOFTWARE'}>
		<JDGBodyCopy paddingTop="0" paddingBottom="0" textAlign="center" textWrap="balance">
			In 2015, I pivoted from architectural design to architectural software, where I helped build
			an intuitive 3D modeling app that's now powering a next-generation design and analysis
			platform at Autodesk.
		</JDGBodyCopy>
		<JDGBodyCopy paddingTop="0" textAlign="center" textWrap="balance">
			I've since bootstrapped my way into software development, creating an immersive history
			simulation as well as a SvelteJS UI package that powers this very website.
		</JDGBodyCopy>
		<JDGImageFullWidth
			imageAttributes={imageAttributesCollection.swe.formit_0}
			maxHeight="350px"
			primaryText="Autodesk FormIt"
			primaryTextBold
			secondaryText="Powerful modeling tools that feel like 3D sketching"
			overlayColorRgba="rgba(50, 50, 50, 0.5)"
		/>
		<JDGBodyCopy>
			<a href={jdgSharedUrls.adskFormIt}>FormIt</a> is Autodesk's premier cross-platform conceptual
			modeling app featuring intuitive tools, materials and visualization, and impressive
			interoperability with other apps.
			<br /><br />
			As a Senior Product Owner, I grew FormIt into a formidable competitor in the 3D modeling space,
			filling capability gaps and addressing customer requests to create one of the most powerful and
			flexible modeling systems available.
		</JDGBodyCopy>
		<JDGGridLayout>
			<div class="image-with-details">
				<JDGImageTile
					imageAttributes={imageAttributesCollection.exp.corporate_showroom_corner}
					href="./#experimental-designs"
				/>
				<div class="image-details">
					<h4 style="text-align: center;">3D MODELING + MARKETING</h4>
					Applying my architectural experience, I used FormIt to create fictional but realistic&nbsp<a
						href="./#experimental-designs">adaptive reuse designs</a
					>
					which exercised new features, pushed performance limits, and validated bug fixes.
					<br /><br />
					I also authored dozens of engaging and illustrative
					<a href="https://formit.autodesk.com/blog/" target="_blank">blog posts</a> which demonstrated
					the value of new features in each release from a customer's perspective.
				</div>
			</div>
			<div class="image-with-details">
				<JDGImageTile
					imageAttributes={imageAttributesCollection.swe.formit_dynamo_1}
					href="https://formit.autodesk.com/redirect/formit-dynamo"
				/>
				<div class="image-details">
					<h4 style="text-align: center;">DYNAMO VISUAL SCRIPTING</h4>
					The synergy between&nbsp<a href={jdgSharedUrls.adskFormIt} target="_blank">FormIt</a>, a
					3D modeling and visualization engine, and
					<a href={jdgSharedUrls.adskDynamo} target="_blank">Dynamo</a>, a computational scripting
					and automation app, creates an unrivaled architectural design powerhouse.
					<br /><br />
					I created dozens of
					<a href="https://formit.autodesk.com/redirect/formit-dynamo" target="_blank"
						>FormIt + Dynamo</a
					> scripts which shipped with the app to fill capability gaps and showcase the incredible possibilities
					of combined systems.
				</div>
			</div>
			<div class="image-with-details">
				<JDGImageTile
					imageAttributes={imageAttributesCollection.swe.formit_plugins_1}
					href="https://github.com/FormIt3D"
				/>
				<div class="image-details">
					<h4 style="text-align: center;">JAVASCRIPT PLUGINS</h4>
					FormIt offers a cross-platform&nbsp<a
						href="https://formit.autodesk.com/redirect/formit-plugins-api"
						target="_blank">JavaScript plugin API</a
					>
					which can subscribe to messages and modify the interface of both FormIt for Web and FormIt
					for Windows.
					<br /><br />
					FormIt plugins allowed me to bootstrap my software development career, and I created
					<a href="https://github.com/FormIt3D" target="_blank">18 of them</a> - expanding capabilities
					and adding new workflows using cross-platform web building blocks.
				</div>
			</div>
		</JDGGridLayout>
		<JDGBodyCopy>
			<ImpactSection maxColumns={4}>
				<ImpactItem faIcon="fa-burst" impactNumber="12" impactDescription="major app releases" />
				<ImpactItem faIcon="fa-chart-line" impactNumber="300%" impactDescription="usage increase" />
				<ImpactItem faIcon="fa-bug" impactNumber="5,000+" impactDescription="tasks filed + fixed" />
				<ImpactItem
					faIcon="fa-archway"
					impactNumber="30+"
					impactDescription="architectural datasets created"
				/>
				<ImpactItem
					faIcon="fa-newspaper"
					impactNumber="24"
					impactDescription="blog posts authored"
				/>
				<ImpactItem
					faIcon="fa-diagram-project"
					impactNumber="22"
					impactDescription="Dynamo sample graphs shipped"
				/>
				<ImpactItem
					faIcon="fa-plug"
					impactNumber="18"
					impactDescription="JavaScript plugins shipped"
				/>
			</ImpactSection>
		</JDGBodyCopy>
		<JDGBodyCopy></JDGBodyCopy>
		<JDGImageFullWidth
			imageAttributes={imageAttributesCollection.swe.forma_wind_1}
			maxHeight="350px"
			primaryText="Autodesk Forma"
			primaryTextBold
			secondaryText="A next-gen design and analysis platform"
			overlayColorRgba="rgba(50, 50, 50, 0.5)"
		/>
		<JDGBodyCopy
			><a href={jdgSharedUrls.adskForma} target="_blank">Forma</a> is a next-generation analysis and
			design platform that charts the future of Autodesk's offerings, allowing legacy apps to
			support outcome-based design across industries and phases.
			<br /><br />
			As Senior Product Manager, I helped integrate
			<a href={jdgSharedUrls.adskFormIt} target="_blank">FormIt</a>'s powerful 3D creation tools
			into the Forma platform, providing intuitive modeling capabilities that seamlessly blend with
			Forma's analysis suite and underlying element system.
		</JDGBodyCopy>
		<JDGGridLayout>
			<div class="image-with-details">
				<JDGImage
					imageAttributes={imageAttributesCollection.swe.forma_sun_hours_1}
					cropToFillContainer={true}
					useCompactHeightOnMobile={true}
				/>
				<div class="image-details">
					<h4 style="text-align: center;">3D ENGINE INTEGRATION</h4>
					Collaborating with full-stack development teams across organizations, we integrated&nbsp;<a
						href={jdgSharedUrls.adskFormIt}
						target="_blank">FormIt</a
					>'s legacy modeling kernel into Forma, providing 3D modeling capabilities critical to
					Forma's adoption in the market.
					<br /><br />
					Keeping our customers in mind at every turn, I guided the integration by prioritizing development
					phases that aligned with customer and business needs, while also dogfooding the product and
					demonstrating new 3D capabilities both internally and externally.
				</div>
			</div>
			<div class="image-with-details">
				<JDGImage
					imageAttributes={imageAttributesCollection.swe.forma_daylight_potential_1}
					cropToFillContainer={true}
					useCompactHeightOnMobile={true}
				/>
				<div class="image-details">
					<h4 style="text-align: center;">CUSTOMER SUPPORT + ADVOCACY</h4>
					A new entrant in the design and analysis space, Forma benefitted well-written help center articles
					and a fast and friendly support presence to engage with customers and ensure their success
					in our software.
					<br /><br />
					I authored the entire
					<a href="https://help.autodeskforma.com/en/collections/4005989-3d-sketch" target="_blank"
						>3D Sketch help center</a
					>, illustrating the power of the FormIt modeling kernel inside Forma, becoming one of the
					top solution authors on the
					<a href="https://forums.autodesk.com/t5/forma/ct-p/6139" target="_blank">
						community forums</a
					>
					and Intercom chats, ensuring alignment between customer needs and development teams for a healthy,
					usable product.
				</div>
			</div>
			<div class="image-with-details">
				<JDGImage
					imageAttributes={imageAttributesCollection.swe.forma_3d_spaces_1}
					cropToFillContainer={true}
					useCompactHeightOnMobile={true}
				/>
				<div class="image-details">
					<h4 style="text-align: center;">DELIVERY + OPERATIONS EVOLUTION</h4>
					Forma presented a fundamental change in the way our teams worked, introducing new ways of delivery,
					customer interaction, and software management.
					<br /><br />
					Unlike our legacy desktop app world,
					<a href={jdgSharedUrls.adskForma} target="_blank">Forma</a> is delivered continuously as a
					web experience. As a result, I've adapted my way of working - learning new development and
					release methods, as well as new apps for customer engagement and analytics like Intercom and
					Mixpanel.
				</div>
			</div>
		</JDGGridLayout>
		<JDGBodyCopy>
			<ImpactSection maxColumns={3}>
				<ImpactItem
					faIcon="fa-burst"
					impactNumber="30+"
					impactDescription="major feature updates"
				/>
				<ImpactItem faIcon="fa-chart-line" impactNumber="3.5x" impactDescription="usage increase" />
				<ImpactItem faIcon="fa-bug" impactNumber="1,000+" impactDescription="tasks filed + fixed" />
				<ImpactItem
					faIcon="fa-archway"
					impactNumber="20+"
					impactDescription="architectural datasets created"
				/>
				<ImpactItem
					faIcon="fa-newspaper"
					impactNumber="8"
					impactDescription="blog posts authored"
				/>
			</ImpactSection>
		</JDGBodyCopy>
		<JDGBodyCopy></JDGBodyCopy>
		<JDGImageFullWidth
			imageAttributes={imageAttributesCollection.swe.ccp_1}
			maxHeight="350px"
			primaryText="The Cinderella City Project"
			primaryTextBold
			secondaryText="An immersive virtual history experience"
			overlayColorRgba="rgba(50, 50, 50, 0.5)"
		/>
		<JDGBodyCopy
			>The <a href="https://www.cinderellacityproject.com/simulation" target="_blank">
				Cinderella City Project</a
			>
			is an immersive history simulation of a unique and quirky mid-century shopping mall that existed
			in Englewood, Colorado from 1968-1998.
			<br /><br />
			Seeing the mall getting demolished in 1998 sparked my career in retail architecture, eventually
			leading me into the software world. Coming full-circle, I rebuilt Cinderella City as a FormIt testing
			model before learning how to code and creating a fully-fledged Unity simulation which features
			unique interactions like
			<a href="https://www.cinderellacityproject.com/simulation#features" target="_blank"
				>time-traveling</a
			>.
		</JDGBodyCopy>
		<JDGGridLayout>
			<div class="image-with-details">
				<JDGImageTile
					imageAttributes={imageAttributesCollection.swe
						.ccp_construction_60s70s_blue_mall_columns_ceiling}
					href="https://www.youtube.com/watch?v=Rjq-hv47vsk"
					hrefOpenInNewTab={true}
				/>
				<div class="image-details">
					<h4 style="text-align: center;">BUILDING THE MALL</h4>
					The Cinderella City Project has humble roots, starting out as a testing model for&nbsp;<a
						href={jdgSharedUrls.adskFormIt}
						target="_blank">FormIt</a
					>, intended to push performance limits and exercise new capabilities through several
					releases.
					<br /><br />
					Starting the reconstruction efforts with the last 10 years of the mall's life (1987-1997),
					I eventually worked my way backwards to the first 10 years (1968-1978) - by which point, I
					could harness new, incredibly powerful
					<a href="https://formit.autodesk.com/redirect/formit-dynamo" target="_blank"
						>modeling workflows</a
					> that dovetailed perfectly with the progress of the project.
				</div>
			</div>
			<div class="image-with-details">
				<JDGImageTile
					imageAttributes={imageAttributesCollection.swe.ccp_construction_unity_npc_1}
					href="https://github.com/deanstein/CinderellaCityProject"
					hrefOpenInNewTab={true}
				/>
				<div class="image-details">
					<h4 style="text-align: center;">C# INTERACTION</h4>
					Taking the project a step further, I used the incredibly powerful game engine&nbsp;<a
						href="https://unity.com/"
						target="_blank">Unity</a
					>
					to bring the static 3D models to life.
					<br /><br />
					I learned how to code, harnessing Unity's
					<a href="https://docs.unity3d.com/ScriptReference/" target="_blank">C# API</a> to automate
					the import of the FormIt FBX assets and automatically apply material characteristics like emission
					and reflection. Eventually, I expanded my learning to to animations and interactions, including
					particle effects, NPC pathfinding, and the ability to time-travel between distinct eras.
				</div>
			</div>
			<div class="image-with-details">
				<JDGImageTile
					imageAttributes={imageAttributesCollection.swe.ccp_exhibit}
					href="https://www.cinderellacityproject.com/exhibit"
					hrefOpenInNewTab={true}
				/>
				<div class="image-details">
					<h4 style="text-align: center;">HISTORY MUSEUM</h4>
					In 2024, I helped design and build Englewood's first history museum and its&nbsp;<a
						href="https://www.cinderellacityproject.com/exhibit"
						target="_blank">inaugural exhibit</a
					>
					about Cinderella City Mall.
					<br /><br />
					The museum includes a dedicated theater with an interactive copy of the
					<a href="https://www.cinderellacityproject.com/simulation" target="_blank">
						Cinderella City simulation</a
					>. For this, I developed both a guided tour and
					<a href="https://www.cinderellacityproject.com/simulation#controls" target="_blank"
						>Xbox controller</a
					> support, affording the exhibit both a curated experience and full interactivity, guiding
					visitors between points of interest and allowing them to take full control and experience the
					past in their desired way.
				</div>
			</div>
		</JDGGridLayout>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>

<style>
	h3 {
		text-align: center;
	}

	h3.subheader-with-date {
		margin-bottom: 0;
	}

	h4.date {
		margin-top: 0;
		color: gray;
	}

	.image-with-details {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.image-details {
		padding: 10px;
		line-height: 1.5;
	}

	.image-details h4 {
		margin-top: 5px;
		margin-bottom: 15px;
	}
</style>
