// hamburger menu script for the small screen nav
// it toggles the X animation and slides the nav down

var navToggle = document.getElementById("navToggle");
var mainNav = document.getElementById("mainNav");

// click the hamburger to open / close the menu
navToggle.addEventListener("click", function () {
	navToggle.classList.toggle("open");
	mainNav.classList.toggle("open");

	// tell screen readers what is going on
	var isOpen = navToggle.classList.contains("open");
	navToggle.setAttribute("aria-expanded", isOpen);
	navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// when you tap a link on small screens, close the menu back up
var navLinks = document.querySelectorAll(".main-nav a");
for (var i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener("click", function () {
		navToggle.classList.remove("open");
		mainNav.classList.remove("open");
		navToggle.setAttribute("aria-expanded", "false");
		navToggle.setAttribute("aria-label", "Open menu");
	});
}
