$( document ).ready(function(){



  var hidden = true;
  //PAGE ENTRY BUTTON
    $('#enter-btn').click(function(){
      //slide up header
      $("#portfolio-header").fadeOut(500, "swing", function() {
        //un-hide main section
        $("main").fadeIn(1200, "swing", function() {
          $(".project-gallery__zone").css("background", "rgba(0,0,0,0.5)");
        });
      });


    });

    //HOVERING A CARD
    $(".project").hover(function(){
      $(this).find("img").css("filter", "opacity(1)");
      }, function(){
      $(this).find("img").css("filter", "opacity(0)");
    });


    // CLICKING A CARD
    $(".project").click(function(){
      $(".feat-descrips").css("display", "none");
      $(".project-description").css("display", "none");
      $(".project-hublink").css("display", "none");
      $(".project-gallery__zone").css("box-shadow", "3px 3px 3px 4px rgba(0,0,0,0.55)").css("background", "rgba(0,253,58,1)");

            // DISPLAY MAIN PROJECT AREA
      if(hidden){
        $(".card-row").fadeOut(300, function(){
          $("#featured-main").fadeIn(1200, "swing", function(){
            $(".feat-descrips").fadeIn(200);
            $('.feat-img__container').animate({
              height: '300px',
              width: '300px'
            }, 1700);
          });
        });

          // $("#featured-main").animate({opacity: '1'}, 'slow');


          hidden = false;
      }

      $(".feat-descrips").fadeIn(400, function() {
        $(".project-description").fadeIn(200, function() {
          $(".project-hublink").slideDown(400);
        });
      });






      // CLOSE MAIN PROJECT AREA
      $('#close-main').click(function(){
        $("#featured-main").fadeOut(300, function(){
          $(".card-row").fadeIn(500);
          $(".project-gallery__zone").css("box-shadow", "5px 5px 5px 5px rgba(0,0,0,0)").css("background", "rgba(0,0,0,0.5)");

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
