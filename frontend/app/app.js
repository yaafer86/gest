angular.module('app', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/personnel', {
                templateUrl: 'components/personnel/personnel.html',
                controller: 'PersonnelController'
            })
            .when('/vehicles', {
                templateUrl: 'components/vehicle/vehicle.html',
                controller: 'VehicleController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });