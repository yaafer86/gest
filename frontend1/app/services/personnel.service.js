angular.module('app').service('PersonnelService', function($http) {
    const API_URL = 'http://localhost:8080/api/personnel';

    this.getAll = function() {
        return $http.get(API_URL);
    };

    this.getStatistics = function() {
        return $http.get(`${API_URL}/statistics`);
    };

    this.save = function(personnel) {
        return $http.post(API_URL, personnel);
    };

    this.delete = function(id) {
        return $http.delete(`${API_URL}/${id}`);
    };
});