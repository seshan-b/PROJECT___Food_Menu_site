/* Navbar */
document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target-selector').forEach((item) => {
		item.classList.toggle('change-selector')
	})
})
/* End Navbar */

/* Section 1 */

// Get icon
const allIcons = document.querySelectorAll('.section-1-icons i')

let iconCounter = 1

setInterval(() => {
	iconCounter++

	const eachIcon = document.querySelector('.section-1-icons .change')
}, 4000)

/* End Section 1 */
