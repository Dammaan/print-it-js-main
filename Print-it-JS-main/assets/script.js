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
]

let numberSlide = 0

//GESTION DOTS

let dotsSelected =document.querySelectorAll(".dots i")
console.log(dotsSelected)

let dots = 0;


// GESTION ARROW
const clickArrowLeft = document.querySelector (".arrow_left");
console.log(clickArrowLeft)

const clickArrowRight = document.querySelector (".arrow_right");
console.log(clickArrowRight)

clickArrowLeft.addEventListener ("click",()=> {
	console.log( "click Left")
});

clickArrowRight.addEventListener ("click",()=> {
	changeSlideRight(numberSlide)
	});


// Changement slide DROITE

function changeSlideRight (i) {
	console.log( "click Right")
	dots = i++;
	div.dots[i--].remove ("dot_selected");
	div.dots[i--].add ("dot");
	div.dots[i++].remove ("dot");
	div.dots[i++].add ("dot_selected");
	
	//slides = i++;
	slides[i].innerHTML= slides[i]
	};







	