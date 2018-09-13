(function() {
    function HomeCtrl(Cards) {

      this.featTitle = 'Selet a project to View';
      this.featDescription = '';
      this.featImages = {};
      this.hubLink = '';
      this.currentImage = "";


      this.setDiv = (object) => {
        this.featTitle = object.title;
        this.featDescription = object.description;
        this.featImages = object.images;
        this.hubLink = object.codeLink;
      }


      this.getCard = (cardVal) => {
          this.setDiv(Cards.giveCard(cardVal));

        }


      }

      this.setCurrentImage = (imageInfo) => {
        this.currentImage = imageInfo;
        // console.log(this.currentImage);
      }



    angular
        .module('portMK')
        .controller('HomeCtrl', ['Cards', HomeCtrl]);
})();
