
var mainApp = angular.module('rep_professor',['ng-token-auth', 'ui.router','ui.bootstrap'])
.config(function($authProvider) {
        $authProvider.configure({
            apiUrl: 'http://localhost:3000',
            storage: "localStorage",
            validateOnPageLoad : false

        });
    })
.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouteProvider) {

        $urlRouteProvider.otherwise("/login");
        $stateProvider
            .state('/login', {
                url: '/login',
                //templateUrl: '/app/modules/login/login.html',
                views: {
                    "body" : {
                        templateUrl: "/app/modules/login/login.html",
                        controller: 'LoginController',
                        controllerAs : 'myCtrl'
                    }//,
                    //"body"   : {
                    //    templateUrl: "/app/modules/course/course.html",
                    //    controller: 'CourseController',
                    //    controllerAs: 'myCtrl'
                    //}
                }
                //controller: 'LoginController',
                //controllerAs : 'myCtrl'
            })
            .state('/home', {
                url: '/home',
                views: {
                    "body": {
                        templateUrl: '/app/modules/home/home.html',
                        controller: 'HomeController',
                        controllerAs: 'myCtrl'
                    }
                }
            })
            .state('/course', {
                url: '/course',
                views: {
                    templateUrl: '/app/modules/course/course.html',
                    controller: 'CourseController',
                    controllerAs: 'myCtrl'
                }
            })
}])
.config(function ($provide, $httpProvider) {

    // Intercept http calls.
    $provide.factory('AuthInterceptor', function ($q, $rootScope) {
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
            ,

            responseError : function(resp) {
                if (resp && resp.status === 401) {
                    $rootScope.$emit('loginRequired', resp);
                }

                return $q.reject(resp);
                //return resp || $q.when(resp);
            }
        };
    });

    // Add the interceptor to the $httpProvider.

    $httpProvider.interceptors.push('AuthInterceptor');
})
    .run( function($rootScope, $location, $auth) {

        // register listener to watch route changes
        $rootScope.$on( "$routeChangeStart", function(event, next) {
            //console.log(arguments);
            if ('$$route' in next) {
                if (next.$$route.originalPath == '/login') {
                    if($auth.userIsAuthenticated()) {
                        $location.path('home');
                    } else {
                        $auth.validateUser()
                            .then(function (resp) {
                                $location.path('home');
                            })
                            .catch(function (resp) {})
                    }
                } else {
                    if(!$auth.userIsAuthenticated()) {
                        $auth.validateUser()
                            .then(function (resp) {
                                //$location.path('home');
                            })
                            .catch(function (resp) {
                                $location.path("login")
                            })

                    }
                }
            }
                //$auth.validateUser()
                //    .then(function (resp) {
                //        if ('$$route' in next) {
                //            if (next.$$route.originalPath == '/login') {
                //                $location.path('home')
                //            }
                //        } else {
                //            $location.path('home')
                //        }
                //    })
                //    .catch(function (resp) {
                //        console.log(resp);
                //        if (next.$$route.originalPath !== 'login') {
                //            $location.path('login')
                //        }
                //    })
        });
        $rootScope.$on( "loginRequired", function(event, resp) {
                $location.path('login');

        });
    });

