import imageMetaRegistry from '$lib/image-meta-registry';

export function load() {
	return {
		// override meta tags per-page
		meta: {
			title: 'Modern Texas Lobby',
			description: 'A contemporary take on Texas charm for a new tech office complex',
			image: imageMetaRegistry.arch.texas_lobby.imgSrc
		}
	};
}
