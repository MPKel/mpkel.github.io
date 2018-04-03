(function() {
    function HomeCtrl(Cards) {

      this.featTitle = 'Selet a project to View';
      this.featDescription = '';
      this.featImages = {};


      this.setDiv = (object) => {
        this.featTitle = object.title;
        this.featDescription = object.description;
        this.featImages = object.images;
      }


      this.getCard = (cardVal) => {
          this.setDiv(Cards.giveCard(cardVal));
        
        }


      }





    angular
        .module('portMK')
        .controller('HomeCtrl', ['Cards', HomeCtrl]);
})();
