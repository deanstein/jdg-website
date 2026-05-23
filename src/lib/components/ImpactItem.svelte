<script>
	import { css } from '@emotion/css';
	import { adjustColorForContrast, appAccentColors, jdgColors } from 'jdg-ui-svelte';

	export let faIcon = 'fa-burst';
	export let impactNumber;
	export let impactDescription;

	const impactAccentCss = css`
		color: ${adjustColorForContrast($appAccentColors[0], jdgColors.contentBoxBackground, 3)};
	`;
</script>

<div class="impact-item">
	<div class="impact-number {impactAccentCss}">
		<i class="fa-solid {faIcon}" />&nbsp;{impactNumber}
	</div>
	<div class="impact-description">{impactDescription}</div>
</div>

<style>
	.impact-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.impact-number {
		font-size: 30px;
		font-weight: bold;
		margin-bottom: -5px;
	}

	.impact-description {
		font-size: 15px;
	}
</style>
