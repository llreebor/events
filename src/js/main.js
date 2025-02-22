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
