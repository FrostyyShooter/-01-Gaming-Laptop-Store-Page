// // add a way to make a background slide in from the left
// // add a transition delay to the ul to wait for the background to slide in
// // only do this once and than remove the transition delay
// const categoryList = document.querySelector("category-list");
// const categoryFirstTree = document.getElementById("categoryFirstTree");
// const categorySecondTree = document.getElementById("categorySecondTree");
// let listBackground = false;

// const categoryHardware = document.getElementById("hardware");
// const hardwareList = document.getElementById("hardwareList");
// categoryHardware.addEventListener("mouseover", function () {
// 	categoryHardware.classList.add("menu-hover");
// 	hardwareList.classList.add("visible");
// });
// hardwareList.addEventListener("mouseover", function () {
// 	categoryHardware.classList.add("menu-hover");
// 	hardwareList.classList.add("visible");
// });
// categoryHardware.addEventListener("mouseleave", function () {
// 	categoryHardware.classList.remove("menu-hover");
// 	hardwareList.classList.remove("visible");
// });
// hardwareList.addEventListener("mouseleave", function () {
// 	categoryHardware.classList.remove("menu-hover");
// 	hardwareList.classList.remove("visible");
// });

// const categoryPc = document.getElementById("pc");
// const pcList = document.getElementById("pcList");
// categoryPc.addEventListener("mouseover", function () {
// 	categoryPc.classList.add("menu-hover");
// 	pcList.classList.add("visible");
// });
// pcList.addEventListener("mouseover", function () {
// 	categoryPc.classList.add("menu-hover");
// 	pcList.classList.add("visible");
// });
// categoryPc.addEventListener("mouseleave", function () {
// 	categoryPc.classList.remove("menu-hover");
// 	pcList.classList.remove("visible");
// });
// pcList.addEventListener("mouseleave", function () {
// 	categoryPc.classList.remove("menu-hover");
// 	pcList.classList.remove("visible");
// });

// const categoryLaptop = document.getElementById("laptop");
// const laptopList = document.getElementById("laptopList");
// categoryLaptop.addEventListener("mouseover", function () {
// 	categoryLaptop.classList.add("menu-hover");
// 	laptopList.classList.add("visible");
// });
// laptopList.addEventListener("mouseover", function () {
// 	categoryLaptop.classList.add("menu-hover");
// 	laptopList.classList.add("visible");
// });
// categoryLaptop.addEventListener("mouseleave", function () {
// 	categoryLaptop.classList.remove("menu-hover");
// 	laptopList.classList.remove("visible");
// });
// laptopList.addEventListener("mouseleave", function () {
// 	categoryLaptop.classList.remove("menu-hover");
// 	laptopList.classList.remove("visible");
// });

// const categoryGaming = document.getElementById("gaming");
// const gamingList = document.getElementById("gamingList");
// categoryGaming.addEventListener("mouseover", function () {
// 	categoryGaming.classList.add("menu-hover");
// 	gamingList.classList.add("visible");
// });
// gamingList.addEventListener("mouseover", function () {
// 	categoryGaming.classList.add("menu-hover");
// 	gamingList.classList.add("visible");
// });
// categoryGaming.addEventListener("mouseleave", function () {
// 	categoryGaming.classList.remove("menu-hover");
// 	gamingList.classList.remove("visible");
// });
// gamingList.addEventListener("mouseleave", function () {
// 	categoryGaming.classList.remove("menu-hover");
// 	gamingList.classList.remove("visible");
// });

// const categorySoftware = document.getElementById("software");
// const softwareList = document.getElementById("softwareList");
// categorySoftware.addEventListener("mouseover", function () {
// 	categorySoftware.classList.add("menu-hover");
// 	softwareList.classList.add("visible");
// });
// softwareList.addEventListener("mouseover", function () {
// 	categorySoftware.classList.add("menu-hover");
// 	softwareList.classList.add("visible");
// });
// categorySoftware.addEventListener("mouseleave", function () {
// 	categorySoftware.classList.remove("menu-hover");
// 	softwareList.classList.remove("visible");
// });
// softwareList.addEventListener("mouseleave", function () {
// 	categorySoftware.classList.remove("menu-hover");
// 	softwareList.classList.remove("visible");
// });

// categoryHardware.addEventListener("mouseover", () => setBackground(true));
// categoryPc.addEventListener("mouseover", () => setBackground(true));
// categoryLaptop.addEventListener("mouseover", () => setBackground(true));
// categoryGaming.addEventListener("mouseover", () => setBackground(true));
// categorySoftware.addEventListener("mouseover", () => setBackground(true));
// hardwareList.addEventListener("mouseover", () => setBackground(true));
// pcList.addEventListener("mouseover", () => setBackground(true));
// laptopList.addEventListener("mouseover", () => setBackground(true));
// gamingList.addEventListener("mouseover", () => setBackground(true));
// softwareList.addEventListener("mouseover", () => setBackground(true));

// categoryHardware.addEventListener("mouseleave", () => setBackground(false));
// categoryPc.addEventListener("mouseleave", () => setBackground(false));
// categoryLaptop.addEventListener("mouseleave", () => setBackground(false));
// categoryGaming.addEventListener("mouseleave", () => setBackground(false));
// categorySoftware.addEventListener("mouseleave", () => setBackground(false));
// hardwareList.addEventListener("mouseleave", () => setBackground(false));
// pcList.addEventListener("mouseleave", () => setBackground(false));
// laptopList.addEventListener("mouseleave", () => setBackground(false));
// gamingList.addEventListener("mouseleave", () => setBackground(false));
// softwareList.addEventListener("mouseleave", () => setBackground(false));

// function setBackground(state) {
// 	listBackground = state;
// 	if (state) {
// 		categorySecondTree.style.transform = "translateX(calc(20ch - 1px))";
// 		document.getElementById(
// 			"categorySecondTree"
// 		).style.borderBottomRightRadius = "5px";
// 		document.getElementById(
// 			"categorySecondTree"
// 		).style.borderBottomLeftRadius = "0";
// 		document.getElementById(
// 			"categoryFirstTree"
// 		).style.borderBottomRightRadius = "0";
// 	} else {
// 		categorySecondTree.style.transform = "translateX(0)";
// 		document.getElementById(
// 			"categorySecondTree"
// 		).style.borderBottomRightRadius = "5px";
// 		document.getElementById(
// 			"categorySecondTree"
// 		).style.borderBottomLeftRadius = "5px";
// 		document.getElementById(
// 			"categoryFirstTree"
// 		).style.borderBottomRightRadius = "5px";
// 	}
// }
