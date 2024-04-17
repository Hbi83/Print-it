const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

console.log(slides)

//Variables globales

const arrowleft = document.querySelector(".arrow_left");
const arrowright = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
let index = 0;


//Affichage dots

function displayDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		if (i == index) {
			dot.classList.add("dot_selected");
		}
	}
}
displayDots();

//Affichage click droit

function clickRight() {
	arrowright.addEventListener("click",()=>{
		index++;
		if (index > slides.length - 1) {
			index = 0;
		}
		bannerImg.src = `assets/images/slideshow/${slides[index].image}`;
		tagLine.innerHTML = slides[index].tagLine;
	});
}
clickRight();