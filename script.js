document.addEventListener("DOMContentLoaded", function () {
	const account = document.getElementById("accountButton");
	const accountMenu = document.querySelector(".account-list");
	const category = document.getElementById("categoryButton");
	const categoryMenu = document.querySelector(".category-menu");
	const categoryMenuContainer = document.querySelector(
		".category-menu-container"
	);
	const categoryMenuList = document.getElementById("categoryMenu");
	const categoryButtonIcon = document.getElementById("categoryButtonIcon");
	const categoryButton = document.getElementById("categoryButton");

	const toggleCategoryMenu = (isVisible) => {
		categoryMenu.classList.toggle("category-menu-visible", isVisible);
		categoryMenuContainer.classList.toggle("visible", isVisible);
		categoryButtonIcon.style.transform = isVisible
			? "rotate(0deg)"
			: "rotate(-180deg)";
		categoryButton.style.backgroundColor = isVisible
			? "var(--menu-background)"
			: "var(--category-button)";
		categoryButton.style.borderBottomRightRadius = isVisible ? 0 : "5px";
		categoryButton.style.borderBottomLeftRadius = isVisible ? 0 : "5px";
		categoryButton.style.color = isVisible
			? "var(--menu-text-color)"
			: "var(--text-color)";
		categoryButtonIcon.style.fill = isVisible
			? "var(--menu-text-color)"
			: "var(--text-color)";
		categoryMenuList.style.transform = isVisible
			? "translateY(0)"
			: "translateY(-160px)";
	};

	account.addEventListener("click", function (event) {
		event.stopPropagation();
		accountMenu.classList.toggle("visible");
	});

	category.addEventListener("click", function (event) {
		event.stopPropagation();
		const isVisible = !categoryMenu.classList.contains(
			"category-menu-visible"
		);
		toggleCategoryMenu(isVisible);
	});

	document.addEventListener("click", function () {
		accountMenu.classList.remove("visible");
		toggleCategoryMenu(false);
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
