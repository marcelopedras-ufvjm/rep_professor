
var mainApp = angular.module('rep_professor',['ng-token-auth', 'ngRoute'])
.config(function($authProvider) {
        $authProvider.configure({
            apiUrl: 'http://localhost:3000',
            storage: "localStorage"
        });
    })
.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/modules/login/login.html',
                controller: 'LoginController',
                controllerAs : 'myCtrl'
            });
}]);
