import shuffleGallery from "./shuffleGallery.js";
import createImage from "./createImage.js";
import createCard from "./createCard.js";

import { gallery } from "../data/gallery.js";

const gallerySet = document.getElementById("gallery");

const createGallery = () => {
	shuffleGallery(gallery);

	gallerySet.innerHTML = createCard(gallery);

	for (let item of gallery) {
		const parent = document.getElementById(item.name);
		createImage(item, parent);
	}
};

window.onload = createGallery();
