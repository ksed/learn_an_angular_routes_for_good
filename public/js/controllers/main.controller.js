(function() {
  angular.module('frontRoutes')
      .controller('MainController', MainController);

  MainController.$inject = ['$scope'];

  function MainController($scope){
    $scope.message = "It works!";
    $scope.stuff = stuff;
    function stuff(message) {
      alert(message);
    }
  }
}());
