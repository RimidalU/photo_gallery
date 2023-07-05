const searchPhoto = () => {
	let cards = document.querySelectorAll(".picture__card");
	let search_query = document.getElementById("searchbox").value;

	for (var i = 0; i < cards.length; i++) {
		if (cards[i].id.toLowerCase().includes(search_query.toLowerCase())) {
			cards[i].classList.remove("hidden__card");
		} else {
			cards[i].classList.add("hidden__card");
		}
	}
};

export default searchPhoto;
