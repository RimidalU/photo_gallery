const shuffleGallery = (gallery) => {
	gallery.sort(() => Math.random() - 0.5);
};

export default shuffleGallery;
