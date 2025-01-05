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

document.addEventListener("DOMContentLoaded", function () {
	const lightDark = document.getElementById("lightDarkModeButton");
	const body = document.querySelector("body");
	localStorage.setItem("dark-mode", "disabled");
	let lightDarkMode = localStorage.getItem("dark-mode");

	lightDark.addEventListener("click", function () {
		body.classList.toggle("dark-mode");
		if (body.classList.contains("dark-mode")) {
			localStorage.setItem("dark-mode", "enabled");
			document.getElementById("darkModeIcon").style.opacity = 1;
			document.getElementById("lightModeIcon").style.opacity = 0;
		} else {
			localStorage.setItem("dark-mode", "disabled");
			document.getElementById("darkModeIcon").style.opacity = 0;
			document.getElementById("lightModeIcon").style.opacity = 1;
		}
		console.log(localStorage.getItem("dark-mode"));
	});

	if (lightDarkMode === null || lightDarkMode === "disabled") {
		document.getElementById("darkModeIcon").style.opacity = 0;
		document.getElementById("lightModeIcon").style.opacity = 1;
	} else if (lightDarkMode === "enabled") {
		document.getElementById("darkModeIcon").style.opacity = 1;
		document.getElementById("lightModeIcon").style.opacity = 0;
	}
});
