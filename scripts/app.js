$( document ).ready(function(){



  var hidden = true;
  //PAGE ENTRY BUTTON
    $('#enter-btn').click(function(){
      //un-hide main section
      $("main").removeClass("d-none");
      //slide up header
      $("#portfolio-header").slideUp(1500, "swing");

    });


    // CLICKING A CARD
    $(".project").click(function(){
      $(".feat-descrips").css("display", "none");
      $(".project-description").css("display", "none");
      $(".project-hublink").css("display", "none");
      $(".project-gallery__zone").css("box-shadow", "3px 3px 3px 4px rgba(0,0,0,0.75)").css("background", "rgba(143,153,168,0.65)");

            // DISPLAY MAIN PROJECT AREA
      if(hidden){
        $(".card-row").fadeOut(300, function(){
          $("#featured-main").fadeIn(1500, "swing", function(){
            $('.feat-img__container').animate({
              height: '300px',
              width: '300px'
            }, 1500);
            $(".feat-descrips").slideDown(900);
          });
        });

          // $("#featured-main").animate({opacity: '1'}, 'slow');


          hidden = false;
      }

      $(".feat-descrips").fadeIn("slow");
      $(".project-description").slideDown("slow");
      $(".project-hublink").slideDown("slow");




      // CLOSE MAIN PROJECT AREA
      $('#close-main').click(function(){
        $("#featured-main").fadeOut(600, "swing", function(){
          $(".project-gallery__zone").css("box-shadow", "5px 5px 5px 5px rgba(0,0,0,0)").css("background", "rgba(255,255,255,0.65)");
          $(".card-row").fadeIn("slow");
          hidden = true;
        });


      });

      // CAROUSEL CONTROLS
      $(".carousel-item").each(function(index, obj) {
        if(index == 0){
          $(obj).addClass("active");
        }
        else {
          $(obj).removeClass("active");
        }
      });

    });



    // $('.modal').click(function(){
    //   $('.backdrop').removeClass('open');
    //   $('.modal').removeClass('open');
    //   console.log('hellooooo');
    // });



});






(function() {

    angular
        .module('portMK', ['ui.bootstrap']);
})();
