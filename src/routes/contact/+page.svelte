<script>
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGIFrame
	} from 'jdg-ui-svelte';
	import SocialMedia from '../../components/SocialMedia.svelte';
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
			/>
		</div>
	</JDGContentBoxFloating>
</JDGContentContainer>

<style>
	.iframe-wrapper {
		width: 100%;
		margin-top: -40px;
	}
</style>
