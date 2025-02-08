document.addEventListener("DOMContentLoaded", function () {
	const account = document.getElementById("accountButton");
	const accountMenu = document.querySelector(".account-list");
	const wishlist = document.getElementById("wishlistButton");
	const cart = document.getElementById("cartButton");
	const cartContainer = document.querySelector(".cart-container");
	const closeCartContainer = document.getElementById("closeCartContainer");
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

	account.addEventListener("click", function (e) {
		e.stopPropagation();
		accountMenu.classList.toggle("visible");
		cartContainer.classList.remove("display");
	});
	cart.addEventListener("click", function (e) {
		e.stopPropagation();
		cartContainer.classList.toggle("display");
		accountMenu.classList.remove("visible");
	});

	category.addEventListener("click", function (e) {
		e.stopPropagation();
		const isVisible = !categoryMenu.classList.contains(
			"category-menu-visible"
		);
		toggleCategoryMenu(isVisible);
	});
	wishlist.addEventListener("click", function (e) {
		// window.open("wishlist.html", "_blank");
		window.open("#", "_self");
	});

	closeCartContainer.addEventListener("click", function () {
		cartContainer.classList.remove("display");
	});

	cartContainer.addEventListener("click", function (e) {
		e.stopPropagation();
	});
	document.addEventListener("click", function (e) {
		accountMenu.classList.remove("visible");
		toggleCategoryMenu(false);
		if (!cartContainer.contains(e.target)) {
			cartContainer.classList.remove("display");
		}
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
	document.getElementById("switchToSignUp").onclick = function () {
		accountSignIn.classList.remove("visible");
		accountSignUp.classList.add("visible");
	};
	document.getElementById("switchToSignIn").onclick = function () {
		accountSignUp.classList.remove("visible");
		accountSignIn.classList.add("visible");
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

// Cart
document.addEventListener("DOMContentLoaded", function () {
	// Existing code for filters and products...

	// Load cart items from local storage
	loadCartItems();

	// Function to add product to cart
	function addToCart(product) {
		const cartItems = document.querySelector(".cart-items");
		const cartItem = document.createElement("div");
		cartItem.classList.add("cart-item");
		cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <div class="cart-item-info">
                <h3>${product.name}</h3>
                <div class="cart-quantity">
                    <button class="decreaseQuantity" type="button">-</button>
                    <span class="quantity">1</span>
                    <button class="increaseQuantity" type="button">+</button>
                </div>
                <div class="cart-price">
                    <span>&#8364;</span>
                    <span>${product.price}</span>
                </div>
            </div>
            <button id="removeFromCart" class="remove-from-cart">Remove from cart</button>
        `;
		cartItems.appendChild(cartItem);

		// Add event listeners for quantity buttons
		cartItem
			.querySelector(".decreaseQuantity")
			.addEventListener("click", function () {
				updateQuantity(cartItem, -1, product.price);
			});
		cartItem
			.querySelector(".increaseQuantity")
			.addEventListener("click", function () {
				updateQuantity(cartItem, 1, product.price);
			});

		// Update cart total and save to local storage
		updateCartTotal();
		saveCartItems();
	}

	// Function to update quantity and price
	function updateQuantity(cartItem, change, unitPrice) {
		const quantityElement = cartItem.querySelector(".quantity");
		let quantity = parseInt(quantityElement.textContent);
		quantity = Math.max(1, quantity + change); // Ensure quantity is at least 1
		quantityElement.textContent = quantity;

		const priceElement = cartItem.querySelector(
			".cart-price span:last-child"
		);
		const newPrice = (unitPrice * quantity).toFixed(2);
		priceElement.textContent = newPrice;

		// Update cart total and save to local storage
		updateCartTotal();
		saveCartItems();
	}

	// Function to update cart total
	function updateCartTotal() {
		const cartItems = document.querySelectorAll(".cart-item");
		const cartItemsContainer = document.querySelector(".cart-items");
		let total = 0;
		let totalQuantity = 0;
		cartItems.forEach((item) => {
			const price = parseFloat(
				item
					.querySelector(".cart-price span:last-child")
					.textContent.replace(",", "")
			);
			const quantity = parseInt(
				item.querySelector(".quantity").textContent
			);
			total += price;
			totalQuantity += quantity;
		});
		document.querySelector(
			".cart-total"
		).textContent = `Total: €${total.toFixed(2)}`;

		let itemsInCart = document.getElementById("itemsInCart");
		if (totalQuantity > 0) {
			if (!itemsInCart) {
				itemsInCart = document.createElement("span");
				itemsInCart.id = "itemsInCart";
				itemsInCart.className = "items-in-cart";
				const cartButton = document.getElementById("cartButton");
				cartButton.parentNode.insertBefore(
					itemsInCart,
					cartButton.nextSibling
				);
			}
			itemsInCart.textContent = totalQuantity;

			// Remove empty cart message if there are items in the cart
			const emptyCartMessage =
				document.getElementById("emptyCartMessage");
			if (emptyCartMessage) {
				emptyCartMessage.remove();
			}
		} else {
			if (itemsInCart) {
				itemsInCart.remove();
			}
			if (!document.getElementById("emptyCartMessage")) {
				const emptyCartMessage = document.createElement("span");
				emptyCartMessage.id = "emptyCartMessage";
				emptyCartMessage.textContent = "Cart is empty";
				cartItemsContainer.appendChild(emptyCartMessage);
			}
		}
	}

	// Function to save cart items to local storage
	function saveCartItems() {
		const cartItems = [];
		document.querySelectorAll(".cart-item").forEach((item) => {
			const product = {
				image: item.querySelector("img").src,
				name: item.querySelector("h3").textContent,
				price: item.querySelector(".cart-price span:last-child")
					.textContent,
				quantity: item.querySelector(".quantity").textContent,
			};
			cartItems.push(product);
		});
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}

	// Function to load cart items from local storage
	function loadCartItems() {
		const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
		cartItems.forEach((product) => {
			addToCart(product);
		});
	}

	// Event listener for "Add to Cart" buttons
	document.querySelectorAll(".card-button").forEach((button) => {
		button.addEventListener("click", function () {
			const productCard = this.closest(".product-card");
			const product = {
				name: productCard.dataset.name,
				price: parseFloat(productCard.dataset.price.replace(",", "")),
				image: productCard.querySelector(".product-image").src,
			};
			addToCart(product);
		});
	});

	// Event listener for "Remove from Cart" buttons
	document
		.querySelector(".cart-items")
		.addEventListener("click", function (e) {
			if (e.target.classList.contains("remove-from-cart")) {
				e.target.closest(".cart-item").remove();
				updateCartTotal();
				saveCartItems();
			}
		});
});

document.addEventListener("DOMContentLoaded", function () {
	// Sort menu functionality
	const sortMenuToggle = document.getElementById("sortMenuToggle");
	const sortMenuList = document.getElementById("sortMenuList");
	const cardContainer = document.querySelector(".card-container");

	if (!cardContainer) {
		console.error("Card container not found");
		return;
	}

	// Toggle the dropdown menu
	sortMenuToggle.addEventListener("click", function () {
		if (sortMenuList.style.display === "none") {
			sortMenuList.style.display = "block";
		} else {
			sortMenuList.style.display = "none";
		}
	});

	// Sort product cards when a sort option is clicked
	sortMenuList.addEventListener("click", function (event) {
		if (event.target.tagName === "LI") {
			const sortType = event.target.getAttribute("data-sort");
			sortProductCards(sortType);
			document.getElementById("currentSort").textContent =
				event.target.textContent;
			sortMenuList.style.display = "none";
		}
	});

	// Function to sort product cards
	function sortProductCards(sortType) {
		const productCards = Array.from(
			document.querySelectorAll(".product-card")
		);
		productCards.sort((a, b) => {
			if (sortType === "date-newest") {
				return new Date(b.dataset.date) - new Date(a.dataset.date);
			} else if (sortType === "date-oldest") {
				return new Date(a.dataset.date) - new Date(b.dataset.date);
			} else if (sortType === "screen-size-biggest") {
				return (
					parseInt(b.dataset.screenSize.replace("inch", "")) -
					parseInt(a.dataset.screenSize.replace("inch", ""))
				);
			} else if (sortType === "screen-size-smallest") {
				return (
					parseInt(a.dataset.screenSize.replace("inch", "")) -
					parseInt(b.dataset.screenSize.replace("inch", ""))
				);
			} else if (sortType === "cpu") {
				return a.dataset.cpu.localeCompare(b.dataset.cpu);
			} else if (sortType === "gpu") {
				return a.dataset.gpu.localeCompare(b.dataset.gpu);
			} else if (sortType === "storage-biggest") {
				return (
					parseInt(b.dataset.storage.replace("gb", "")) -
					parseInt(a.dataset.storage.replace("gb", ""))
				);
			} else if (sortType === "storage-smallest") {
				return (
					parseInt(a.dataset.storage.replace("gb", "")) -
					parseInt(b.dataset.storage.replace("gb", ""))
				);
			} else if (sortType === "ram-biggest") {
				return (
					parseInt(b.dataset.ram.replace("gb", "")) -
					parseInt(a.dataset.ram.replace("gb", ""))
				);
			} else if (sortType === "ram-smallest") {
				return (
					parseInt(a.dataset.ram.replace("gb", "")) -
					parseInt(b.dataset.ram.replace("gb", ""))
				);
			}
		});
		productCards.forEach((card) => cardContainer.appendChild(card));
	}

	// Optional: Close the dropdown if clicking outside of it
	document.addEventListener("click", function (event) {
		if (
			!sortMenuToggle.contains(event.target) &&
			!sortMenuList.contains(event.target)
		) {
			sortMenuList.style.display = "none";
		}
	});
});
