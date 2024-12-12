const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let numberSlide = 0;


// GESTION ARROW
const clickArrowLeft = document.querySelector(".arrow_left");

const clickArrowRight = document.querySelector(".arrow_right");


clickArrowLeft.addEventListener("click", () => {
	changeSlideLeft(numberSlide);
});

clickArrowRight.addEventListener("click", () => {
	changeSlideRight(numberSlide);
});

const imgSlide = document.querySelector(".banner-img");

const txtSlide =document.querySelector ("#banner p");


// Changement slide DROITE

function changeSlideRight (numberSlide) {
	numberSlide++
	/**div.dots.remove ("dot_selected");
	div.dots[numberSlide].add ("dot_selected");*/
	imgSlide.src = "./assets/images/slideshow/" + slides[numberSlide].image
	txtSlide.innerHTML = slides[numberSlide].tagLine
	console.log(numberSlide)
	};

function changeSlideLeft (numberSlide) {
	numberSlide-1
	/**div.dots.remove ("dot_selected");
	div.dots[numberSlide].add ("dot_selected");*/
	imgSlide.src = "./assets/images/slideshow/" + slides[numberSlide].image
	txtSlide.innerHTML = slides[numberSlide].tagLine
	console.log(numberSlide)
	};




 // BOUCLE INFINI

	/*if numberSlide = slides.length
		numberSlide = 0

	if numberSlide = -1
		numberSlide = slides.lenght-1 */