// Toggle About Section Hidden Contect
function toggleHiddenContent() {
	const content = document.getElementById("read-more-content")
	const btn = document.getElementById("read-more-btn")

	if (btn) {
		btn.addEventListener("click", () => {
			content.classList.remove("hidden")
			btn.classList.add("hidden")
		})
	}
}
toggleHiddenContent()

// Events Sldier
const swiper = new Swiper(".swiper-events", {
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
	},
	// Responsive breakpoints
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 1.3,
		},
		992: {
			slidesPerView: 2.1,
		},
	},
})
