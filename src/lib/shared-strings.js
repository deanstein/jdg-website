export const sharedStyles = {
	overlayColorDarkRgba: 'rgba(50, 50, 50, 0.8)'
};

export const sharedUrls = {
	websiteIconSrc:
		'https://res.cloudinary.com/jdg-main/image/upload/v1720834639/jdg-website/jdg-logo.jpg'
};

export const pageMeta = {
	get titleTemplate() {
		return '%s | ' + this.home.title;
	},
	home: {
		title: 'The Work of Joshua Dean Goldstein',
		description: 'Architecture, software, and products created by Joshua Dean Goldstein.'
	},
	arch: {
		random_school: {
			url: '/architecture/random-school'
		}
	},
	exp: {
		fms_campus: {
			title: 'Campus Village Adaptive Reuse',
			description: 'Micro mixed-use transforms a former school',
			url: '/architectural-experiments/fms-campus'
		}
	},
	hst: {
		flood_middle_school: {
			title: 'Flood Middle School',
			description: 'Uncovering history beneath a layer of brick',
			url: '/architectural-history/flood-middle-school'
		}
	}
};
