import { pageMeta } from '$lib/shared-strings';
import imageAttributesCollection from '../../image-attributes-collection';

export const load = () => {
	// define page meta tags for social media previews
	const pageMetaTags = Object.freeze({
		title: pageMeta.exp.fms_campus.title,
		description: pageMeta.exp.fms_campus.description,
		openGraph: {
			title: pageMeta.exp.fms_campus.title,
			description: pageMeta.exp.fms_campus.description,
			images: [
				{
					url: imageAttributesCollection.exp.fms_campus_lawn.imgSrc,
					width: 800,
					height: 600,
					type: 'image/jpeg'
				}
			]
		}
	});
	return { pageMetaTags };
};
