// Toggle About Section Hidden Contect
function toggleHiddenContent() {
	const content = document.getElementById("read-more-content")
	const btn = document.getElementById("read-more-btn")

	if (btn) {
		btn.addEventListener("click", () => {
			slideToggle(content)
			btn.classList.add("hidden")
		})
	}
}
toggleHiddenContent()

// Toggle Filters content
function toggleFiltersVisibility() {
	const btn = document.getElementById("filters-btn")
	const content = document.getElementById("filters-content")
	const icon = document.getElementById("filters-btn-icon")
	if (btn) {
		btn.addEventListener("click", () => {
			slideToggle(content)
			icon.classList.toggle("rotate-180")
		})
	}
}
toggleFiltersVisibility()
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
			slidesPerView: "auto",
			effect: "none",
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

// Slide Animation
let slideUp = (target, duration = 300) => {
	target.style.transitionProperty = "height, margin, padding"
	target.style.transitionDuration = duration + "ms"
	target.style.boxSizing = "border-box"
	target.style.height = target.offsetHeight + "px"
	target.offsetHeight
	target.style.overflow = "hidden"
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	target.style.border = "none"

	window.setTimeout(() => {
		target.style.display = "none"
		target.style.removeProperty("height")
		target.style.removeProperty("padding-top")
		target.style.removeProperty("padding-bottom")
		target.style.removeProperty("margin-top")
		target.style.removeProperty("margin-bottom")
		target.style.removeProperty("overflow")
		target.style.removeProperty("transition-duration")
		target.style.removeProperty("transition-property")
		target.style.removeProperty("border")
	}, duration)
}
let slideDown = (target, duration = 300) => {
	target.style.removeProperty("display")
	let display = window.getComputedStyle(target).display
	if (display === "none") display = "grid"
	target.style.display = display
	let height = target.offsetHeight
	target.style.overflow = "hidden"
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	target.offsetHeight
	target.style.boxSizing = "border-box"
	target.style.transitionProperty = "height, margin, padding"
	target.style.transitionDuration = duration + "ms"
	target.style.height = height + "px"
	target.style.border = "none"

	target.style.removeProperty("padding-top")
	target.style.removeProperty("padding-bottom")
	target.style.removeProperty("margin-top")
	target.style.removeProperty("margin-bottom")
	target.style.removeProperty("border")

	window.setTimeout(() => {
		target.style.removeProperty("height")
		target.style.removeProperty("overflow")
		target.style.removeProperty("transition-duration")
		target.style.removeProperty("transition-property")
		target.style.removeProperty("border")
	}, duration)
}
const slideToggle = (target, duration = 300) => {
	if (window.getComputedStyle(target).display === "none") {
		return slideDown(target, duration)
	} else {
		return slideUp(target, duration)
	}
}
