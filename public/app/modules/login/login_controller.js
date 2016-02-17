//mainApp.controller('LoginController', ['$auth'], function($auth){
//
//});


mainApp.controller('LoginController', function($auth,$http){
    var self = this;

    self.attributes = {
        email: '',
        password: ''
    };

    self.handleLoginBtnClick = function() {
        $auth.submitLogin(self.attributes)
            .then(function(resp) {
                // handle success response
                self.attributes.email = ''
                self.attributes.password = ''

                console.log("sucesso")

            })
            .catch(function(resp) {
                // handle error response

            });
    };

    self.handleCoursesBtnClick = function() {
        $http.get('/courses').then(function(resp){
            console.log(resp)
        })
            .catch(function(resp){
                console.log(resp)
            });
    };
});