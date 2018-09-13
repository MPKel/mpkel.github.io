(function() {
  function Cards() {
    var Cards = {};

    var pong = {
       title: 'Pong',
       description: 'A recreation of the classic arcade game pong. Animated entirely with the HTML5 canvas element and JavaScript',
       codeLink: 'pong',
       images: [
         { id: 1, description: 'Game Over', imgUrl: 'images/pong/gameOver.png' },
         { id: 2, description: 'New Game', imgUrl: 'images/pong/gameOn.png' }
       ]
    };

    var pomTimer = {
       title: 'Pomodoro Timer',
       description: 'App designed to increase productivity by utilizing the Pomodoro time management technique of alternating timed work sessions and breaks. Users receive alerts at the end of a session, and can add/remove and sort completed tasks. Created using AngularJS with FireBase.',
       codeLink: 'bloctime',
       images: [
         { id: 1, description: 'Time For A Break', imgUrl: 'images/pomTimer/pomTimerBreak.png' },
         { id: 2, description: 'Home View', imgUrl: 'images/pomTimer/pomTimerHome.png' }
       ]
    };

    var dragonChat = {
       title: 'Dragon Chat',
       description: 'A real time chat application created with AngularJS and FireBase.',
       codeLink: 'bloc-chat',
       images: [
         { id: 1, description: 'In Room', imgUrl: 'images/dragonChat/inRoomChat.png' },
         { id: 2, description: 'New Room', imgUrl: 'images/dragonChat/newRoomModal.png' },
         { id: 3, description: 'New User', imgUrl: 'images/dragonChat/newUser.png' }
       ]
    };

    var blocipedia = {
       title: 'Blocipedia',
       description: 'A Wikipedia clone created with Ruby on Rails. Implemented using test driven design.',
       codeLink: 'blocipedia',
       images: [
         { id: 1, description: 'Home Page', imgUrl: 'images/blocipedia/homePage.png' },
         { id: 2, description: 'User Sign In', imgUrl: 'images/blocipedia/userSignIn.png' },
         { id: 3, description: 'Wiki Listing', imgUrl: 'images/blocipedia/wikisList.png' }
       ]
    };

    var uie1 = {
       title: 'UIE Design challenge 1',
       description: 'This project was part of a design challenge for selection as a Front End Web Development Intern At User Interface Engineering. The task was to capture the look and feel of the company\'s 2015 conference site while maintaining the layout of the company\'s 2014 conference site.',
       codeLink: 'uie-mi-challenge',
       images: [
         { id: 1, description: 'Home View', imgUrl: 'images/uie1/mainss-1.png' },
         { id: 2, description: 'Mobile View 1', imgUrl: 'images/uie1/mobile1.png' },
         { id: 3, description: 'Mobile View 2', imgUrl: 'images/uie1/present.png' }
       ]
    };

    var uie2 = {
       title: 'UIE Design challenge 2',
       description: 'This project was part of a design challenge for selection as a Front End Web Development Intern At User Interface Engineering. The task was to design an entirely new landing page while maintaining the look and feel of the company\'s 2015 conference site.',
       codeLink: 'uie-custom-challenge',
       images: [
         { id: 1, description: 'Home View', imgUrl: 'images/uie2/mainss-1.png' },
         { id: 2, description: 'Home View 2', imgUrl: 'images/uie2/mainss-2.png' },
         { id: 3, description: 'Mobile View', imgUrl: 'images/uie2/mobile1.png' }
       ]
    };

    var uieEmail = {
       title: 'Team Discussions Email campaign',
       description: 'This was an email campaign designed from scratch to highlight team focused discussion points for video seminars. 27 design iterations were presented to management team.',
       codeLink: 'uie-custom-challenge',
       images: [
         { id: 1, description: 'Email mockup 1', imgUrl: 'images/uieEmail/mainss-1.png' },
         { id: 2, description: 'Email mockup 2', imgUrl: 'images/uieEmail/mainss-2.png' },
         { id: 3, description: 'Email mockup 3', imgUrl: 'images/uieEmail/mainss-3.png' }
       ]
    };


    Cards.giveCard = function(value) {
      if (value == 1){
        return pong;
      }
      else if(value ==2){
        return pomTimer;
      }
      else if(value == 3){
        return dragonChat;
      }
      else if(value == 4){
        return blocipedia;
      }
      else if(value == 5){
        return uie1;
      }
      else if(value == 6){
        return uie2;
      }
      else if(value == 7){
        return uieEmail;
      }
    }




    return Cards;
  }

  angular
    .module('portMK')
    .factory('Cards', Cards);
})();
