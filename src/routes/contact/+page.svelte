<script>
	import { JDGBodyCopy, JDGContentBoxFloating, JDGContentContainer } from 'jdg-ui-svelte';
	import SocialMedia from '../../components/SocialMedia.svelte';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title={'GET IN TOUCH'}
		subtitle={'Say hello, ask a question, make a comment'}
	>
		<JDGBodyCopy paddingTop="0" paddingBottom="0" textAlign="center">
			<h3>SOCIAL MEDIA</h3>
			<SocialMedia />
			<br />
			<br />
			<h3 style="margin-bottom: 10px;">CONTACT FORM</h3>
			<div style="display: flex; justify-content: center;">
				<iframe
					title="Contact Joshua Dean Goldstein"
					src="https://docs.google.com/forms/d/e/1FAIpQLSdaDSTRnBD0pYsOtxQE21axuPDNuYbxvpCEoST2pNOV8y-4BQ/viewform?embedded=true"
					width="640"
					height="817"
					frameborder="0"
					marginheight="0"
					marginwidth="0">Loading…</iframe
				>
			</div>
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
