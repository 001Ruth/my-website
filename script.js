const menuIcon= document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classlist.toggle('bx-x');
	navbar.classlist.toggle('active');
} 