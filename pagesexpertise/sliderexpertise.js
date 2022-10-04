let slider = tns({
  container: "#slider",
  items: 1,
  mouseDrag: true,
  swipeAngle: false,
  speed: 400,
  autoplay: true,
  autoplayButtonOutput: false,
  controls: false,
  nav: false,
  autoHeight: true,
});
let slidertuyauterie = tns({
  container: "#slidermetallerie",
  items: 1,
  mouseDrag: true,
  swipeAngle: false,
  speed: 400,
  autoplay: true,
  autoplayButtonOutput: false,
  controls: false,
  nav: false,
  autoHeight: true,
});
let sliderchaudronnerie = tns({
  container: "#sliderchaudronnerie",
  items: 1,
  mouseDrag: true,
  swipeAngle: false,
  speed: 400,
  autoplay: true,
  autoplayButtonOutput: false,
  controls: false,
  nav: false,
  autoHeight: true,
});
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// metallerie

var slideIndexMetallerie = 1;
showSlidesMetallerie(slideIndexMetallerie);

function plusSlidesMetallerie(n) {
  showSlidesMetallerie((slideIndexMetallerie += n));
}

function currentSlideMetallerie(n) {
  showSlidesMetallerie((slideIndexMetallerie = n));
}
function currentSlideMetallerie(n) {
  showSlidesMetallerie((slideIndexMetallerie = n));
}

function showSlidesMetallerie(n) {
  var j;
  var slidesMetallerie = document.getElementsByClassName("mySlidesMetallerie");
  var dotsMetallerie = document.getElementsByClassName("demoMetallerie");
  var captionTextMetallerie = document.getElementById("captionMetallerie");
  if (n > slidesMetallerie.length) {
    slideIndexMetallerie = 1;
  }
  if (n < 1) {
    slideIndexMetallerie = slidesMetallerie.length;
  }
  for (j = 0; j < slidesMetallerie.length; j++) {
    slidesMetallerie[j].style.display = "none";
  }
  for (j = 0; j < dotsMetallerie.length; j++) {
    dotsMetallerie[j].className = dotsMetallerie[j].className.replace(
      " active",
      ""
    );
  }
  slidesMetallerie[slideIndexMetallerie - 1].style.display = "block";
  dotsMetallerie[slideIndexMetallerie - 1].className += " active";
  captionTextMetallerie.innerHTML =
    dotsMetallerie[slideIndexMetallerie - 1].alt;
}
function openModalMetallerie() {
  document.getElementById("myModalmetallerie").style.display = "block";
}

function closeModalMetallerie() {
  document.getElementById("myModalmetallerie").style.display = "none";
}

// chaudronnerie

var slideIndexChaudronnerie = 1;
showSlidesChaudronnerie(slideIndexChaudronnerie);

function plusSlidesChaudronnerie(n) {
  showSlidesChaudronnerie((slideIndexChaudronnerie += n));
}

function currentSlideChaudronnerie(n) {
  showSlidesChaudronnerie((slideIndexChaudronnerie = n));
}
function currentSlideChaudronnerie(n) {
  showSlidesChaudronnerie((slideIndexChaudronnerie = n));
}

function showSlidesChaudronnerie(n) {
  var k;
  var slidesChaudronnerie = document.getElementsByClassName(
    "mySlidesChaudronnerie"
  );
  var dotsChaudronnerie = document.getElementsByClassName("demoChaudronnerie");
  var captionTextChaudronnerie = document.getElementById(
    "captionChaudronnerie"
  );
  if (n > slidesChaudronnerie.length) {
    slideIndexChaudronnerie = 1;
  }
  if (n < 1) {
    slideIndexChaudronnerie = slidesChaudronnerie.length;
  }
  for (k = 0; k < slidesChaudronnerie.length; k++) {
    slidesChaudronnerie[k].style.display = "none";
  }
  for (k = 0; k < dotsChaudronnerie.length; k++) {
    dotsChaudronnerie[k].className = dotsChaudronnerie[k].className.replace(
      " active",
      ""
    );
  }
  slidesChaudronnerie[slideIndexChaudronnerie - 1].style.display = "block";
  dotsChaudronnerie[slideIndexChaudronnerie - 1].className += " active";
  captionTextChaudronnerie.innerHTML =
    dotsChaudronnerie[slideIndexChaudronnerie - 1].alt;
}
function openModalChaudronnerie() {
  document.getElementById("myModalChaudronnerie").style.display = "block";
}

function closeModalChaudronnerie() {
  document.getElementById("myModalChaudronnerie").style.display = "none";
}
