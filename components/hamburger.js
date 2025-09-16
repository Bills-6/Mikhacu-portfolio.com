const hamburgerButton = document.getElementById("hamburger-button");
const navbar = document.getElementById("navbar");

hamburgerButton.addEventListener("click", function()
{
	if (navbar.dataset.status === "close") {
		callNav("open");
	} else callNav("close");
})
const closeNavButton = document.getElementById("close-nav-button");
closeNavButton.addEventListener("click", () =>
{
	if (navbar.dataset.status !== "close") { callNav("close") };
})

document.addEventListener("click", function(e) 
{
	if (!navbar.contains(e.target) &&
	!hamburgerButton.contains(e.target)) { callNav("close") }
});

document.addEventListener("keydown", (isKey) => 
	{
		if (isKey.key === "Escape") { callNav("close"); }
	});

function callNav(is) {
	if (is === "open") {
		navbar.dataset.status = "open";
		navbar.classList.replace("right-[-200%]", "right-0");
	} else {
		navbar.dataset.status = "close";
		navbar.classList.replace("right-0", "right-[-200%]");
	}
}