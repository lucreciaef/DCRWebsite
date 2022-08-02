//------------------------------------------------------------------------------------------------
//----RESPONSIVENESS
//------------------------------------------------------------------------------------------------

// Horizontal resizing - Ref: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
function clickOnMenuButton() {
	let x = document.getElementById("nav-menu-id");
	if (x.className === "nav-bar-links") {
		x.className += " responsive";
	} else {
		x.className = "nav-bar-links";
	}
}

//Sticky navigation bar when scrolling down - Ref: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
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

// Making FAQ question banners in accordion style. Ref: https://dev.to/w3tsa/best-way-to-build-an-accordion-faq-in-html-css-and-js-54a6
// Get all FAQ banners available
let faqQuestionBanners = document.querySelectorAll(".question-banner");

for (const faqQuestionBannerElement of faqQuestionBanners) {
	faqQuestionBannerElement.addEventListener("click", function() {
		let nextBannerSection = this.nextElementSibling;

		// Toggle css class to add the 'permanently active' style
		this.classList.toggle('active-question-banner');

		// When toggling, switch display to block or none
		if (nextBannerSection.style.display !== 'block') {
			nextBannerSection.style.display = 'block';
		} else {
			nextBannerSection.style.display = 'none';
		}

		// Add height of the text section to make it visible
		if (nextBannerSection.style.display === 'none') {
			nextBannerSection.style.maxHeight = null;
		} else {
			nextBannerSection.style.maxHeight = nextBannerSection.scrollHeight + 'px';
		}
	})
}
