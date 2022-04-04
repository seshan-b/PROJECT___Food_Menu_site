/* Navbar */
document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target-selector').forEach((item) => {
		item.classList.toggle('change-selector')
	})
})
/* End Navbar */


/* Section 1 */

const allIcons = document.querySelectorAll(".section-1-icons i");