mainApp.controller('HomeController', function($rootScope, $scope, $auth,$http,$location){
var self = this;

    self.handleLogoutBtnClick = function() {
        $auth.signOut()
            .then(function(resp) {
                // handle success response
                $location.path('/login');
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