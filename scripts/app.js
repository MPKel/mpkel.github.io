$( document ).ready(function(){


  // $("#smokt").animate({left: '100%'}, 10000);
  // $("#smokt").animate({left: '0%'}, 10000);
  var hidden = true;

    $('#enter-btn').click(function(){
      //un-hide main section
      $("main").removeClass("hidden");
      //slide up header
      $("#portfolio-header").slideUp("slow");

    });

    $(".project").click(function(){
      if(hidden){
      $("#featured-main").slideDown("slow");
      $("#featured-main").animate({opacity: '1'}, 'slow');
      hidden = false;
    }

    var slideIndex = 1;
    showSlides(slideIndex);
    });

});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
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
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}



(function() {

    angular
        .module('portMK', []);
})();
