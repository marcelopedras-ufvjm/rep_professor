//mainApp.controller('LoginController', ['$auth'], function($auth){
//
//});


mainApp.controller('LoginController', function($rootScope, $scope, $auth,$http,$location){
    var self = this;

    self.attributes = {
        email: '',
        password: ''
    };


    self.handleLoginBtnClick = function() {
        $auth.submitLogin(self.attributes)
            .then(function(resp) {
                // handle success response
                self.attributes.email = '';
                self.attributes.password = '';
               // console.log("sucesso")
                $location.path("/home")
            })
            .catch(function(resp) {
                // handle error response

            });
    };
});