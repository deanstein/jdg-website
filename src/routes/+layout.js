import { sharedStrings } from '$lib/shared-strings.js';
import imageAttributesCollection from './image-attributes-collection.js';

export const prerender = true;

export const load = ({ url }) => {
	// define meta tags that will apply site-wide
	// these may be overridden with +page.js next to any +page.svelte
	const baseMetaTags = Object.freeze({
		title: sharedStrings.websiteTitle,
		titleTemplate: '%s | ' + sharedStrings.websiteTitle,
		description: sharedStrings.websiteDescription,
		canonical: new URL(url.pathname, url.origin).href,
		openGraph: {
			type: 'website',
			url: new URL(url.pathname, url.origin).href,
			title: sharedStrings.websiteTitle,
			description: sharedStrings.websiteDescription,
			images: [
				{
					url: imageAttributesCollection.swe.ccp_construction_60s70s_blue_mall_columns_ceiling
						.imgSrc,
					width: 800,
					height: 600,
					type: 'image/jpeg'
				}
			]
		}
	});
	return { baseMetaTags };
};
