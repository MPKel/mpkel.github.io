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
    }




    return Cards;
  }

  angular
    .module('portMK')
    .factory('Cards', Cards);
})();
