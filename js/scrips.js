var letter = document.querySelector(".map a");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-btn");
var form = document.querySelector("form");
var input = document.querySelector("[name=name]");
var mail = document.querySelector("[name=mail]");

letter.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	popup.classList.add("animation-popup");
	input.focus();
});

close.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	popup.classList.remove("animation-popup");
});

form.addEventListener("submit", function (event) {
	if (!input.value || !mail.value) {
		event.preventDefault();
		console.log("ppppppppppppppppp");
		}
});