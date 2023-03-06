
const burger = document.querySelector('.burger-icon');
const menu = document.querySelector('.mobile-menu');

burger.addEventListener('click', function () {
	menu.classList.toggle('open');
});