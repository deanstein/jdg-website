import { jdgSharedStrings } from 'jdg-ui-svelte/jdg-shared-strings.js';
import { addCloudinaryUrlTransformation, instantiateObject } from 'jdg-ui-svelte/jdg-utils.js';
import jdgImageAttributes from 'jdg-ui-svelte/schemas/jdg-image-attributes.js';

// temporary - needs to be moved to jdg-ui-svelte
// @ts-expect-error
export const postProcessImageAttributes = (jdgImageAttributes) => {
	// imgAlt is likely the same as imgCaption, unless already specified
	if (jdgImageAttributes.imgCaption && !jdgImageAttributes.imgAlt) {
		jdgImageAttributes.imgAlt = jdgImageAttributes.imgCaption;
	}
	return jdgImageAttributes;
};

// a map of all available images and their attributes
// new images with a caption must be added here
const imageAttributesCollection = {
	arch: {
		atc_elevator: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721238891/jdg-website/arch/atc-elevator.jpg'
				)
			})
		),
		atc_escalator: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721238899/jdg-website/arch/atc-escalator.jpg'
				)
			})
		),
		atc_food_court: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721238895/jdg-website/arch/atc-food-court.jpg'
				)
			})
		),
		bayou_mixed_use_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721190776/jdg-website/arch/bayou-mixed-use-1.jpg'
				)
			})
		),
		bayou_mixed_use_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721190775/jdg-website/arch/bayou-mixed-use-2.jpg'
				)
			})
		),
		bayou_mixed_use_3: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721190778/jdg-website/arch/bayou-mixed-use-3.jpg'
				)
			})
		),
		bayou_mixed_use_4: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721190780/jdg-website/arch/bayou-mixed-use-4.jpg'
				)
			})
		),
		beach_chic_aerial: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721195652/jdg-website/arch/beach-chic-aerial.jpg'
				)
			})
		),
		beach_chic_concourse: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721195659/jdg-website/arch/beach-chic-concourse.jpg'
				)
			})
		),
		beach_chic_towers: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721195656/jdg-website/arch/beach-chic-tower.jpg'
				)
			})
		),
		fairgrounds_aerial: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721195162/jdg-website/arch/fairgrounds-aerial.jpg'
				)
			})
		),
		fairgrounds_fountain: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721195166/jdg-website/arch/fairgrounds-fountain.jpg'
				)
			})
		),
		fairgrounds_park: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721195168/jdg-website/arch/fairgrounds-park.jpg'
				)
			})
		),
		fairgrounds_river: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721195172/jdg-website/arch/fairgrounds-river.jpg'
				)
			})
		),
		gritty_bbq_option_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721237165/jdg-website/arch/gritty-bbq-option-2.jpg'
				)
			})
		),
		gritty_bbq_option_3: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721237169/jdg-website/arch/gritty-bbq-option-3.jpg'
				)
			})
		),
		gritty_bbq_option_5: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721237173/jdg-website/arch/gritty-bbq-option-5.jpg'
				)
			})
		),
		hp_library_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1725930497/jdg-website/arch/hp-library-1.jpg'
				)
			})
		),
		mindful_campus_aerial: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721194603/jdg-website/arch/mindful-campus-aerial.jpg'
				)
			})
		),
		mindful_campus_boulevard: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721194614/jdg-website/arch/mindful-campus-boulevard.jpg'
				)
			})
		),
		mindful_campus_boulevard_close: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721194610/jdg-website/arch/mindful-campus-boulevard-close.jpg'
				)
			})
		),
		mindful_campus_plaza: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721194607/jdg-website/arch/mindful-campus-plaza.jpg'
				)
			})
		),
		mindful_multifamily: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721238058/jdg-website/arch/mindful-multifamily.jpg'
				)
			})
		),
		mindful_multifamily_close: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721238061/jdg-website/arch/mindful-multifamily-close.jpg'
				)
			})
		),
		mindful_multifamily_highway: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721238054/jdg-website/arch/mindful-multifamily-highway.jpg'
				)
			})
		),
		old_orchard_close: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721193084/jdg-website/arch/old-orchard-close.jpg'
				)
			})
		),
		old_orchard_covered: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721193090/jdg-website/arch/old-orchard-covered.jpg'
				)
			})
		),
		old_orchard_outside: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721193086/jdg-website/arch/old-orchard-outside.jpg'
				)
			})
		),
		otc_below: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721192359/jdg-website/arch/otc-below.jpg'
				)
			})
		),
		otc_column: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721192352/jdg-website/arch/otc-column.jpg'
				)
			})
		),
		otc_far: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721192357/jdg-website/arch/otc-far.jpg'
				)
			})
		),
		otc_rendering: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721192362/jdg-website/arch/otc-rendering.png'
				)
			})
		),
		otc_seating: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721192355/jdg-website/arch/otc-seating.jpg'
				)
			})
		),
		random_school_aerial: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721193919/jdg-website/arch/random-school-aerial.jpg'
				)
			})
		),
		random_school_before_exterior: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721193912/jdg-website/arch/random-school-before-exterior.jpg'
				)
			})
		),
		random_school_before_walkway: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721193922/jdg-website/arch/random-school-before-walkway.jpg'
				)
			})
		),
		random_school_canopy: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721193926/jdg-website/arch/random-school-canopy.jpg'
				)
			})
		),
		random_school_diagram_construction: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1726278684/jdg-website/arch/random-school-diagram-construction.png'
				)
			})
		),
		random_school_play: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721193929/jdg-website/arch/random-school-play.jpg'
				)
			})
		),
		random_school_terrace: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721193932/jdg-website/arch/random-school-terrace.jpg'
				)
			})
		),
		texas_lobby: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721191975/jdg-website/arch/texas-lobby.jpg'
				)
			})
		)
	},
	exp: {
		broadway_southwest_before_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721173132/jdg-website/exp/broadway-southwest-before-1.jpg'
				),
				imgCaption:
					"Built in 1985 as the Broadway Southwest, the department store later became May D&F and then Foley's before Cinderella City closed in 1997."
			})
		),
		broadway_southwest_before_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721173134/jdg-website/exp/broadway-southwest-before-2.jpg'
				),
				imgCaption:
					'After Cinderella City was demolished in 1998, the former department store was saved and converted into the Englewood Civic Center.'
			})
		),
		broadway_southwest_concept_1_aerial: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721176141/jdg-website/exp/broadway-southwest-concept-1-aerial.jpg'
				),
				imgCaption: 'An aerial showing Concept 1 and its design intent.'
			})
		),
		broadway_southwest_concept_1_market: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721176149/jdg-website/exp/broadway-southwest-concept-1-market.jpg'
				),
				imgCaption: "A farmer's market takes place in the east paseo."
			})
		),
		broadway_southwest_concept_1_promenade: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721176151/jdg-website/exp/broadway-southwest-concept-1-promenade.jpg'
				),
				imgCaption:
					'A terraced promenade replaces the former parking garage, providing much-needed greenery and open space in front of the building.'
			})
		),
		broadway_southwest_concept_2_aerial: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721176142/jdg-website/exp/broadway-southwest-concept-2-aerial.jpg'
				),
				imgCaption: 'An aerial showing Concept 1 and its design intent.'
			})
		),
		broadway_southwest_concept_2_passage: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721176145/jdg-website/exp/broadway-southwest-concept-2-passage.jpg'
				),
				imgCaption:
					"The new passageway could serve as a connection to the site's history, educating visitors about the park and mall that preceded the Civic Center."
			})
		),
		broadway_southwest_concept_2_promenade: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721176146/jdg-website/exp/broadway-southwest-concept-2-promenade.jpg'
				),
				imgCaption:
					'A terraced promenade replaces the former parking garage, providing much-needed greenery and open space in front of the building.'
			})
		),
		corporate_showroom_before: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721076292/jdg-website/exp/1551-wewatta-before.jpg'
				),
				imgCaption:
					'The existing building at 15th Street and Delgany is beige, boring, and corporate.'
			})
		),
		corporate_showroom_corner: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721076293/jdg-website/exp/1551-wewatta-corner.jpg'
				),
				imgCaption:
					'The new showroom and cafe adds amenities like a fireplace, improved materials, and a more pedestrian scale to the intersection.'
			})
		),
		corporate_showroom_elevation: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721076292/jdg-website/exp/1551-wewatta-elevation.jpg'
				),
				imgCaption: 'The new showroom and cafe as seen through an orthographic elevation view.'
			})
		),
		encode_campus_after: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721170481/jdg-website/exp/encode-campus-after.jpg'
				),
				imgCaption:
					'An urban plaza anchors the new building design in the foreground, bookended by modernized existing brick buildings on either side..'
			})
		),
		fifteen_platte_dynamo: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721180332/jdg-website/exp/fifteen-platte-dynamo.jpg'
				),
				imgCaption:
					'FormIt and Dynamo working together to iterate on the exterior structural column design.'
			})
		),
		fifteen_platte_grayscale: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721180328/jdg-website/exp/fifteen-platte-grayscale.jpg'
				),
				imgCaption: 'Eliminating the materials and colors for a shading study.'
			})
		),
		fifteen_platte_sunset: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721180328/jdg-website/exp/fifteen-platte-sunset.jpg'
				),
				imgCaption:
					'A glassy office building gets some shade from extended floor plates and some style thanks to the angled exterior columns.'
			})
		),
		fms_campus_before_aerial: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721091660/jdg-website/exp/fms-campus-before-aerial.jpg'
				),
				imgCaption: 'An abandoned Flood Middle School is seen from above in 2013.'
			})
		),
		fms_campus_before_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721073616/jdg-website/exp/fms-campus-before-1.jpg'
				),
				imgCaption: 'Flood Middle School as it appeared from Broadway during demolition in 2013.'
			})
		),
		fms_campus_before_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721073611/jdg-website/exp/fms-campus-before-2.jpg'
				),
				imgCaption: 'The northwest corner of Flood Middle School during abandonment in 2013.'
			})
		),
		fms_campus_before_3: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721073613/jdg-website/exp/fms-campus-before-3.jpg'
				),
				imgCaption:
					'The southeast corner of Flood Middle School at Lincoln and Kenyon as seen during abandonment in 2013.'
			})
		),
		fms_campus_before_4: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721073614/jdg-website/exp/fms-campus-before-4.jpg'
				),
				imgCaption:
					'The northeast corner of Flood Middle School as seen during abandonment in 2013.'
			})
		),
		fms_campus_aerial: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721090862/jdg-website/exp/fms-campus-aerial.jpg'
				),
				imgCaption:
					'The main school building is repurposed to include walk-up townhomes in the central wing, restaurants in the former auditorium on the right, retail in the former gym on the left, and a new hotel in the back.'
			})
		),
		fms_campus_lawn: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721073527/jdg-website/exp/fms-campus-lawn.jpg'
				),
				imgCaption:
					'The main building of the school is kept and repurposed to include walk-up townhomes in the central wing, restaurants in the former auditorium on the right, retail in the former gym on the left, and a new hotel in the back.'
			})
		),
		fms_campus_kenyon_corner: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721073526/jdg-website/exp/fms-campus-kenyon-corner.jpg'
				),
				imgCaption:
					'At the intersection of Kenyon and Lincoln, the former middle school entrance becomes a common entrance for the back of the walk-up townhomes. The hotel can be seen on the right.'
			})
		),
		fms_campus_massing: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721106934/jdg-website/exp/fms-campus-massing.jpg'
				),
				imgCaption:
					'One possible reuse option is a mix of retail (red), office (green), townhomes (pink), apartments (teal), and hotel (gold).'
			})
		),
		fms_campus_plaza: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721073530/jdg-website/exp/fms-campus-plaza.jpg'
				),
				imgCaption:
					"The school's largest gym is demolished on the northwest corner to make room for a pedestrian paseo, overlooked by the original small gymnasium which has been converted to boutique office and retail."
			})
		),
		fms_campus_paseo: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721073528/jdg-website/exp/fms-campus-paseo.jpg'
				),
				imgCaption:
					'A new hotel augments the existing building, providing nearly 100 rooms and adding scale to the northeast corner of the school. A new paseo on the north side provides a shady plaza for food trucks and informal outdoor dining.'
			})
		),
		fms_campus_south_wing: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721073531/jdg-website/exp/fms-campus-south-wing.jpg'
				),
				imgCaption:
					'On the south side of the school, an existing two-floor wing is transformed into walk-up townhomes.'
			})
		),
		o2_research: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721184331/jdg-website/exp/o2-research-lobby.jpg'
				),
				imgCaption: 'A spacious and curvacious lobby, with ample foliage and gathering spaces.'
			})
		),
		ranch_elsie_option_3: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721182476/jdg-website/exp/ranch-elsie-option-3.jpg'
				),
				imgCaption:
					'The layout takes advantage of the natural site topography, and the roof design was the result of computational design in Autodesk FormIt and Dynamo.'
			})
		),
		ranch_elsie_roof_optioneering: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721182479/jdg-website/exp/ranch-elsie-roof-optioneering.gif'
				),
				imgCaption:
					'Quick roof optioneering studies made possible by the integration between Autodesk FormIt and Autodesk Dynamo.'
			})
		),
		sixteen_pearl_before: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721154488/jdg-website/exp/sixteen-pearl-before.jpg'
				),
				imgCaption: 'The original apartment building in 2015.'
			})
		),
		sixteen_pearl_corner: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721154489/jdg-website/exp/sixteen-pearl-corner.jpg'
				),
				imgCaption:
					'New 3-story walk-up townhomes fit within the original building, with an added rooftop deck and outdoor spaces on each level.'
			})
		),
		sixteen_pearl_interior: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721154489/jdg-website/exp/sixteen-pearl-interior.jpg'
				),
				imgCaption:
					'A bright, glassy stairwell provides vertical access and brightens spaces throughout the units and building.'
			})
		),
		sixteen_pearl_terrace: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721154489/jdg-website/exp/sixteen-pearl-terrace.jpg'
				),
				imgCaption: 'Exterior spaces are added on the front and roof of each unit.'
			})
		),
		speer_point_before: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721164768/jdg-website/exp/speer-point-before.jpg'
				),
				imgCaption: 'The original building at 10th and Speer in Denver.'
			})
		),
		speer_point_after: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1721164767/jdg-website/exp/speer-point-after.jpg'
				),
				imgCaption:
					'The alternate use scheme includes artist studios, a cafe, a restaurant, and event space.'
			})
		)
	},
	hst: {
		ccm_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1716962799/ccp-website/blue-mall/blue-mall-60s70s-2_vy6cnk.jpg'
				),
				imgCaption: 'Cinderella City Mall.'
			})
		),
		ccm_demolition: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962800/ccp-website/blue-mall/blue-mall-80s90s-demolition-1_k7jfp2.jpg'
				),
				imgCaption: 'Cinderella City Mall being demolished in 1998.'
			})
		),
		ccp_blue_mall_60s70s_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962805/ccp-website/ccp/blue-mall-60s70s-1_v1lga0.png'
				),
				imgCaption: "Cinderella City's Blue Mall as simulated between 1968 and 1978."
			})
		),
		ccp_blue_mall_80s90s_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962805/ccp-website/ccp/blue-mall-80s90s-1_xocsmu.png'
				),
				imgCaption: "Cinderella City's Blue Mall as simulated between 1987 and 1997."
			})
		),
		ehs_1919_plan: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722737633/jdg-website/hst/ehs-1919-plan.png'
				),
				imgCaption: "Englewood High School's original layout in 1919.",
				imgAttribution: 'Englewood Public Library',
				allowBackgroundBlur: false
			})
		),
		ehs_1920_broadway_northeast: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722729966/jdg-website/hst/ehs-1920-broadway-northeast.jpg'
				),
				imgCaption:
					'Englewood High School viewed from Broadway in 1920, a year after it was constructed.',
				imgAttribution: 'Englewood Public Library'
			})
		),
		ehs_1930s_auditorium_interior: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722820392/jdg-website/hst/ehs-1930s-auditorium-interior.jpg'
				),
				imgCaption: 'The auditorium as it appeared in the 1930s.',
				imgAttribution: 'Getty Images'
			})
		),
		ehs_1936_southeast_wing: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722745253/jdg-website/hst/ehs-1936-southeast-wing.jpg'
				),
				imgCaption:
					'The south wing under construction in 1936. This would become the main entrance of Flood Junior High in the 1960s.',
				imgAttribution: 'Englewood Public Library'
			})
		),
		ehs_1940s_aerial_northwest: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722738421/jdg-website/hst/ehs-1940s-aerial-northwest.jpg'
				),
				imgCaption:
					'Englewood High School is shown in the 1940s with the new south and north wings.',
				imgAttribution: 'Englewood Public Library'
			})
		),
		ehs_1940s_broadway_southeast: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722836640/jdg-website/hst/ehs-1940s-broadway-southeast.jpg'
				),
				imgCaption:
					'The original gymnasium and partial north wing are seen in the 1940s from Broadway.',
				imgAttribution: 'Getty Images'
			})
		),
		ehs_1950s_broadway_entrance: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722747056/jdg-website/hst/ehs-1950s-broadway-entrance.jpg'
				),
				imgCaption: 'The original main entrance of Englewood High School as seen in the 1950s.',
				imgAttribution: 'Englewood Public Library'
			})
		),
		fms_1964_classroom: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722828732/jdg-website/hst/fms_1964_classroom.jpg'
				),
				imgCaption: 'A typical classroom in an unrenovated wing in 1964.',
				imgAttribution: '1964 Flood Junion High School Yearbook'
			})
		),
		fms_1960s_broadway_entrance: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722747053/jdg-website/hst/fms-1960s-broadway-entrance.jpg'
				),
				imgCaption:
					'After the 1960s remodel, little remains of the former grand entrance off of Broadway.',
				imgAttribution: 'Englewood Public Library'
			})
		),
		fms_1960s_broadway_entrance_renovation: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722747336/jdg-website/hst/fms-1960s-broadway-entrance-renovation.jpg'
				),
				imgCaption:
					"In 1965, crews began to remove ornate architectural details around the former entrance to match the district's new architectural standards.",
				imgAttribution: 'Englewood Public Library'
			})
		),
		fms_1960s_courtyard_renovation: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722739369/jdg-website/hst/fms-1960s-courtyard-renovation.jpg'
				),
				imgCaption:
					'Renovations begin in the courtyard, where a new semi-circular library would be added.',
				imgAttribution: 'Getty Images'
			})
		),
		fms_1967_band_room_construction: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722832940/jdg-website/hst/fms-1967-band-room-construction.jpg'
				),
				imgCaption:
					'A new band room is constructed in 1967 against the south wing and auditorium. Notice the original building detailing still visible in the background.',
				imgAttribution: 'Getty Images'
			})
		),
		fms_1967_east_side: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722745769/jdg-website/hst/fms-1967-east-side.jpg'
				),
				imgCaption:
					"The new connector wing and new entrance attached to the south wing. Note the south wing's original architecture on the left.",
				imgAttribution: 'Englewood Public Library'
			})
		),
		fms_1967_north_wing_renovation: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722835704/jdg-website/hst/fms-1967-north-wing-renovation.jpg'
				),
				imgCaption:
					'The north wing is renovated to match the rest of the newly-modernized building.',
				imgAttribution: 'Getty Images'
			})
		),
		fms_1968_southeast_corner_entrance: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722746162/jdg-website/hst/fms-1968-southeast-corner-entrance.jpg'
				),
				imgCaption:
					'The renovated south wing, new east wing, and new junior high school main entrance in the 1960s.',
				imgAttribution: 'Englewood Public Library'
			})
		),
		fms_2000_broadway_northeast: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722742061/jdg-website/hst/fms-2000-broadway-northeast.jpg'
				),
				imgCaption:
					'Flood Middle School as seen in 2000 from Broadway. Its simplistic shell obscures a more ornate building underneath.',
				imgAttribution: 'Englewood Public Library'
			})
		),
		fms_2000s_plan_additions: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722737633/jdg-website/hst/fms-2000s-plan-additions.png'
				),
				imgCaption: 'The school complex became a mess of additions and renovations by the 2000s.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName,
				allowBackgroundBlur: false
			})
		),
		fms_2007_auditorium_interior: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722820396/jdg-website/hst/fms-2007-auditorium-interior.jpg'
				),
				imgCaption: 'The auditorium after the school had been abandoned in 2007.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2007_classroom: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722829903/jdg-website/hst/fms_2007_classroom.jpg'
				),
				imgCaption: 'A typical classroom shortly after abandonment in 2007.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2007_east_wing_l1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1729216980/jdg-website/hst/fms-2007-east-wing-l1.jpg'
				),
				imgCaption:
					'The east wing, which was added to the building in 1963, and its connection to the 1936 wing, which contains the attendance office seen on the right.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2010s_aerial_northwest: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722738422/jdg-website/hst/fms-2010s-aerial-northwest.png'
				),
				imgCaption: 'Flood Middle School in the 2010s.',
				imgAttribution: 'Bing Maps'
			})
		),
		fms_2012_aerial_outline: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722738424/jdg-website/hst/fms-2012-aerial-outline.png'
				),
				imgCaption:
					'The original Englewood High School (yellow) was augmented many times since 1919, creating an eclectic complex eventually known as Flood Middle School.',
				imgAttribution: 'Bing Maps'
			})
		),
		fms_2012_broadway_southeast: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722836635/jdg-website/hst/fms-2012-broadway-southeast.jpg'
				),
				imgCaption:
					'Flood Middle School in 2012 from Broadway. The "Large Gym" on the left was added in the 1970s, connecting to the original gym which was now known as the "Small Gym."',
				imgAttribution: 'Google'
			})
		),
		fms_2012_courtyard_southwest: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722739371/jdg-website/hst/fms-2012-courtyard-southwest.jpg'
				),
				imgCaption:
					'The courtyard as seen in 2012. Note the evidence of windows filled in, and signs of original brick detailing just under the roof line.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2012_east_wing_l1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1729216984/jdg-website/hst/fms-2012-east-wing-l1.jpg'
				),
				imgCaption: 'The vandalized east wing in 2012, about a year before demolition.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2012_entrance_interior: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1729218728/jdg-website/hst/fms-2012-entrance-interior.jpg'
				),
				imgCaption: 'The main entrance seen vandalized in 2012.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2012_southeast_corner_entrance: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1729216308/jdg-website/hst/fms-2012-southeast-corner-entrance.jpg'
				),
				imgCaption:
					"Flood Middle School's main entrance on the southeast corner in 2012, about a year before demolition.",
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2012_west_stairs: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1729219311/jdg-website/hst/fms-2012-west-stairs.jpg'
				),
				imgCaption:
					'The west side of Flood Middle School which faced Broadway and is the oldest wing, built in 1919.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_broadway_northeast: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722729966/jdg-website/hst/fms-2013-broadway-northeast.jpg'
				),
				imgCaption:
					"Flood Middle School's simplistic shell concealed the original Englewood High School building below it, as seen from Broadway during demolition in 2013.",
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_auditorium_interior_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722824936/jdg-website/hst/fms-2013-demo-auditorium-interior-1.jpg'
				),
				imgCaption: 'The auditorium roof collapses during demolition.',
				imgAttribution: 'Julie Klusener'
			})
		),
		fms_2013_demo_auditorium_interior_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722825917/jdg-website/hst/fms-2013-auditorium-demo-interior-2.jpg'
				),
				imgCaption:
					'The original auditorium windows and moldings can be seen exposed during demolition. Even the original curtain hooks remain.',
				imgAttribution: 'Julie Klusener'
			})
		),
		fms_2013_demo_auditorium_interior_3: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722825914/jdg-website/hst/fms-2013-auditorium-demo-interior-3.jpg'
				),
				imgCaption:
					'Auditorium demolition reveals the trusses and windows hidden behind the false ceilings and walls.',
				imgAttribution: 'Julie Klusener'
			})
		),
		fms_2013_demo_auditorium_interior_4: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722826544/jdg-website/hst/fms-2013-auditorium-demo-interior-4.jpg'
				),
				imgCaption:
					'Light cascades into the rear of the auditorium as the front is demolished in 2013.',
				imgAttribution: 'Julie Klusener'
			})
		),
		fms_2013_demo_basement_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723526226/jdg-website/hst/fms-2013-demo-basement-1.jpg'
				),
				imgCaption: 'The basement near the former tech arts room during demolition.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_basement_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723527807/jdg-website/hst/fms-2013-demo-basement-2.jpg'
				),
				imgCaption:
					'A basement-level locker room with glass offices is seen as the spaces above it are demolished in 2013',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_brickwork_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722811907/jdg-website/hst/fms-2013-demo-brickwork-1.jpg'
				),
				imgCaption:
					'Demolition of the south wing reveals the original brickwork below the aluminum panels near the roof.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_brickwork_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722819450/jdg-website/hst/fms-2013-demo-brickwork-2.jpg'
				),
				imgCaption:
					'The north wing, built in 1926, is seen during demolition. Walls that faced into the courtyard were inexpensively patched, revealing original brickwork and windows.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_brickwork_3: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723525080/jdg-website/hst/fms-2013-demo-brickwork-3.jpg'
				),
				imgCaption:
					'The original brickwork and window sill are seen on the auditorium wall, beneath the layer of brick added in the 1960s.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_brickwork_4: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723526859/jdg-website/hst/fms-2013-demo-brickwork-4.jpg'
				),
				imgCaption: 'Layers of brick are seen at the junction of the original gym and the new gym.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_ceiling_fixture_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723526142/jdg-website/hst/fms-2013-demo-ceiling-fixture-1.jpg'
				),
				imgCaption: 'Demolition reveals the original ceiling with a light fixture in the basement.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_ceiling_fixture_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723526552/jdg-website/hst/fms-2013-demo-ceiling-fixture-2.jpg'
				),
				imgCaption:
					'A ceiling fixture hangs precariously from a basement ceiling as the upper levels are demolished above it.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_chimney: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723527069/jdg-website/hst/fms-2013-demo-chimney.jpg'
				),
				imgCaption:
					'The chimney from the school boilers is seen partially collapsed as the original 1919 wing is demolished.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_classroom_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723526457/jdg-website/hst/fms-2013-demo-classroom-1.jpg'
				),
				imgCaption: 'A first-floor classroom in the 1919 wing is partially demolished.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_detail_cornice: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723526020/jdg-website/hst/fms-2013-demo-detail-cornice.jpg'
				),
				imgCaption: 'The original cornice is seen from 1919 at the former main entrance location.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_hallway_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723525726/jdg-website/hst/fms-2013-demo-hallway-1.jpg'
				),
				imgCaption: 'A collapsing first-level corridor in the original 1919 wing.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_hallway_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723526350/jdg-website/hst/fms-2013-demo-hallway-2.jpg'
				),
				imgCaption:
					'A desk awaits its impending doom on the first floor of the original 1919 wing.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_hallway_3: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723527625/jdg-website/hst/fms-2013-demo-hallway-3.jpg'
				),
				imgCaption:
					'A first-floor hallway in the original 1919 wing open at the end to the elements during demolition in 2013.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_hallway_lockers_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723525908/jdg-website/hst/fms-2013-demo-hallway-lockers-1.jpg'
				),
				imgCaption: 'A second-floor corridor in the original 1919 wing ends abruptly.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_large_gym: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723526781/jdg-website/hst/fms-2013-demo-large-gym.jpg'
				),
				imgCaption:
					'The gymnasium appended to the original building in the 1970s is seen after the rest of the complex was demolished.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_library_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723525519/jdg-website/hst/fms-2013-demo-library-1.jpg'
				),
				imgCaption:
					'The lower level of the library stands with the upper portion collapsed above, with the overhang of the 1960s-era wing seen above. In the background, the wood trusses of the auditorium roof can be seen.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_lincoln: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723527230/jdg-website/hst/fms-2013-demo-lincoln.jpg'
				),
				imgCaption: 'Demolition of the school as seen from the grassy field to the east.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_window_sizes: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723526986/jdg-website/hst/fms-2013-demo-window-sizes.jpg'
				),
				imgCaption:
					'The west wall facing Broadway is seen from behind. Note the original window headers revealing the window size prior to renovation.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_demo_wood_floors: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723524640/jdg-website/hst/fms-2013-demo-wood-floor.jpg'
				),
				imgCaption:
					'The wood floors of the original Englewood High School building fall to the rubble.',
				imgAttribution: jdgSharedStrings.jdgCopyrightName
			})
		),
		fms_2013_north_wing: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1722835719/jdg-website/hst/fms-2013-north-wing.jpg'
				),
				imgCaption: 'The north wing as it appeared shortly before demolition in 2013.',
				imgAttribution: 'Julie Klusener'
			})
		),
		sas_rendering_aerial: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1724391251/jdg-website/hst/sas_rendering_aerial.jpg'
				),
				imgCaption: 'An aerial rendering of the Streets at SouthGlenn redevelopment.',
				imgAttribution: 'Alberta Development Partners'
			})
		)
	},
	ind: {
		gh_script_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1725918467/pmx-website/gh-script-1.jpg'
				),
				imgCaption:
					'A Grasshopper script which uses nodes and connections to create a flexible set of instructions which generate a final 3D model.'
			})
		),
		product_line_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1725919763/pmx-website/product-line-1.jpg'
				),
				imgCaption:
					'A Grasshopper script which uses nodes and connections to create a flexible set of instructions that generates a final 3D model.'
			})
		),
		planter_003F_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723693178/pmx-website/003F-0.jpg'
				),
				imgCaption: 'Advanced Planter'
			})
		),
		planter_003F_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1726422539/pmx-website/003F-1.jpg'
				),
				imgCaption: 'Advanced Planter'
			})
		),
		kitchen_caddy_007F_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723696902/pmx-website/007F-0.jpg'
				),
				imgCaption: 'Kitchen Caddy'
			})
		),
		pen_holder_008I_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723693771/pmx-website/008I-0.jpg'
				),
				imgCaption: 'Pen Holder'
			})
		),
		card_holder_015C_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723694838/pmx-website/015C-0.jpg'
				),
				imgCaption: 'Business Card Holder'
			})
		),
		cityscape_021A_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723693930/pmx-website/021A-0.jpg'
				),
				imgCaption: 'Denver Cityscape'
			})
		),
		coaster_028A_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723696691/pmx-website/028A-0.jpg'
				),
				imgCaption: 'Denver Map Coaster'
			})
		),
		puzzle_decor_030A_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723693838/pmx-website/030A-0.jpg'
				),
				imgCaption: 'Puzzle Decor'
			})
		),
		grinder_039A_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723696392/pmx-website/039A-0.jpg'
				),
				imgCaption: 'Herb Grinder'
			})
		),
		den_co_magnets_047BC_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723695383/pmx-website/047BC-0.jpg'
				),
				imgCaption: 'DEN/CO Magnets'
			})
		),
		co_topo_magnet_047D_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723695588/pmx-website/047D-0.jpg'
				),
				imgCaption: 'Colorado Topography Magnet'
			})
		)
	},
	swe: {
		ccp_1: instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1716962800/ccp-website/ccp/ccp-composite-2.jpg'
			),
			imgCaption:
				'A composite image of two different time periods of a mid-century modern shopping center, powered by Unity.'
		}),
		ccp_construction_60s70s_blue_mall_columns_ceiling: instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1727628674/ccp-website/ccp/ccp-construction-60s70s-blue-mall-columns-ceiling.jpg'
			),
			imgCaption:
				'A composite image of a FormIt model with a Dynamo graph and the Unity simulation.'
		}),
		ccp_construction_unity_npc_1: instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1727629734/ccp-website/ccp/ccp-construction-unity-npc-1.jpg'
			),
			imgCaption: "NPCs hang out in front of the 1987-1997 JCPenney in Cinderella City's Blue Mall."
		}),
		ccp_exhibit: instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/f_auto/v1720559712/ccp-website/ccp/exhibit/ccp_exhibit_2.jpg'
			),
			imgCaption:
				'A composite image of two different time periods of a mid-century modern shopping center, powered by Unity.'
		}),
		code_svelte_1: instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1726419738/jdg-website/swe/code-svelte-1.jpg'
			),
			imgCaption: 'A snippet of SvelteJS code.'
		}),
		forma_3d_spaces_1: instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1727623728/jdg-website/swe/forma-3d-spaces-1.jpg'
			),
			imgCaption: 'A Forma model showing functions and labels on a 3D Sketch building.'
		}),
		forma_3d_spaces_2: instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1727623375/jdg-website/swe/forma-3d-spaces-2.jpg'
			),
			imgCaption: 'A Forma model functions on a 3D Sketch building.'
		}),
		forma_daylight_potential_1: instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1727622254/jdg-website/swe/forma-daylight-potential-1.jpg'
			),
			imgCaption: 'A Forma model showing daylight potential analysis on a 3D Sketch building.'
		}),
		forma_sun_hours_1: instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1727408671/jdg-website/swe/forma-sun-hours-1.jpg'
			),
			imgCaption: 'A Forma model showing sun hours analysis on a 3D Sketch building.'
		}),
		forma_wind_1: instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1726793915/jdg-website/swe/forma-wind-1.jpg'
			),
			imgCaption: 'A Forma model showing wind analysis on a 3D Sketch building.'
		}),
		forma_wind_2: instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1727622519/jdg-website/swe/forma-wind-2.jpg'
			),
			imgCaption: 'A Forma model showing wind analysis on a 3D Sketch building.'
		}),
		formit_0: instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1726720213/jdg-website/swe/formit-0.jpg'
			),
			imgCaption: 'A FormIt model showing solar analysis, materiality, and sketchy lines.'
		}),
		formit_dynamo_1: instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1727023526/jdg-website/swe/formit-dynamo-1.jpg'
			),
			imgCaption: 'A FormIt model created from a series of Dynamo graphs.'
		}),
		formit_plugins_1: instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1727232499/jdg-website/swe/formit-plugins-1.jpg'
			),
			imgCaption: 'The FormIt Plugin Manager showing a series of plugins created by Josh Goldstein.'
		})
	},
	about_forma_1: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1725932090/jdg-website/exp/forma-1.png'
			),
			imgCaption: 'An Autodesk Forma model showing the results of solar gain analysis.'
		})
	),
	about_formit_1: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1721076293/jdg-website/exp/1551-wewatta-corner.jpg'
			),
			imgCaption: 'An Autodesk FormIt model.'
		})
	),
	about_formit_2: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1721184331/jdg-website/exp/o2-research-lobby.jpg'
			),
			imgCaption: 'An Autodesk FormIt model.'
		})
	),
	jdg_photo_1: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1724125291/jdg-website/jdg-photo-1.jpg'
			),
			imgCaption: 'Joshua Dean Goldstein'
		})
	),
	jdg_photo_2: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1724204050/jdg-website/jdg-photo-2.jpg'
			),
			imgCaption: 'Josh, his wife Haley, and their cat Iris in their renovated kitchen in 2024.'
		})
	),
	jdg_photo_3: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1724392902/jdg-website/jdg-photo-3.jpg'
			),
			imgCaption: 'Josh giving a presentation in 2022.'
		})
	)
};

export default imageAttributesCollection;
