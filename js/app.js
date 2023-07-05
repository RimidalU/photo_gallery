import shuffleGallery from "./shuffleGallery.js";
import createImage from "./createImage.js";
import searchPhoto from "./searchPhoto.js";
import createCard from "./createCard.js";

import { gallery } from "../data/gallery.js";

// draw gallery

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

// search

let typingTimer;
let typeInterval = 500;
const searchInput = document.getElementById("searchbox");

searchInput.addEventListener("input", () => {
	// https://stackoverflow.com/questions/2977023/how-do-you-detect-the-clearing-of-a-search-html5-input
	clearTimeout(typingTimer);
	typingTimer = setTimeout(searchPhoto, typeInterval);
});
