
var mainApp = angular.module('rep_professor',['ng-token-auth', 'ngRoute'])
.config(function($authProvider) {
        $authProvider.configure({
            apiUrl: 'http://localhost:3000',
            storage: "localStorage",
            validateOnPageLoad : false

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
                    config.headers[attrname.toLocaleLowerCase()] = ls[attrname.toLocaleLowerCase()];
                }
                return config || $q.when(config);
            },
            response: function (resp) {
                //console.log('response');
                //console.log(resp.config.headers);
                var auth_headers = {};
                var headers = resp.headers();
                var access_token_info = [
                    'access-token',
                    'client',
                    'expiry',
                    'token-type',
                    'uid'
                ];

                Object.keys(headers).forEach(function(el){
                    if(access_token_info.includes(el.toLowerCase())) {
                        auth_headers[el.toLowerCase()] = headers[el];
                    }
                });

                if(Object.keys(auth_headers).length != 0) {
                    localStorage.setItem('auth_headers', JSON.stringify(auth_headers));
                }
                return resp || $q.when(resp);
            }
        };
    });

    // Add the interceptor to the $httpProvider.

    $httpProvider.interceptors.push('AuthInterceptor');
});

