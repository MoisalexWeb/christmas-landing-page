const body = document.body,
	nav = document.querySelector('.nav'),
	scrollButton = document.querySelector('.scroll__button'),
	sectionsScrollSpy = [...document.querySelectorAll("[data-section]")];


// Change nav and Scroll buttons styles when scroll
const newStyles = () => {
	// Nav
	if (window.scrollY >= 150) nav.classList.add("nav-2")
	else nav.classList.remove("nav-2")

	// Scroll Button
	if (window.scrollY >= 300) scrollButton.classList.add("show-button")
	else scrollButton.classList.remove("show-button")
}

// Scroll spy
const scrollSpy = () => {
	const scrollY = window.pageYOffset

    sectionsScrollSpy.forEach(section => {
        const sectionHeight = section.offsetHeight,
            sectionTop = section.offsetTop - 50,
            sectionId = section.id,
            sectionLink = document.querySelector(`.nav a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        	sectionLink.classList.add('active-section')
        } else sectionLink.classList.remove('active-section');
    });
}

document.addEventListener('click', e => {
	// Mobile menu
	if (e.target.matches(".nav__hamburger")) {
		body.classList.toggle("show-menu")
	}

	// Remove mobile menu when click on links
	else if (e.target.matches(".nav__menu__links-link")) {
		body.classList.remove("show-menu")
	}

	// Dark / light theme
	else if (e.target.matches(".nav__menu__switch")) {
		body.classList.toggle("dark-theme")
		if (body.classList.contains("dark-theme")) localStorage.setItem('webMode', 'dark')
		else localStorage.setItem('webMode', 'light')
	}

	// Scroll to top
	else if(e.target === scrollButton) {
		window.scrollTo(0,0)
	}
})

document.addEventListener('DOMContentLoaded', () => {
	newStyles()
	scrollSpy()

	if (localStorage.getItem("webMode") === "dark") body.classList.add("dark-theme")
	else body.classList.remove("dark-theme")
})

window.addEventListener('scroll', () => {
	newStyles()
	scrollSpy()
})

// Initialize AOS
AOS.init()