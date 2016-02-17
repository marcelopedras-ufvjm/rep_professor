
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
}])
.config(function ($provide, $httpProvider) {

    // Intercept http calls.
    $provide.factory('AuthInterceptor', function ($q) {
        return {
            // On request success
            request: function (config) {
                var ls = JSON.parse(localStorage.getItem("auth_headers"));
                for (var attrname in  ls) {
                    config.headers[attrname] = ls[attrname];
                }
                return config || $q.when(config);
            }
        };
    });

    // Add the interceptor to the $httpProvider.

    $httpProvider.interceptors.push('AuthInterceptor');
});

