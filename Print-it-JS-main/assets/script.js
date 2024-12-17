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

// GESTION ELEMENTS

const dots = document.querySelectorAll(".dots i ");

const clickArrowLeft = document.querySelector(".arrow_left");

const clickArrowRight = document.querySelector(".arrow_right");

const imgSlide = document.querySelector(".banner-img");

const txtSlide = document.querySelector("#banner p");

// CLIC FLECHE GAUCHE
clickArrowLeft.addEventListener("click", () => {
  changeSlideLeft();
});

// CLIC FLECHE DROITE
clickArrowRight.addEventListener("click", () => {
  changeSlideRight();
});

// cHANGEMENT DOTS
function changeDots() {
  dots.forEach((dot) => dot.classList.remove("dot_selected"));
  dots[numberSlide].classList.add("dot_selected");
}

// Changement slide DROITE

function changeSlideRight() {
  numberSlide++;
  if (numberSlide === slides.length) {
    numberSlide = 0;
  }
  changeDots();
  imgSlide.src = "./assets/images/slideshow/" + slides[numberSlide].image;
  txtSlide.innerHTML = slides[numberSlide].tagLine;
}

// Changement slide GAUCHE

function changeSlideLeft() {
  numberSlide--;
  if (numberSlide < 0) {
    numberSlide = slides.length - 1;
  }
  changeDots();
  imgSlide.src = "./assets/images/slideshow/" + slides[numberSlide].image;
  txtSlide.innerHTML = slides[numberSlide].tagLine;
}

// Mise à jour slide

/*function updateSlide() {
	changeDots();
	imgSlide.src = "./assets/images/slideshow/" + slides[numberSlide].image;
	txtSlide.innerHTML = slides[numberSlide].tagLine;
	console.log(numberSlide)

}*/
