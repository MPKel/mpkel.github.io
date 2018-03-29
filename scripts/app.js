$( document ).ready(function(){


  // $("#smokt").animate({left: '100%'}, 10000);
  // $("#smokt").animate({left: '0%'}, 10000);

  console.log("helloTest");

  $('#enter-btn').click(function(){
    //un-hide main section
    $("main").removeClass("hidden");

    //slide up header
    $("#portfolio-header").slideUp("slow");



  });



});
