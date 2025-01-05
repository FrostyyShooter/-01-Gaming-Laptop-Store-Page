document.addEventListener("DOMContentLoaded", function () {
	const account = document.getElementById("accountButton");
	const accountMenu = document.querySelector(".account-list");
	const category = document.getElementById("categoryButton");
	const categoryMenu = document.querySelector(".category-menu");

	account.addEventListener("click", function (event) {
		event.stopPropagation();
		accountMenu.classList.toggle("visible");
	});

	category.addEventListener("click", function (event) {
		event.stopPropagation();
		categoryMenu.classList.toggle("visible");
		if (categoryMenu.classList.contains("visible")) {
			document.getElementById("categoryButtonIcon").style.transform =
				"rotate(0deg)";
			document.getElementById("categoryButton").style.backgroundColor =
				"var(--menu-background)";
			document.getElementById(
				"categoryButton"
			).style.borderBottomRightRadius = 0;
			document.getElementById(
				"categoryButton"
			).style.borderBottomLeftRadius = 0;
		} else {
			document.getElementById("categoryButtonIcon").style.transform =
				"rotate(-180deg)";
			document.getElementById("categoryButton").style.backgroundColor =
				"var(--category-button)";
			document.getElementById(
				"categoryButton"
			).style.borderBottomRightRadius = "5px";
			document.getElementById(
				"categoryButton"
			).style.borderBottomLeftRadius = "5px";
		}
	});

	document.addEventListener("click", function () {
		accountMenu.classList.remove("visible");
		categoryMenu.classList.remove("visible");
		document.getElementById("categoryButtonIcon").style.transform =
			"rotate(-180deg)";
		document.getElementById("categoryButton").style.backgroundColor =
			"var(--category-button)";
		document.getElementById(
			"categoryButton"
		).style.borderBottomRightRadius = "5px";
		document.getElementById("categoryButton").style.borderBottomLeftRadius =
			"5px";
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
