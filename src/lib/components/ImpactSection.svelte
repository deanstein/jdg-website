<script>
	import { JDGH3H4, JDGGridLayout } from 'jdg-ui-svelte';

	export let maxColumns = 3;
</script>

<div class="impact-container">
	<JDGH3H4 h3String="IMPACTS" />
	<div class="impact-content"></div>
	<JDGGridLayout {maxColumns}>
		<slot />
	</JDGGridLayout>
</div>

<style>
	.impact-container {
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 100%;
		align-items: center;
		justify-content: center;
		padding: 20px 0 20px 0;
	}
</style>
