import imageAttributesCollection from '../../image-attributes-collection';

export function load() {
	return {
		// override meta tags per-page
		meta: {
			title: 'Flood Middle School',
			description: 'Historic details hidden by a mid-century renovation',
			image: imageAttributesCollection.hst.fms_2012_broadway_northeast.imgSrc
		}
	};
}
