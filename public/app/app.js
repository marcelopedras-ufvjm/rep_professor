
var mainApp = angular.module('rep_professor',['ng-token-auth'])
    .config(function($authProvider) {
        $authProvider.configure({
            apiUrl: 'http://localhost:3000'
        });
    });