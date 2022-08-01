
//------------------------------------------------------------------------------------------------
//----RESPONSIVENESS
//------------------------------------------------------------------------------------------------

// Horizontal resizing
function clickOnMenuButton() {
	let x = document.getElementById("nav-menu-id");
	console.log("print x")
	if (x.className === "nav-bar-links") {
		console.log("test 1")
		x.className += " responsive";
	} else {
		x.className = "nav-bar-links";
		console.log("test 2")
	}
}

//Sticky navigation bar when scrolling down - ref https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
// When the user scrolls the page, execute addStickyClassToNavBar
window.onscroll = function() {addStickyClassToNavBar()};
// Get the navbar
let navbar = document.getElementById("nav-header-id");
// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function addStickyClassToNavBar() {
	if (window.pageYOffset >= sticky) { //pageYOffset is deprecated, scrollY is interchangeable(?)
		navbar.classList.add("sticky-nav-bar");
		console.log("scroll test")
	} else {
		navbar.classList.remove("sticky-nav-bar");
	}
}

//------------------------------------------------------------------------------------------------
//----FUNCTIONALITIES
//------------------------------------------------------------------------------------------------


// Horizontal resizing
function clickOnMenuButton() {
	let x = document.getElementById("nav-menu-id");
	console.log("print x")
	if (x.className === "nav-bar-links") {
		console.log("test 1")
		x.className += " responsive";
	} else {
		x.className = "nav-bar-links";
		console.log("test 2")
	}
}

// Get all FAQ banners available
let faqQuestionBanners = document.querySelectorAll(".question-banner");

for (const faqQuestionBannerElement of faqQuestionBanners) {
	faqQuestionBannerElement.addEventListener("click", function() {
		let nextBannerSection = this.nextElementSibling;

		this.classList.toggle('active-question-banner');

		if (nextBannerSection.style.display !== 'block') {
			nextBannerSection.style.display = 'block';
		} else {
			nextBannerSection.style.display = 'none';
		}

		if (nextBannerSection.style.display === 'none') {
			nextBannerSection.style.maxHeight = null;
		} else {
			nextBannerSection.style.maxHeight = nextBannerSection.scrollHeight + 'px';
		}
	})
}


// Using templated header & footer
// Source: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots
// let headerTemplate = document.getElementById("header-template");
// let footerTemplate = document.getElementById("footer-template");
// let headerTemplateContent = headerTemplate.content;
//
// let footerTemplateContent = footerTemplate.content;
//
// document.getElementById("header-placeholder").appendChild(headerTemplateContent);
// document.body.appendChild(footerTemplateContent);
