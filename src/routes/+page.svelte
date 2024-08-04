<script>
	import { jdgSharedUrls } from 'jdg-ui-svelte/jdg-shared-strings.js';
	import imageAttributesCollection from './image-attributes-collection';

	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGFullWidthContainer,
		JDGGridLayout,
		JDGImageTile
	} from 'jdg-ui-svelte';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating>
		<div class="intro-content-1">Hi! 👋 I'm Josh.</div>
		<div class="intro-content-2">I'm a 3D creator</div>
		<div class="intro-content-1">with experience in:</div>
		<JDGGridLayout>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.exp.corporate_showroom_corner}
				label={'ARCHITECTURE'}
				labelContainerVerticalAlign="bottom"
				labelJustification="center"
				href="#architecture"
			/>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.products_0}
				label={'PRODUCTS'}
				labelContainerVerticalAlign="bottom"
				labelJustification="center"
				href="#products"
			/>
			<JDGImageTile
				imageAttributes={imageAttributesCollection.software_0}
				label={'SOFTWARE'}
				labelContainerVerticalAlign="bottom"
				labelJustification="center"
				href="#software"
			/>
		</JDGGridLayout>
		<JDGBodyCopy>
			Inspired by the natural and built environments of Colorado, my passion for 3D design of all
			things ignited a career in architecture that evolved into a unique software and engineering
			legacy, spanning domains and defying categorization.
			<br /><br />
			Today, I'm a Senior Product Manager building the next generation of 3D architectural modeling software
			at <a href="https://www.autodesk.com" target="blank">Autodesk</a>. By night, I'm a software
			and videogame developer, product designer, and architectural historian.
			<br /><br />
			I'm also the creator of
			<a href="https://www.cinderellacityproject.com/" target="blank">The Cinderella City Project</a
			>, an immersive digital reconstruction of a unique mid-century shopping center of the same in
			Englewood, Colorado.
			<br /><br />
			Interested in working together? Check out my
			<a
				href="https://res.cloudinary.com/jdg-main/image/upload/v1722571752/jdg-website/2024_05_JDG_resume.pdf"
				target="blank">resume</a
			>
			or connect with me on <a href={jdgSharedUrls.jdgLinkedIn} target="blank">LinkedIn</a>.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title={'ARCHITECTURAL HISTORY'}>
		<JDGBodyCopy paddingBottom="0" paddingTop="0" textAlign="center">
			Places lost to time, <br />their dramatic rise and fall the product of a disposable society.
			<br /><br />
			Theses quirky designs inspired my career,<br />
			and their fascinating histories offer lessons for today.
			<br /><br />
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImageTile label={'CINDERELLA CITY MALL'} />
			<JDGImageTile
				label={'FLOOD MIDDLE SCHOOL'}
				href={'./architectural-history/flood-middle-school'}
			/>
		</JDGGridLayout>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title={'ARCHITECTURE'}>
		<JDGBodyCopy paddingTop="0" textAlign="center">
			Seeing the wasteful demolition of a
			<a href="https://www.cinderellacityproject.com/about">giant shopping mall</a> <br />inspired
			my career in retail architectural design.
			<br /><br />
			I received my Master of Architecture degree in 2013 and created world-class retail centers before
			eventually moving into <a href="#software">architectural software</a> in 2015.
		</JDGBodyCopy>
		<JDGBodyCopy textAlign="center" paddingTop="0" paddingBottom="0">
			<h3>LEGACY DESIGNS (2010-2015)</h3>
			School through early career: These projects were designed while pursuing my architecture degree
			and during my tenure as Associate Designer at 505Design.
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImageTile
				label={'BAYOU MIXED USE'}
				href="./architecture/bayou-mixed-use"
				imageAttributes={imageAttributesCollection.arch.bayou_mixed_use_2}
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
				href="./architecture/random-school"
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
			>, for which I was a Senior Product Manager.
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
	<JDGContentBoxFloating title={'PRODUCTS'}>
		<JDGGridLayout>
			<JDGImageTile label={'PROJECT 1'} />
			<JDGImageTile label={'PROJECT 2'} />
			<JDGImageTile label={'PROJECT 3'} />
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

	.intro-content-1 {
		display: flex;
		justify-content: center;
		font-size: 1.5rem;
	}
	.intro-content-2 {
		display: flex;
		justify-content: center;
		font-size: 2rem;
	}
</style>
