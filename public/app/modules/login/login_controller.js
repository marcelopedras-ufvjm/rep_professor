//mainApp.controller('LoginController', ['$auth'], function($auth){
//
//});


mainApp.controller('LoginController', function($rootScope, $scope, $auth,$http,$location){
    var self = this;

    self.attributes = {
        email: '',
        password: ''
    };

    //$rootScope.$on('auth:validation-error', function(ev, user) {
    //    alert('auth:validation-error');
    //});
    //
    //$rootScope.$on('auth:session-expired', function(ev, user) {
    //    alert('auth:session-expired');
    //});
    //
    //$rootScope.$on('auth:validation-success', function(ev, user) {
    //    alert('auth:validation-success');
    //    var ls = JSON.parse(localStorage.getItem("auth_headers"));
    //    for (var attrname in  ls) {
    //        $http.defaults.headers.common[attrname] = ls[attrname];
    //    }
    //});

    //$rootScope.$on('auth:login-success', function(ev, user) {
    //    alert('auth:login-success');
    //});
    //
    //$rootScope.$on('auth:login-error', function(ev, user) {
    //    alert('auth:login-error');
    //});






    self.handleLoginBtnClick = function() {
        $auth.submitLogin(self.attributes)
            .then(function(resp) {
                // handle success response
                self.attributes.email = '',
                self.attributes.password = '',

               // console.log("sucesso")
                $location.path("/main")

            })
            .catch(function(resp) {
                // handle error response

            });
    };

    self.handleCoursesBtnClick = function() {
        $http.get('/courses').then(function (resp) {

                console.log(resp)
            })
            .catch(function (resp) {
                console.log(resp)
            });
    };
});