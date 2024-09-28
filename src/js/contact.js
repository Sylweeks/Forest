const hamburgerBtn = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const mobileMenuAnimation = document.querySelector('.mobile-menu-animation')
const map = document.querySelector('.map')

function showHamburgerMenu() {
	mobileMenu.classList.add('mobile-menu-animation')
}

function hideHamburgerMenu() {
	mobileMenu.classList.remove('mobile-menu-animation')
}

hamburgerBtn.addEventListener('click', showHamburgerMenu)
mobileMenuBtn.addEventListener('click', hideHamburgerMenu)

function changeMapSize() {
	if (window.innerWidth > 600 && window.innerWidth < 768) {
		map.style.width = '550px'
		map.style.height = '550px'
	} else if (window.innerWidth < 600) {
		map.style.width = '350px'
		map.style.height = '350px'
	} else if (window.innerWidth > 768 && window.innerWidth < 1099) {
		map.style.width = '450px'
		map.style.height = '450px'
	} else if (window.innerWidth > 1100) {
		map.style.width = '90%'
		map.style.height = '550px'
	}
}

changeMapSize()
window.addEventListener('resize', changeMapSize)
