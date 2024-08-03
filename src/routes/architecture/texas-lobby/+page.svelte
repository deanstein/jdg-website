<script>
	import { JDGContentBoxFloating, JDGContentContainer, JDGImage } from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title="MODERN TEXAS LOBBY"
		subtitle="A contemporary take on Texas charm for a new tech office complex"
	>
		<JDGImage imageAttributes={imageAttributesCollection.arch.texas_lobby} maxHeight="600px" />
	</JDGContentBoxFloating>
</JDGContentContainer>
