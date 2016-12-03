(function() {
  angular.module('frontRoutes')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope'];

  function LoginController($scope) {
    $scope.user = {
      email: '',
      password: ''
    };
    $scope.login = login;
    function login(user) {
      console.log(user);
    }
  }
}());
