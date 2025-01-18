document.addEventListener("DOMContentLoaded", function () {
	const account = document.getElementById("accountButton");
	const accountMenu = document.querySelector(".account-list");
	const category = document.getElementById("categoryButton");
	const categoryMenu = document.querySelector(".category-menu");
	const categoryMenuContainer = document.querySelector(
		".category-menu-container"
	);

	account.addEventListener("click", function (event) {
		event.stopPropagation();
		accountMenu.classList.toggle("visible");
	});

	category.addEventListener("click", function (event) {
		event.stopPropagation();
		categoryMenuContainer.classList.toggle("visible");
		categoryMenu.classList.toggle("category-menu-visible");
		if (categoryMenuContainer.classList.contains("visible")) {
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
	const categoryHardware = document.getElementById("hardware");
	const hardwareList = document.getElementById("hardwareList");
	categoryHardware.addEventListener("mouseover", function () {
		categoryHardware.classList.add("menu-hover");
		hardwareList.classList.add("visible");
		hardwareList.style.opacity = 1;
	});
	hardwareList.addEventListener("mouseover", function () {
		categoryHardware.classList.add("menu-hover");
		hardwareList.classList.add("visible");
		hardwareList.style.opacity = 1;
	});
	categoryHardware.addEventListener("mouseleave", function () {
		categoryHardware.classList.remove("menu-hover");
		hardwareList.classList.remove("visible");
		hardwareList.style.opacity = 0;
	});
	hardwareList.addEventListener("mouseleave", function () {
		categoryHardware.classList.remove("menu-hover");
		hardwareList.classList.remove("visible");
		hardwareList.style.opacity = 0;
	});

	const categoryPc = document.getElementById("pc");
	const pcList = document.getElementById("pcList");
	categoryPc.addEventListener("mouseover", function () {
		categoryPc.classList.add("menu-hover");
		pcList.classList.add("visible");
		pcList.style.opacity = 1;
	});
	pcList.addEventListener("mouseover", function () {
		categoryPc.classList.add("menu-hover");
		pcList.classList.add("visible");
		pcList.style.opacity = 1;
	});
	categoryPc.addEventListener("mouseleave", function () {
		categoryPc.classList.remove("menu-hover");
		pcList.classList.remove("visible");
		pcList.style.opacity = 0;
	});
	pcList.addEventListener("mouseleave", function () {
		categoryPc.classList.remove("menu-hover");
		pcList.classList.remove("visible");
		pcList.style.opacity = 0;
	});

	const categoryLaptop = document.getElementById("laptop");
	const laptopList = document.getElementById("laptopList");
	categoryLaptop.addEventListener("mouseover", function () {
		categoryLaptop.classList.add("menu-hover");
		laptopList.classList.add("visible");
		laptopList.style.opacity = 1;
	});
	laptopList.addEventListener("mouseover", function () {
		categoryLaptop.classList.add("menu-hover");
		laptopList.classList.add("visible");
		laptopList.style.opacity = 1;
	});
	categoryLaptop.addEventListener("mouseleave", function () {
		categoryLaptop.classList.remove("menu-hover");
		laptopList.classList.remove("visible");
		laptopList.style.opacity = 0;
	});
	laptopList.addEventListener("mouseleave", function () {
		categoryLaptop.classList.remove("menu-hover");
		laptopList.classList.remove("visible");
		laptopList.style.opacity = 0;
	});

	const categoryGaming = document.getElementById("gaming");
	const gamingList = document.getElementById("gamingList");
	categoryGaming.addEventListener("mouseover", function () {
		categoryGaming.classList.add("menu-hover");
		gamingList.classList.add("visible");
		gamingList.style.opacity = 1;
	});
	gamingList.addEventListener("mouseover", function () {
		categoryGaming.classList.add("menu-hover");
		gamingList.classList.add("visible");
		gamingList.style.opacity = 1;
	});
	categoryGaming.addEventListener("mouseleave", function () {
		categoryGaming.classList.remove("menu-hover");
		gamingList.classList.remove("visible");
		gamingList.style.opacity = 0;
	});
	gamingList.addEventListener("mouseleave", function () {
		categoryGaming.classList.remove("menu-hover");
		gamingList.classList.remove("visible");
		gamingList.style.opacity = 0;
	});

	const categorySoftware = document.getElementById("software");
	const softwareList = document.getElementById("softwareList");
	categorySoftware.addEventListener("mouseover", function () {
		categorySoftware.classList.add("menu-hover");
		softwareList.classList.add("visible");
		softwareList.style.opacity = 1;
	});
	softwareList.addEventListener("mouseover", function () {
		categorySoftware.classList.add("menu-hover");
		softwareList.classList.add("visible");
		softwareList.style.opacity = 1;
	});
	categorySoftware.addEventListener("mouseleave", function () {
		categorySoftware.classList.remove("menu-hover");
		softwareList.classList.remove("visible");
		softwareList.style.opacity = 0;
	});
	softwareList.addEventListener("mouseleave", function () {
		categorySoftware.classList.remove("menu-hover");
		softwareList.classList.remove("visible");
		softwareList.style.opacity = 0;
	});
});
