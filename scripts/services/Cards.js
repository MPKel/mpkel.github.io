(function() {
  function Cards() {
    var Cards = {};

    var pong = {
       title: 'Pong',
       description: 'A recreation of the classic arcade game pong. Animated entirely with the HTML5 canvas element and JavaScript',
       images: [
         { id: 1, description: 'GameOver', imgUrl: '/pong/gameOver.png' },
         { id: 2, description: 'GameOn', imgUrl: '/pong/gameOn.png' }
       ]
    };

    var pomTimer = {
       title: 'Pomodoro Timer',
       description: 'App designed to icnrease productivity by utilizing the Pomodoro time management technique of alternating timed work sessions and breaks. Users receive alerts at the end of a session, and can add/remove and sort completed tasks. Created using AngularJS with FireBase.',
       images: [
         { id: 1, description: 'break', imgUrl: '/pomTimer/pomTimerBreak.png' },
         { id: 2, description: 'home', imgUrl: '/pomTimer/pomTimerHome.png' }
       ]
    };

    var dragonChat = {
       title: 'Dragon Chat',
       description: 'A real time chat application created with AngularJS and FireBase.',
       images: [
         { id: 1, description: 'Room', imgUrl: '/dragonChat/inRoomChat.png' },
         { id: 2, description: 'New Room', imgUrl: '/dragonChat/newRoomModal.png' },
         { id: 3, description: 'New User', imgUrl: '/dragonChat/newUser.png' }
       ]
    };

    var blocipedia = {
       title: 'Blocipedia',
       description: 'A Wikipedia clone created with Ruby on Rails. Implementing using test driven design.',
       images: [
         { id: 1, description: 'Home Page', imgUrl: '/blocipedia/homePage.png' },
         { id: 2, description: 'User Sign In', imgUrl: '/blocipedia/userSignin.png' },
         { id: 3, description: 'Wiki Listing', imgUrl: '/blocipedia/wikisList.png' }
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


    Cards.getCollection = function(numberOfAlbums) {
      this.albumsCol = [];
      for (var i = 0; i < numberOfAlbums; i++) {
         this.albumsCol.push(albumPicasso);
     }
     return this.albumsCol;

    }

    return Cards;
  }

  angular
    .module('portMK')
    .factory('Cards', Cards);
})();
