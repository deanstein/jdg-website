<script>
	import {
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
				label={'ARCHITECTURE'}
				imgSrc="./architecture/architecture-0.jpg"
				labelContainerVerticalAlign="bottom"
				href="#ARCHITECTURE"
			/>
			<JDGImageTile
				label={'PRODUCTS'}
				imgSrc="./products/product-0.jpg"
				labelContainerVerticalAlign="bottom"
				href="#PRODUCTS"
			/>
			<JDGImageTile
				label={'SOFTWARE'}
				imgSrc="./software/software-0.jpg"
				labelContainerVerticalAlign="bottom"
				href="#SOFTWARE"
			/>
		</JDGGridLayout>
	</JDGContentBoxFloating>
	<JDGContentBoxFloating title={'ARCHITECTURE'}>
		<JDGGridLayout>
			<JDGImageTile label={'PROJECT 1'} />
			<JDGImageTile label={'PROJECT 2'} />
			<JDGImageTile label={'PROJECT 3'} />
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
