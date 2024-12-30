angular.module('app').controller('VehicleDashboardController', function($scope, VehicleService) {
    $scope.statistics = {};

    const loadStatistics = function() {
        VehicleService.getStatistics().then(function(response) {
            $scope.statistics = response.data;
        });
    };

    loadStatistics();
});