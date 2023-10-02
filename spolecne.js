const menuTlacitkoElement = document.querySelector('#menu-tlacitko')
const menuPolozkyElement = document.querySelector('#menu-polozky')
menuTlacitkoElement.addEventListener('click', () => {
	menuPolozkyElement.classList.toggle('show')

	if (menuPolozkyElement.classList.contains('show')) {
		menuTlacitkoElement.innerHTML = '<i class="fas fa-xmark"></i>'
	} else {
		menuTlacitkoElement.innerHTML = '<i class="fas fa-bars"></i>'
	}
})
