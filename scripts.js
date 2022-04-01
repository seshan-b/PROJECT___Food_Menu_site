/* Navbar */

document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target-selector').forEach((item) => {
		item.classList.toggle('change-selector')
	})
})

/* End Navbar */
