(function () {
    'use strict';

    angular
        .module('ngApp')
        .controller('baseCtrl', baseCtrl)

    baseCtrl.$inject = ['$scope', '$rootScope', 'dataService'];
    /** @ngInject */
    function baseCtrl($scope, $rootScope, dataService) {
        var promise = dataService.fetch('get', '/api/database/getdata');
        promise.then(data => $rootScope.budgetData = data);
        $scope.gridOptions = { data: 'budgetData' };
    }

} ());