import imageAttributesCollection from '../../image-attributes-collection';

export const load = () => {
    // define page meta tags for social media previews
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
