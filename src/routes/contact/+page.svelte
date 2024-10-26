<script>
	imageAttributesCollection;
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGIFrame,
		JDGUpNext
	} from 'jdg-ui-svelte';
	import SocialMedia from '../../components/SocialMedia.svelte';
	import imageAttributesCollection from '../image-attributes-collection';
	import { jdgSharedUrls } from 'jdg-ui-svelte/jdg-shared-strings.js';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating title={'GET IN TOUCH'} subtitle={'Questions? Comments?'}>
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
		item1ImageAttributes={imageAttributesCollection.arch.texas_lobby}
		item2Label={'ABOUT JOSH'}
		item2Href="/about"
		item2ImageAttributes={imageAttributesCollection.jdg_photo_2}
		item2ObjectPosition="right"
		item3Label="CINDERELLA CITY PROJECT"
		item3Href={jdgSharedUrls.ccpWebsite}
		item3ImageAttributes={imageAttributesCollection.swe.ccp_1}
	/>
</JDGContentContainer>

<style>
	.iframe-wrapper {
		width: 100%;
		margin-top: -40px;
	}
</style>
