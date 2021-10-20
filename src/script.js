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

const randomNumber = ((min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
})

const formName = document.getElementById("name");
const formEmail = document.getElementById("email");
const formMessage = document.getElementById("message");
const formButton = document.getElementById("submit");

formButton.addEventListener("click", () => {
	if (formName.value != "" && formEmail.value != "" && formMessage.value != "") {
		const user = {
			name: formName.value,
			mail: formEmail.value,
			message: formMessage.value,
		};
		localStorage.setItem(randomNumber(0, 1000000000), JSON.stringify(user))
	}
});

ScrollReveal().reveal(".library-item-container", { delay: 100 });
