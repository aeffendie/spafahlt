/*sl = 1;
function showSlides(slideIndex) {
    var i;
    console.log(slideIndex)
    var dots = document.getElementsByClassName('dot');
    var slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    
   slides[slideIndex-1].style.display = "block";

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '')
    }
    dots[slideIndex - 1].className += ' active';
    setTimeout(showSlides(slideIndex), 6000); // Change image every 2 seconds
} 

showSlides(sl);
//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(sl += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(sl = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}*/ 
