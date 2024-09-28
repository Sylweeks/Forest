const picnicImg = document.querySelector('.picnic-img')
const waterImg = document.querySelector('.water-img')
const cateringImg = document.querySelector('.catering-img')
const hamburgerBtn = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const mobileMenuAnimation = document.querySelector('.mobile-menu-animation')

function changeImage() {
	if (window.innerWidth < 800) {
		picnicImg.src = '../../src/img/piknikSmall.jpg'
		waterImg.src = '../../src/img/waterEqSmall.jpg'
		cateringImg.src = '../../src/img/cateringSmall.jpg'
	} else {
		picnicImg.src = '../../src/img/piknikLarge.jpg'
		waterImg.src = '../../src/img/waterEqLarge.jpg'
		cateringImg.src = '../../src/img/cateringLarge.jpg'
	}
}

function showHamburgerMenu() {
	mobileMenu.classList.add('mobile-menu-animation')
}

function hideHamburgerMenu() {
	mobileMenu.classList.remove('mobile-menu-animation')
}

changeImage()

window.addEventListener('resize', changeImage)
hamburgerBtn.addEventListener('click', showHamburgerMenu)
mobileMenuBtn.addEventListener('click', hideHamburgerMenu)
