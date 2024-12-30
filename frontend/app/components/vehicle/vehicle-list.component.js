angular.module('app').controller('VehicleController', function($scope, VehicleService) {
    $scope.vehicles = [];

    const loadVehicles = function() {
        VehicleService.getAll().then(function(response) {
            $scope.vehicles = response.data;
        });
    };

    $scope.delete = function(id) {
        VehicleService.delete(id).then(loadVehicles);
    };

    loadVehicles();
});