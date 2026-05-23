<script>
	import jdgSharedUrlsStore from 'jdg-ui-svelte/stores/jdg-shared-urls-store.js';
	import imageMetaRegistry from '../image-attributes-collection';
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGIFrame,
		JDGUpNext
	} from 'jdg-ui-svelte';
	import SocialMedia from '../../components/SocialMedia.svelte';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating title={'GET IN TOUCH'}>
		<JDGBodyCopy paddingTop="0" paddingBottom="0" textAlign="center">
			<h3>SOCIAL MEDIA</h3>
			<SocialMedia />
			<br />
			<br />
			<h3 style="margin-bottom: 10px;">CONTACT FORM</h3>
		</JDGBodyCopy>
		<div class="iframe-wrapper">
			<JDGIFrame
				title={'Contact Joshua Dean Goldstein'}
				src={'https://docs.google.com/forms/d/e/1FAIpQLSdaDSTRnBD0pYsOtxQE21axuPDNuYbxvpCEoST2pNOV8y-4BQ/viewform?embedded=true'}
				maxHeightPx="900"
			/>
		</div>
	</JDGContentBoxFloating>
	<JDGUpNext
		item1Label={'SEE ALL WORK'}
		item1Href={'/'}
		item1ImageAttributes={imageMetaRegistry.arch.texas_lobby}
		item2Label={'ABOUT JOSH'}
		item2Href="/about"
		item2ImageAttributes={imageMetaRegistry.jdg_photo_2}
		item2ObjectPosition="right"
		item3Label="CINDERELLA CITY PROJECT"
		item3Href={$jdgSharedUrlsStore.ccpWebsite}
		item3ImageAttributes={imageMetaRegistry.swe.ccp_1}
	/>
</JDGContentContainer>

<style>
	.iframe-wrapper {
		width: 100%;
		margin-top: -40px;
	}
</style>
