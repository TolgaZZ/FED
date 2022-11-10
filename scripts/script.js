// https://codepen.io/bstonedev/pen/MWWZgKz
// https://codepen.io/ricardospalves/pen/JpOmMR?editors=1111


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

// JavaScript Document
console.log("hi");
// Get all stack__card divs
let elementsArray = document.querySelectorAll(".stack__card");

// Add scroll event
window.addEventListener("scroll", fadeIn);

// Returns true if the given element is moving inside the window
function isMovingInView(elem) {
	return (
		elem.getBoundingClientRect().top > 0 &&
		elem.getBoundingClientRect().top < window.innerHeight
	);
}

// Fade divs
function fadeIn() {
	// Loop through all divs
	for (var i = 0; i < elementsArray.length; i++) {
		var elem = elementsArray[i];

		// Check if the next element is covering or moving over the current element
		if (i + 1 < elementsArray.length) {
			var nextElem = elementsArray[i + 1];
			if (nextElem.getBoundingClientRect().top <= 0) {
				// Next element is covering the current element. Make current element invisible
				elem.classList.add("underView");
				elem.classList.remove("movingUnderView");
			} else if (isMovingInView(nextElem)) {
				// Next element is moving over the current element. Make current element half transparant
				elem.classList.add("movingUnderView");
				elem.classList.remove("underView");
			} else {
				// Next element is not covering or moving over the current element. Remove the classes
				elem.classList.remove("underView");
				elem.classList.remove("movingUnderView");
			}
		}
	}
}
fadeIn();

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

