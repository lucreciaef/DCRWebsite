	// Using templated header & footer
	// Source: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots
	let headerTemplate = document.getElementById("header-template");
	let footerTemplate = document.getElementById("footer-template");
	let headerTemplateContent = headerTemplate.content;

	let footerTemplateContent = footerTemplate.content;

	document.getElementById("header-placeholder").appendChild(headerTemplateContent);
	document.body.appendChild(footerTemplateContent);


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