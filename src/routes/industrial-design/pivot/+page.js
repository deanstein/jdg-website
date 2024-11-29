import { pageMeta } from '$lib/shared-strings';
import imageAttributesCollection from '../../image-attributes-collection';

export const load = () => {
	// define page meta tags for social media previews
	const pageMetaTags = Object.freeze({
		title: pageMeta.ind.pivot_chair.title,
		description: pageMeta.ind.pivot_chair.description,
		openGraph: {
			title: pageMeta.ind.pivot_chair.title,
			description: pageMeta.ind.pivot_chair.description,
			images: [
				{
					url: imageAttributesCollection.ind.pivot_model_1.imgSrc,
					width: 800,
					height: 600,
					type: 'image/jpeg'
				}
			]
		}
	});
	return { pageMetaTags };
};
