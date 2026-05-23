import { pageMeta } from '$lib/shared-strings';
import imageMetaRegistry from '../../image-attributes-collection';

export const load = () => {
	// define page meta tags for social media previews
	const pageMetaTags = Object.freeze({
		title: pageMeta.hst.flood_middle_school.title,
		description: pageMeta.hst.flood_middle_school.description,
		openGraph: {
			title: pageMeta.hst.flood_middle_school.title,
			description: pageMeta.hst.flood_middle_school.description,
			images: [
				{
					url: imageMetaRegistry.hst.fms_2000_broadway_northeast.imgSrc,
					width: 800,
					height: 600,
					type: 'image/jpeg'
				}
			]
		}
	});
	return { pageMetaTags };
};
