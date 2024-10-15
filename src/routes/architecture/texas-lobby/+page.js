import imageAttributesCollection from '../../image-attributes-collection';

export function load() {
	return {
		// override meta tags per-page
		meta: {
			title: 'Modern Texas Lobby',
			description: 'A contemporary take on Texas charm for a new tech office complex',
			image: imageAttributesCollection.arch.texas_lobby.imgSrc
		}
	};
}
