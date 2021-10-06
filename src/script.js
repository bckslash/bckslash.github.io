const btn_theme = document.querySelector(".btn-theme");

document.body.classList.remove();
document.body.classList.add(localStorage.getItem("theme"));

btn_theme.addEventListener("click", () => {
	if (document.body.classList.contains("light")) {
		document.body.classList.replace("light", "dark");
		localStorage.setItem("theme", "dark");
	} else {
		document.body.classList.replace("dark", "light");
		localStorage.setItem("theme", "light");
	}
	btn_theme.classList.toggle("dark");
});

const footer_logo = document.querySelector(".footer-logo-container");
footer_logo.addEventListener("click", (e) => {
	e.preventDefault;
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});
