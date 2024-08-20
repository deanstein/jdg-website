<script>
	import { JDGBodyCopy, JDGContentBoxFloating, JDGContentContainer, JDGImage } from 'jdg-ui-svelte';
	import imageAttributesCollection from '../image-attributes-collection';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating title={'NICE TO MEET YOU'}>
		<JDGBodyCopy paddingTop="0" paddingBottom="0">
			<span style="font-size: 30px;">I'm Josh.</span>
			<br /><br />
			<div style="display: flex;">
				<JDGImage
					imageAttributes={imageAttributesCollection.jdg_photo_1}
					maxHeight="200px"
					fillContainer={false}
					maxWidth="auto"
				/>
			</div>
			<br />
			I'm a maker and innovator with unique experience in the design and development of software, architecture,
			and physical products.
			<br /><br />
			By day, I'm a Senior Product Manager at
			<a href="https://www.autodesk.com" target="_blank">Autodesk</a>
			making the next generation of powerful 3D modeling, visualization, and analysis software for architects
			and designers everywhere. By night, I'm a software and simulation developer, product designer,
			and architectural historian.
			<br /><br />
			It's been a wild ride. Here's how I got here:
		</JDGBodyCopy>
		<JDGBodyCopy>
			<h3>ARCHITECTURAL DESIGN + HISTORY</h3>
			Growing up near Denver, Colorado, I witnessed vast changes to the metro area's urban character
			and retail landscape, igniting a passion for architectural design and urban planning.
			<br /><br />
			In particular, the demolition of a
			<a href="https://www.cinderellacityproject.com/about" target="_blank">giant shopping mall</a>
			brought me face-to-face with the waste of the architecture industry, and pushed me to a career
			designing better places for people and the environment.
			<br /><br />
			In high school, research and persistence led me to an internship with a Colorado real estate developer,
			where for two years I helped transform the former
			<a
				href="http://coloradocommunitymedia.com/stories/Making-Southglenn-history-Shopping-malls-fascinate-teen-architect,65797"
				target="_blank">Southglenn Mall</a
			>
			into a vibrant mixed-use town center for for the City of Centennial, Colorado.
			<br /><br />
			In design school, I created award-winning designs spanning architecture, planning, and furniture.
			I received my Master of Architecture degree at Kansas State University in 2013, where my thesis
			focused on revitalizing the Main Street of a Kansas town and creating a unique public space in
			the shell of an <a href="./architecture/random-school">abandoned building</a>.
			<br /><br />
			After graduation, I became an Associate at 505Design, where I created places uniquely designed
			for the people who would inhabit them, from retail developments and office buildings to public
			spaces and main streets. During my tenure, I introduced cutting-edge software to unlock new workflows
			at the firm - software which would prove critical for my next career evolution.
			<br /><br />
			<h3>INDUSTRIAL DESIGN + PROTOTYPING</h3>
			While working in the architecture field, I began harnessing visual scripting and generative design
			software to venture into physical product design.
			<br /><br />
			Rather than manually modeling each design, visual scripting allows for parametric design, where
			adjusting one parameter propagates to the entire design, making cascading adjustments easier than
			ever.
			<br /><br />
			Treating the designs as software, each product was catalogued with variants and versions printed
			on each product, for validation and tracking in the wild.
			<br /><br />
			<h3>SOFTWARE + SIMULATION</h3>
			In 2015, I had the opportunity to move into the technology world, starting as a User Experience
			Designer for Autodesk FormIt.
			<br /><br />
			Today, I collaborate with full-stack development teams to create new features and improve workflows
			in Autodesk 3D modeling platforms, including FormIt and Forma. Josh helps prioritize development
			efforts based on customer feedback and interaction, tests the software from a customer perspective,
			and also contributes directly to the product by writing code, authoring documentation, and building
			sample datasets. In the architecture world, he led design teams, managed clients, and executed
			projects that connected people and place.
			<br /><br />
			In his free time, Josh is working to preserve architectural history through technology. He created
			The Cinderella City Project, combining his skills in 3D modeling and software development to create
			an interactive, historically-accurate simulation of the mid-century modern shopping center known
			as Cinderella City in Englewood, Colorado, which was demolished in 1998. Josh is also the Secretary
			of Historic Englewood, a 501(c)(3) organization that aims to preserve the history of Englewood.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
