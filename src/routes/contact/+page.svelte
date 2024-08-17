<script>
	import { JDGBodyCopy, JDGContentBoxFloating, JDGContentContainer } from 'jdg-ui-svelte';
	import SocialMedia from '../../components/SocialMedia.svelte';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating title={'GET IN TOUCH'}>
		<JDGBodyCopy paddingTop="0" paddingBottom="0" textAlign="center">
			Let's connect! You can reach me in a variety of ways:
			<br />
			<br />
			<h3>SOCIAL MEDIA</h3>
			<SocialMedia />
			<br />
			<br />
			<h3>CONTACT FORM</h3>
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
