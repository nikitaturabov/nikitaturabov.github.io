(function(btnMobileMenuOpen) {
	if (!btnMobileMenuOpen) {
		return;
	}

	const mobileMenu = document.querySelector(".bk-mobile-menu");
	const btnMobileMenuClose = document.querySelector(".js-btn-close-menu");

	btnMobileMenuOpen.addEventListener("click", function(e) {
		mobileMenu.classList.add("bk-mobile-menu--opened");
		document.querySelector("body").style.overflowY = "hidden";
	});

	btnMobileMenuClose.addEventListener("click", function(e) {
		mobileMenu.classList.remove("bk-mobile-menu--opened");
		document.querySelector("body").style.overflowY = "auto";
	});
})(document.querySelector(".js-btn-open-menu"));
