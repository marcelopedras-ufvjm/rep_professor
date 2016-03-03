mainApp.factory("Course", function($http) {
    var self = this;
    var baseUrl = "courses";
    var modelName = "course";

    return {
        index: function() {
            return $http.get(baseUrl);
        },
        create: function(data) {
            return $http.post(baseUrl, {course: data});
        },
        show: function(id) {
            return $http.get(baseUrl+"/"+id);
        },
        update: function() {
            return $http.put(baseUrl, {course: data});
        },
        destroy: function(id) {
            return $http.delete(baseUrl+"/"+id);
        }
    }
});