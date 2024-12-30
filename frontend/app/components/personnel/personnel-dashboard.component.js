angular.module('app').controller('PersonnelDashboardController', function($scope, PersonnelService) {
    $scope.statistics = {};

    const loadStatistics = function() {
        PersonnelService.getStatistics().then(function(response) {
            $scope.statistics = response.data;
        });
    };

    loadStatistics();
});