var slideIndex = 1;
var activeModalName = 'myModal';

function openModal(modalName) {
  document.getElementById(modalName).style.display = "block";
  activeModalName = modalName;
}

function closeModal(modalName) {
  document.getElementById(modalName).style.display = "none";
  activeModalName = null;
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slidesSelector = "#" + activeModalName + " .mySlides";
  var dotsSelector = "#" + activeModalName + " .demo";
  var captionTextSelector = activeModalName + "-caption";
  var slides = document.querySelectorAll(slidesSelector);
  var dots = document.querySelectorAll(dotsSelector);
  var captionText = document.getElementById(captionTextSelector);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

showSlides(slideIndex);
