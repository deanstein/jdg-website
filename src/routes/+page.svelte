<script>
	import imageAttributesCollection from './image-attributes-collection';

	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
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
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title={'ARCHITECTURE'}>
		<JDGBodyCopy paddingTop="0" textAlign="center">
			Architecture is where it all started for me. 🎉
			<br /><br />
			After seeing the wasteful demolition of a
			<a href="https://www.cinderellacityproject.com/about">giant shopping mall</a>
			as a child, I embarked on a career to understand and evolve retail architectural design.
			<br /><br />
			I received my Master of Architecture degree in 2013 and worked at a world-class design firm before
			eventually moving into <a href="#software">architectural software.</a>
		</JDGBodyCopy>
		<JDGBodyCopy textAlign="center" paddingBottom="0">
			<h3>EXPERIMENTAL PLACES</h3>
			Testing grounds for architecture and software. These projects were digitally built using<a
				href="https://formit.autodesk.com">Autodesk FormIt</a
			>, for which I was a Senior Product Manager.
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImageTile
				label={'MINDFUL SHOWROOM'}
				href="./exp/1551-wewatta"
				imageAttributes={imageAttributesCollection.exp.corporate_showroom_corner}
			/>
			<JDGImageTile
				label={'SCHOOL ADAPTIVE REUSE'}
				href="./exp/fms-campus"
				imageAttributes={imageAttributesCollection.exp.fms_campus_lawn}
			/>
			<JDGImageTile
				label={'ENCODE CAMPUS'}
				href="./exp/encode-campus"
				imageAttributes={imageAttributesCollection.exp.encode_campus_after}
			/>
			<JDGImageTile
				label={'DEPARTMENT STORE ADAPTIVE REUSE'}
				href="./exp/broadway-southwest"
				imageAttributes={imageAttributesCollection.exp.broadway_southwest_concept_2_promenade}
			/>
			<JDGImageTile
				label={'RANCH ELSIE MODERN HOME'}
				href="./exp/ranch-elsie"
				imageAttributes={imageAttributesCollection.exp.ranch_elsie_option_3}
			/>
			<JDGImageTile
				label={'16 PEARL ADAPTIVE REUSE'}
				href="./exp/sixteen-pearl"
				imageAttributes={imageAttributesCollection.exp.sixteen_pearl_corner}
			/>
			<JDGImageTile
				label={'SPEER POINT ADAPTIVE REUSE'}
				href="./exp/speer-point"
				imageAttributes={imageAttributesCollection.exp.speer_point_after}
			/>
			<JDGImageTile
				label={'FIFTEEN PLATTE MODERN OFFICE'}
				href="./exp/fifteen-platte"
				imageAttributes={imageAttributesCollection.exp.fifteen_platte_sunset}
			/>
		</JDGGridLayout>
		<JDGBodyCopy textAlign="center" paddingBottom="0">
			<h3>LEGACY PLACES</h3>
			Architectural designs from school and early career.
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImageTile label={'PROJECT 1'} />
			<JDGImageTile label={'PROJECT 2'} />
			<JDGImageTile label={'PROJECT 3'} />
		</JDGGridLayout>
		<JDGBodyCopy textAlign="center" paddingBottom="0">
			<h3>HISTORIC PLACES</h3>
			Buildings lost to time, their dramatic rise and fall a product of a disposable society.
			<br />
			These places fascinated me as an aspiring architect, so I've documented their stories here.
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImageTile label={'PROJECT 1'} />
			<JDGImageTile label={'PROJECT 2'} />
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
