//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//----RESPONSIVENESS-+-+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Horizontal resizing - Ref: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
function clickOnMenuButton() {
	let x = document.getElementById("nav-menu-id");
	if (x.className === "nav-bar-links") {
		x.className += " responsive";
	} else {
		x.className = "nav-bar-links";
	}
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//----FUNCTIONALITIES--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Making FAQ question banners in accordion style.
// Inspiration and Ref: https://dev.to/w3tsa/best-way-to-build-an-accordion-faq-in-html-css-and-js-54a6

// Get all FAQ banners available
let faqQuestionBanners = document.querySelectorAll(".question-banner");

for (const faqQuestionBannerElement of faqQuestionBanners) {
	faqQuestionBannerElement.addEventListener("click", function() {
		let nextBannerSection = this.nextElementSibling;

		// Toggle css class to add the 'permanently active' style
		this.classList.toggle("active-question-banner");

		// When toggling, switch display to block or none
		if (nextBannerSection.style.display !== "block") {
			nextBannerSection.style.display = "block";
		} else {
			nextBannerSection.style.display = "none";
		}

		// Add height of the text section to make it visible
		if (nextBannerSection.style.display === "none") {
			nextBannerSection.style.maxHeight = null;
		} else {
			nextBannerSection.style.maxHeight = nextBannerSection.scrollHeight + "px";
		}
	})
}

//---------------------------------------------------------------------------------
// Expanding and collapsing article text in the Events page.
//---------------------------------------------------------------------------------

// Ref: https://www.w3schools.com/howto/howto_js_read_more.asp
// Help from: https://stackoverflow.com/questions/29614210/storing-document-getelementbyid-in-a-variable
// Help from: https://developer.mozilla.org/en-US/docs/Web/CSS/:scope

function clickToReadMore(element) { //Passing current clicked button as element
	let clickedButton = element;
	let buttonParent = element.parentElement; //Getting the parent of the clicked button

	//Select the next element with class "--summary-text" that is a child of the current parent element
	let dots = buttonParent.querySelector(':scope > .--summary-text');
	let moreText = buttonParent.querySelector(':scope > .--full-text');

	// Toggle between showing one <p> (summary) or the other (full text)
	if (dots.style.display === "none") {
		dots.style.display = "block";
		clickedButton.innerHTML = "Click to read more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		clickedButton.innerHTML = "Click to hide text";
		moreText.style.display = "block";
	}
}

//---------------------------------------------------------------------------------
// Functionality for the accessibility menu on the left side of each page
//---------------------------------------------------------------------------------

// Ref & Help: https://www.w3schools.com/jquery/jquery_selectors.asp
// Ref: https://api.jquery.com/slideToggle/

$(document).ready(function () {
	// Enable the dropdown menu to appear
	$(".expand-accessibility").click(function () {
		// Smoothly open and close dropdown menu when the wheelchair icon is clicked
		$(this).next(".all-acc-options").slideToggle(300);
	})
});

// Make all colors shades of grey
$("#contrast-option").eq(0).click(function () {

	// Created custom set of colors to overwrite :root when the high contrast mode is enabled in accessibility
	if (!document.body.classList.contains("--higher-contrast-mode")) {
		document.body.classList.add("--higher-contrast-mode");
	}
	// Revert to the high contrast default mode
	else {
		document.body.classList.remove("--higher-contrast-mode");
	}
})

// Apply a different font to improve readability
$("#font-option").eq(0).click(function () {
	// Change all text font to a standard font that is more readable
	$("body").toggleClass("--readable-fonts-mode");
})


//---------------------------------------------------------------------------------------
/* Settings to prevent the window from scrolling up every time an accessibility option is clicked*/
//---------------------------------------------------------------------------------------

// Get the button items from the DOM
const accessibilityButtons = document.querySelectorAll(".acc-option");

// Remove the default behavior for each accessibility button
accessibilityButtons.forEach((button) => {

	// Removing default behavior to scroll back to top of the page
	button.addEventListener("click", (event) => {
		event.preventDefault();
	});
});