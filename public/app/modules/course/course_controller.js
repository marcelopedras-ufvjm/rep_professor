mainApp.controller('CourseController', function($rootScope, $scope, $auth,$http, Course){
    var self = this;

    self.handleListCourseBtnClick = function() {
        //$http.get('/courses')
        //    .then(function (resp) {
        //        console.log(resp)
        //    })
        //    .catch(function (resp) {
        //        console.log(resp)
        //    });


        var courses = Course.query().$promise.then(function(resp){
            console.log(resp);
        });

    }
});