(function () {
    'use strict';

    angular
        .module('ngApp')
        .controller('baseCtrl', baseCtrl)

    baseCtrl.$inject = ['$scope', '$rootScope', 'dataService','uiGridConstants','budgetService'];
    /** @ngInject */
    function baseCtrl($scope, $rootScope, dataService,uiGridConstants,budgetService) {
        $rootScope.debug = true;
        $rootScope.budgetData = [];
        // var promise = dataService.fetch('get', '/api/database/GetENGINEERBUDGET');
        var promise = dataService.fetch('get', '/data/budgetData.json');
        promise.then(data => {
                $rootScope.budgetData = angular.copy(data);
                $rootScope.filteredData = data;
            });
        budgetService.setUpGrid();
        
        
    }

} ());