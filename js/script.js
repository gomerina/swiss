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
	[].forEach.call( document.querySelectorAll('input[name="tel"]'), function(input) {
			var keyCode;
			function mask(event) {
				event.keyCode && (keyCode = event.keyCode);
				var pos = this.selectionStart;
				if (pos < 3) event.preventDefault();
				var matrix = "+7 (___) ___-__-__",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function(a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a
				});
				i = new_value.indexOf("_");
				if (i != -1) {
					i < 5 && (i = 3);
					new_value = new_value.slice(0, i)
				}
				var reg = matrix.substr(0, this.value.length).replace(/_+/g,
					function(a) {
						return "\\d{1," + a.length + "}"
					}).replace(/[+()]/g, "\\$&");
				reg = new RegExp("^" + reg + "$");
				if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
				if (event.type == "blur" && this.value.length < 5)  this.value = ""
			}
		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false)
	});
});
