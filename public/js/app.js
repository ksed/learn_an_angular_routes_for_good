(function() {
  angular.module('frontRoutes', ['ngRoute'])
        .config(function($routeProvider) {
          $routeProvider
            .when("/", {
              templateUrl: 'html/views/home.html',
              controller: "MainController"
            } )
            .when("/home", {
              redirectTo: '/'
            } )
            .when("/login", {
              templateUrl: 'html/views/login.html',
              controller: "LoginController"
            } )
            .when("/signup", {
              templateUrl: 'html/views/signup.html',
              controller: "MainController"
            } )
            .otherwise( {
              redirectTo: '/'
            } );
        });
}());
