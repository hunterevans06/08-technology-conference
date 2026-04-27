// grab the toggle button and the nav so we can flip them open and closed
var navToggle = document.getElementById("navToggle");
var mainNav = document.getElementById("mainNav");

// when the user clicks the hamburger, toggle the open class on both
// the .open class on the button is what animates the bars into an X
// the .open class on the nav is what slides the menu down
navToggle.addEventListener("click", function () {
	navToggle.classList.toggle("open");
	mainNav.classList.toggle("open");

	// update aria-expanded so screen readers know the state
	var isOpen = navToggle.classList.contains("open");
	navToggle.setAttribute("aria-expanded", isOpen);
	navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// when a nav link is clicked on small screens, close the menu back up
var navLinks = document.querySelectorAll(".main-nav a");
for (var i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener("click", function () {
		navToggle.classList.remove("open");
		mainNav.classList.remove("open");
		navToggle.setAttribute("aria-expanded", "false");
		navToggle.setAttribute("aria-label", "Open menu");
	});
}
