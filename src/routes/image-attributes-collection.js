import { addCloudinaryUrlTransformation, instantiateObject } from 'jdg-ui-svelte/jdg-utils.js';
import jdgImageAttributes from 'jdg-ui-svelte/schemas/jdg-image-attributes.js';

// a map of all available images and their attributes
// new images with a caption must be added here
const imageAttributesCollection = {
	architecture_0: instantiateObject(jdgImageAttributes, {
		imgSrc: addCloudinaryUrlTransformation(
			'https://res.cloudinary.com/jdg-main/image/upload/v1720834645/jdg-website/architecture/architecture-0.jpg'
		),
		imgAlt: 'Architecture',
		imgCaption: 'Architecture'
	}),
	products_0: instantiateObject(jdgImageAttributes, {
		imgSrc: addCloudinaryUrlTransformation(
			'https://res.cloudinary.com/jdg-main/image/upload/v1720834651/jdg-website/products/products-0.jpg'
		),
		imgAlt: 'Products',
		imgCaption: 'Products'
	}),
	software_0: instantiateObject(jdgImageAttributes, {
		imgSrc: addCloudinaryUrlTransformation(
			'https://res.cloudinary.com/jdg-main/image/upload/v1720834658/jdg-website/software/software-0.jpg'
		),
		imgAlt: 'Software',
		imgCaption: 'Software'
	})
};

export default imageAttributesCollection;
