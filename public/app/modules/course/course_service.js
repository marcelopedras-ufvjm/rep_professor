mainApp.factory("Course", function($resource) {
    return $resource("/courses/");
});