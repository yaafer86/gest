angular.module('app').controller('PersonnelController', function($scope, PersonnelService) {
    $scope.personnel = [];

    const loadPersonnel = function() {
        PersonnelService.getAll().then(function(response) {
            $scope.personnel = response.data;
        });
    };

    $scope.delete = function(id) {
        PersonnelService.delete(id).then(loadPersonnel);
    };

    loadPersonnel();
});