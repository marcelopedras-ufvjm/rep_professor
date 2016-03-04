mainApp.factory("Course", function($resource) {
    return $resource('/courses/:id',{}, {
        'index'   : {method: 'GET', isArray: true},
        'create'  : {method: 'POST'},
        'show'    : {method: 'GET'},
        'update'  : {method: 'PUT'},
        'destroy' : {method: 'DELETE'}
    });
});