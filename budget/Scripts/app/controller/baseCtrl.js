(function () {
    'use strict';

    angular
        .module('ngApp')
        .controller('baseCtrl', baseCtrl)

    baseCtrl.$inject = ['$scope', '$rootScope', 'dataService','uiGridConstants'];
    /** @ngInject */
    function baseCtrl($scope, $rootScope, dataService,uiGridConstants) {
        $rootScope.budgetData = [];
        // var promise = dataService.fetch('get', '/api/database/GetENGINEERBUDGET');
        var promise = dataService.fetch('get', '/data/budgetData.json');
        promise.then(data => {
                $rootScope.budgetData = angular.copy(data);
                $rootScope.filteredData = data;
            });
        $rootScope.gridOptions = {
            data: 'filteredData',showColumnFooter: true,
            columnDefs: [
                { field: 'HOST', displayName: '主辦機關', width: 270 },
                { field: 'ENGINEER_NAME', displayName: '工程名稱', width: 340 },
                { field: 'BUDGET', displayName: '預算金額', width: 150 },
                { field: 'AWARD_PRICE', displayName: '決標金額', width: 150 },
                { field: 'DATE', displayName: '決標日期', width: 110 },
                { field: 'COMPANY', displayName: '施工廠商', width: 160 },
            ]
        }
    }

} ());