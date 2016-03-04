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


        Course.index().$promise.then(function(resp){
            console.log(resp)
        })

    };

    self.handleOneCourseBtnClick = function() {
        //$http.get('/courses')
        //    .then(function (resp) {
        //        console.log(resp)
        //    })
        //    .catch(function (resp) {
        //        console.log(resp)
        //    });

        //var course;
        //var courses = Course.get({id:1}).$promise.then(function(resp){
        //    course = resp;
        //    course.name = "eng mecanica";
         //   course.$update();
        //    $http.put('/courses/1',
        //        {
        //            course: course.toJSON()
        //        });
        //});

        Course.show(1).$promise.then(function(resp){
            console.log(resp)}
        );
    };

    self.handleCreateCourseBtnClick = function() {

        Course.create({name: "TEste "}).$promise.then(function(resp){
            console.log(resp)}
        );
    };

    self.handleDeleteCourseBtnClick = function() {

        Course.destroy(7).$promise.then(function(resp){
            console.log(resp)}
        );
    };



});