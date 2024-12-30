angular.module('app').service('VehicleService', function($http) {
    const API_URL = 'http://localhost:8080/api/vehicles';

    this.getAll = function() {
        return $http.get(API_URL);
    };

    this.getStatistics = function() {
        return $http.get(`${API_URL}/statistics`);
    };

    this.save = function(vehicle) {
        return $http.post(API_URL, vehicle);
    };

    this.delete = function(id) {
        return $http.delete(`${API_URL}/${id}`);
    };
});