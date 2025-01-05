document.addEventListener("DOMContentLoaded", function () {
	const account = document.getElementById("accountButton");
	const accountMenu = document.querySelector(".account-list");
	const category = document.getElementById("categoryButton");
	const categoryMenu = document.querySelector(".category-menu");
	const categorySvg = document.getElementById("categoryButtonIcon");

	account.addEventListener("click", function (event) {
		event.stopPropagation();
		accountMenu.classList.toggle("visible");
	});

	category.addEventListener("click", function (event) {
		event.stopPropagation();
		categoryMenu.classList.toggle("visible");
		categorySvg.classList.toggle("rotate");
	});

	document.addEventListener("click", function () {
		accountMenu.classList.remove("visible");
		categoryMenu.classList.remove("visible");
	});
});
