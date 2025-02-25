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
new Swiper(".swiper-events", {
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

// Videos Slider
new Swiper(".swiper-videos", {
	// Optional parameters
	loop: true,
	spaceBetween: 20,
	centeredSlides: true,
	effect: "coverflow",
	coverflowEffect: {
		rotate: 0,
		stretch: 10,
		depth: 2000,
		modifire: 1,
		scale: 1.9,
		slideShadows: false,
	},
	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			draggable: true,
		},

		// when window width is >= 640px
		768: {
			slidesPerView: 2,
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-videos-next",
		prevEl: ".swiper-videos-prev",
	},
})
