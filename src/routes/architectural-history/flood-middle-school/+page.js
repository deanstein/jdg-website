import imageAttributesCollection from '../../image-attributes-collection';

// export function load() {
// 	return {
// 		// override meta tags per-page
// 		meta: {
// 			title: 'Flood Middle School',
// 			description: 'Historic details hidden by a mid-century renovation',
// 			image: imageAttributesCollection.hst.fms_2012_broadway_northeast.imgSrc
// 		}
// 	};
// }

export const load = () => {
	const pageMetaTags = Object.freeze({
		title: 'Flood Middle School',
		description: 'Historic details hidden by a mid-century renovation',
		openGraph: {
			title: 'Flood Middle School',
			description: 'Historic details hidden by a mid-century renovation',
            images: [
				{
					url: imageAttributesCollection.hst.fms_2012_broadway_northeast.imgSrc,
					width: 800,
					height: 600,
					type: 'image/jpeg'
				}
			]
		}
	});
	return { pageMetaTags };
};
