(function() {
    function ModalCtrl($uibModal) {


    this.openModal = function (imagePath) {
        $uibModal.open({
          templateUrl: '/../../templates/featImageModal.html',
          controller: function ($uibModalInstance) {

            this.imagePath = imagePath;

            this.ok = function () {
              $uibModalInstance.close();
            };

            this.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
          },
          controllerAs: "imgCtrl",
          backdrop  : 'static',
          keyboard  : false
        })
      };
    }


    angular
        .module('portMK')
        .controller('ModalCtrl', ['$uibModal', ModalCtrl]);
})();
