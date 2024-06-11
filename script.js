// JavaScript Code

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav-links');

menuBtn.addEventListener('click', activeClass);

function activeClass(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
}

let homeSection = document.querySelector('.home');
window.addEventListener('scroll', scrollFunction);

function scrollFunction(){
	if(window.scrollY > 60){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}