import imageAttributesCollection from '../../image-attributes-collection';

export const load = () => {
	// define page meta tags for social media previews
	const pageMetaTags = Object.freeze({
		title: 'Flood Middle School',
		description: 'Uncovering history beneath a layer of brick',
		openGraph: {
			title: 'Flood Middle School',
			description: 'Uncovering history beneath a layer of brick',
			images: [
				{
					url: imageAttributesCollection.hst.fms_2000_broadway_northeast.imgSrc,
					width: 800,
					height: 600,
					type: 'image/jpeg'
				}
			]
		}
	});
	return { pageMetaTags };
};
