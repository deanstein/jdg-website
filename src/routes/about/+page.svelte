<script>
	import imageAttributesCollection from '../image-attributes-collection';
	import { jdgSharedUrls } from 'jdg-ui-svelte/jdg-shared-strings.js';
	import { sharedUrls } from '$lib/shared-strings';
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGGridLayout,
		JDGImage
	} from 'jdg-ui-svelte';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating title={'NICE TO MEET YOU'}>
		<JDGBodyCopy paddingTop="0" paddingBottom="0">
			<span style="font-size: 30px;">I'm Josh.</span>
		</JDGBodyCopy>
		<JDGBodyCopy paddingTop="0" paddingBottom="0" textAlign="center" textWrap="balance">
			I'm a maker and innovator with unique experience in the design and development of software,
			architecture, and physical products.
			<br /><br />
		</JDGBodyCopy>
		<JDGImage
			imageAttributes={imageAttributesCollection.jdg_photo_2}
			maxHeight="300px"
			cropToFillContainer={false}
			useCompactHeightOnMobile={false}
		/>
		<JDGBodyCopy paddingTop="0">
			I live in downtown Denver, Colorado with my wife Haley and our cat
			<a href="https://www.instagram.com/iris_theragdoll" target="_blank">Iris</a>. Surrounded by
			natural and architectural beauty, we spend our time urban exploring, discovering new coffee
			shops and restaurants, biking, and playing racquetball.
			<br /><br />
			By day, I'm a Senior Product Manager at
			<a href="https://www.autodesk.com" target="_blank">Autodesk</a>
			making the next generation of powerful 3D modeling, visualization, and analysis software for architects
			and designers everywhere. By night, I'm a software and simulation developer, product designer,
			and architectural historian.
			<br /><br />
			It's been a wild ride. Here's how I got here:
		</JDGBodyCopy>
		<JDGBodyCopy textAlign="center" paddingTop="0" paddingBottom="0">
			<h3>ARCHITECTURAL DESIGN + HISTORY</h3>
		</JDGBodyCopy>
		<JDGBodyCopy paddingTop="0" paddingBottom="0">
			Growing up near Denver, Colorado, I witnessed vast changes to the metro area's urban character
			and retail landscape, igniting a passion for architectural design and urban planning.
			<br /><br />
			In particular, the wasteful demolition of a
			<a href="https://www.cinderellacityproject.com/about" target="_blank">giant shopping mall</a>
			in 1998 brought me face-to-face with the shocking waste of the architecture industry, and pushed
			me to a career designing better places for people and the environment.
		</JDGBodyCopy>
		<JDGImage
			imageAttributes={imageAttributesCollection.hst.ccm_demolition}
			maxHeight="300px"
			cropToFillContainer={false}
			useCompactHeightOnMobile={false}
		/>
		<JDGBodyCopy>
			Furthering my formative interest in architecture, my
			<a href={sharedUrls.hst.flood_middle_school} target="_blank">middle school</a>
			was an incredible patchwork of renovations and additions from the 1920s to the 1940s, culminating
			in a major overhaul in the 1960s. Despite sporting a minimal mid-century appearance, the school
			betrayed its age with creaky floors and glimpses of historic brick, and its entire history was
			uncovered during its&nbsp;
			<a href={`${sharedUrls.hst.flood_middle_school}#layers-of-brick`} target="_blank"
				>tragic demolition</a
			>.
		</JDGBodyCopy>
		<JDGGridLayout>
			<JDGImage
				imageAttributes={imageAttributesCollection.hst.ehs_1936_southeast_wing}
				maxHeight="300px"
				cropToFillContainer={false}
				useCompactHeightOnMobile={false}
			/>
			<JDGImage
				imageAttributes={imageAttributesCollection.hst.fms_1968_southeast_corner_entrance}
				maxHeight="300px"
				cropToFillContainer={false}
				useCompactHeightOnMobile={false}
			/>
		</JDGGridLayout>
		<JDGBodyCopy paddingBottom="0">
			In high school, research and persistence led me to an internship with a Colorado real estate
			developer, where for two years I helped transform the former
			<a
				href="http://coloradocommunitymedia.com/stories/Making-Southglenn-history-Shopping-malls-fascinate-teen-architect,65797"
				target="_blank">Southglenn Mall</a
			>
			into a vibrant mixed-use town center for for the City of Centennial, Colorado.
			<br /><br />
			In college, I created award-winning designs spanning buildings, urban planning, and furniture.
			I received my Master of Architecture degree at Kansas State University in 2013, where my thesis
			focused on revitalizing the Main Street of a Kansas town and creating a unique public space in
			the shell of an <a href={sharedUrls.arch.random_school}>abandoned school</a>.
		</JDGBodyCopy>
		<JDGImage
			imageAttributes={imageAttributesCollection.arch.random_school_canopy}
			maxHeight="300px"
			cropToFillContainer={false}
			useCompactHeightOnMobile={false}
		/>
		<JDGBodyCopy paddingBottom="0">
			After graduation, I became an Associate at
			<a href={jdgSharedUrls.arch505Design} target="_blank">505Design</a>, where I created places
			uniquely designed for the people who would inhabit them, from retail developments and office
			buildings to public spaces and main streets. During my tenure, I introduced cutting-edge
			software to unlock new workflows at the firm - software which would prove critical for my next
			career evolution.
		</JDGBodyCopy>
		<JDGImage
			imageAttributes={imageAttributesCollection.arch.beach_chic_concourse}
			maxHeight="300px"
			cropToFillContainer={false}
			useCompactHeightOnMobile={false}
		/>
		<JDGBodyCopy textAlign="center" paddingBottom="0">
			<h3>INDUSTRIAL DESIGN + PROTOTYPING</h3>
		</JDGBodyCopy>
		<JDGBodyCopy paddingTop="0" paddingBottom="0">
			While working in the architecture field, I began experimenting with visual scripting and
			generative design software called&nbsp;<a href={jdgSharedUrls.grasshopper} target="_blank"
				>Grasshopper</a
			>
			to venture into physical product design with the aid of the 3D printing boom of the 2010s.
			<br /><br />
			Thanks to these technologies, I was able to use scripts - reusable sets of instructions - to generate
			and finesse complex 3D models rather than manually sculpting and adjusting them, enabling me to
			quickly test and improve product iterations.
			<br /><br />
			Treating the entire product line as software, each bespoke variant is catalogued with a unique
			code and version printed on the bottom, for validation and tracking in the wild.
			<br /><br />
			I sold select designs physically at the
			<a href="https://iheartdenverstore.com/" target="_blank">I Heart Denver</a>
			store from 2014 to 2017 and continue to offer them
			<a href={jdgSharedUrls.pmxCgTrader} target="_blank">online</a>
			under the label <a href={jdgSharedUrls.pmxWebsite} target="_blank">Parametrix3D</a>.
		</JDGBodyCopy>
		<JDGBodyCopy textAlign="center" paddingBottom="0">
			<h3>SOFTWARE + SIMULATION</h3>
		</JDGBodyCopy>
		<JDGBodyCopy paddingTop="0">
			In 2015, I had the opportunity to move into the technology world, starting as a User
			Experience Designer for Autodesk's premier architectural 3D modeling software,&nbsp;<a
				href={jdgSharedUrls.adskFormIt}
				target="_blank">FormIt</a
			>. I helped build FormIt into a formidable competitor to SketchUp, eventually working my way
			into a Product Owner role.
			<br /><br />
			Today, I'm a Senior Product Manager building the next generation of Autodesk's 3D modeling and
			analysis software. I'm working to integrate FormIt's intuitive 3D modeling technology into a new
			app called <a href={jdgSharedUrls.adskForma} target="_blank">Forma</a>, evolving legacy
			software into a cutting-edge platform for sustainable design.
			<br /><br />
			I collaborate with full-stack development teams to create new features and improve workflows based
			on customer feedback, and I also test the software from a customer perspective - putting on my
			architecture hat to create fictional but realistic buildings to test our software.
			<br /><br />
			Working at Autodesk has allowed me to learn software development, where I started with learning
			JavaScript to create useful plugins for FormIt, and now I'm contributing to the source code base
			and strategizing on software engineering approaches based on customer needs.
			<br /><br />
			Coming full-circle, I'm currently working to preserve architectural history through technology
			with <a href={jdgSharedUrls.ccpWebsite} target="_blank">The Cinderella City Project</a>, where
			I'm harnessing my skills in 3D modeling and software development to create an interactive,
			historically-accurate simulation of the place that ignited my passion for architecture in the
			first place.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>

<style>
	h3 {
		margin: 0;
	}
</style>
