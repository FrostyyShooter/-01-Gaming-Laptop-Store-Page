document.addEventListener("DOMContentLoaded", function () {
	const account = document.getElementById("accountButton");
	const accountMenu = document.querySelector(".account-list");
	const category = document.getElementById("categoryButton");
	const categoryMenu = document.querySelector(".category-menu");
	const categoryMenuContainer = document.querySelector(
		".category-menu-container"
	);
	const categoryMenuList = document.getElementById("categoryMenu");

	account.addEventListener("click", function (event) {
		event.stopPropagation();
		accountMenu.classList.toggle("visible");
	});

	category.addEventListener("click", function (event) {
		event.stopPropagation();
		categoryMenuContainer.classList.toggle("visible");
		categoryMenu.classList.toggle("category-menu-visible");
		if (categoryMenu.classList.contains("category-menu-visible")) {
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
			document.getElementById("categoryButton").style.color =
				"var(--menu-text-color)";
			document.getElementById("categoryButtonIcon").style.fill =
				"var(--menu-text-color)";
			categoryMenuList.style.transform = "translateY(0)";
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
			document.getElementById("categoryButton").style.color =
				"var(--text-color)";
			document.getElementById("categoryButtonIcon").style.fill =
				"var(--text-color)";
			categoryMenuList.style.transform = "translateY(-160px)";
		}
	});

	document.addEventListener("click", function () {
		accountMenu.classList.remove("visible");
		categoryMenu.classList.remove("category-menu-visible");
		categoryMenuContainer.classList.remove("visible");
		document.getElementById("categoryButtonIcon").style.transform =
			"rotate(-180deg)";
		document.getElementById("categoryButton").style.backgroundColor =
			"var(--category-button)";
		document.getElementById(
			"categoryButton"
		).style.borderBottomRightRadius = "5px";
		document.getElementById("categoryButton").style.borderBottomLeftRadius =
			"5px";
		document.getElementById("categoryButton").style.color =
			"var(--text-color)";
		document.getElementById("categoryButtonIcon").style.fill =
			"var(--text-color)";
	});
});
const categoryList = document.querySelector("category-list");
const categoryFirstTree = document.getElementById("categoryFirstTree");
const categorySecondTree = document.getElementById("categorySecondTree");
let listBackground = false;

const categories = [
	{ id: "hardware", listId: "hardwareList" },
	{ id: "pc", listId: "pcList" },
	{ id: "laptop", listId: "laptopList" },
	{ id: "gaming", listId: "gamingList" },
	{ id: "software", listId: "softwareList" },
];

categories.forEach((category) => {
	const categoryElement = document.getElementById(category.id);
	const listElement = document.getElementById(category.listId);

	categoryElement.addEventListener("mouseover", () => {
		categoryElement.classList.add("menu-hover");
		listElement.classList.add("visible");
		setBackground(true);
	});

	listElement.addEventListener("mouseover", () => {
		categoryElement.classList.add("menu-hover");
		listElement.classList.add("visible");
		setBackground(true);
	});

	categoryElement.addEventListener("mouseleave", () => {
		categoryElement.classList.remove("menu-hover");
		listElement.classList.remove("visible");
		setBackground(false);
	});

	listElement.addEventListener("mouseleave", () => {
		categoryElement.classList.remove("menu-hover");
		listElement.classList.remove("visible");
		setBackground(false);
	});
});

function setBackground(state) {
	listBackground = state;
	categorySecondTree.style.transform = state
		? "translateX(calc(20ch - 1px))"
		: "translateX(0)";
	categorySecondTree.style.borderBottomRightRadius = state ? "5px" : "5px";
	categorySecondTree.style.borderBottomLeftRadius = state ? "0" : "5px";
	categoryFirstTree.style.borderBottomRightRadius = state ? "0" : "5px";
}

// Light/Dark Mode
document.addEventListener("DOMContentLoaded", function () {
	const lightDark = document.getElementById("lightDarkModeButton");
	const body = document.querySelector("body");
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
		body.classList.add("dark-mode");
		document.getElementById("darkModeIcon").style.opacity = 1;
		document.getElementById("lightModeIcon").style.opacity = 0;
	}
});
function scrollToTop() {
	window.scrollTo(0, 0);
	// document.getElementById("products").scrollTo(0, 0);
}

// account sign in
document.addEventListener("DOMContentLoaded", function () {
	const body = document.querySelector("body");
	const accountContainer = document.getElementById("account-container");
	const accountSignIn = document.getElementById("account-sign-in");
	const accountSignUp = document.getElementById("account-registration");
	document.getElementById("signInBtn").onclick = function () {
		body.classList.toggle("overflow-hidden");
		accountContainer.classList.toggle("visible");
		accountSignIn.classList.toggle("visible");
	};
	document.getElementById("signUpBtn").onclick = function () {
		body.classList.toggle("overflow-hidden");
		accountContainer.classList.toggle("visible");
		accountSignUp.classList.toggle("visible");
	};
	document.getElementById("closeAccountContainer").onclick = function () {
		body.classList.remove("overflow-hidden");
		accountContainer.classList.remove("visible");
		accountSignIn.classList.remove("visible");
		accountSignUp.classList.remove("visible");
	};
	// from sign in to sign up and visa versa
});

// account sign up

// wishlist

document.addEventListener("DOMContentLoaded", function () {
	const filters = document.querySelectorAll(
		'.filter-category input[type="checkbox"]'
	);
	const products = document.querySelectorAll(".product-card");

	filters.forEach(function (filter) {
		filter.addEventListener("change", function () {
			filterProducts();
		});
	});

	function filterProducts() {
		const activeFilters = {};

		filters.forEach(function (filter) {
			if (filter.checked) {
				const category = filter.name;
				if (!activeFilters[category]) {
					activeFilters[category] = [];
				}
				activeFilters[category].push(filter.id);
			}
		});

		products.forEach(function (product) {
			let isVisible = true;

			for (const category in activeFilters) {
				const productValue = product.getAttribute(`data-${category}`);
				if (!activeFilters[category].includes(productValue)) {
					isVisible = false;
					break;
				}
			}

			product.style.display = isVisible ? "block" : "none";
		});
	}
});
