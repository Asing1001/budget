(function () {
    'use strict';

    angular
        .module('ngApp')
        .factory('budgetService', budgetService)

    /** @ngInject */
    budgetService.$inject = ['$rootScope', 'dataService'];

    function budgetService($rootScope, dataService) {

        return {
            setUpGrid: setUpGrid
        }

        function setUpGrid() {
           
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
    }

} ());