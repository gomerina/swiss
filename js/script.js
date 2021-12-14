document.addEventListener("DOMContentLoaded", function(event) {
	AOS.init();
	let headerButton = document.querySelector(".header__button");
	let headerMenu = document.querySelector('.header__menu');
	let headerInner = document.querySelector('.header__inner');
	let burger = document.querySelector('.header__burger');
	let mobileMenu = document.querySelector('.uk-open');
	let mobileBar = document.querySelector('.uk-offcanvas-bar');
	function appendBtn() {
		var w = window.innerWidth;
		if (w <= 1023) {
			document.querySelector(".header__menu").appendChild(headerButton);
		}
	}
	function returnBtn() {
		var w = window.innerWidth;
		if (w >= 1023) {
			document.querySelector(".header__inner").appendChild(headerButton);
		}
	}
	appendBtn();
	returnBtn();
	window.addEventListener('resize', function(){
		appendBtn();
		returnBtn();
	})
	var mainNav = document.querySelector('.header');
	function windowScroll() {
		mainNav.classList.toggle("bg", mainNav.scrollTop > 100 || document.documentElement.scrollTop > 100);
	}
	windowScroll();
	window.onscroll = function() {
		windowScroll();
	};
});